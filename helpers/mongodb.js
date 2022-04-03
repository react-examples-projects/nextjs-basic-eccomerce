import Mongoose from "mongoose";

let connectionToDb = false;
const CONNECTION_TOTAL_TRIES = 4;
let connectionTries = 1;
const connection = Mongoose.connection;
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/nextjs_crud";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

connection.on("open", () => {
  console.log("Connect to database in " + uri);
});

connection.on("error", (err) => {
  console.error("Error in connect to mongodb", err);
});

if (!uri) {
  throw new Error("Please add your Mongo URI to .env or define it");
}

export default async function connectDb() {
  if (connectionToDb) {
    console.warn("Already exists a connection to mongodb");
    return;
  }
  try {
    const database = await Mongoose.connect(uri, options);
    connectionToDb = database.connections[0].readyState;
  } catch (err) {
    console.error("Error in connect to mongodb", err);
    const id = setTimeout(() => {
      if (connectionTries === CONNECTION_TOTAL_TRIES) return clearTimeout(id);
      console.warn(`Reconnecting to mongodb server {${connectionTries}}...`);
      connectionTries++;
      connectDb();
    }, 4000);
  }
}
