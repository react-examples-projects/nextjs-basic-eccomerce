import connectDb from "../../helpers/mongodb";
import productController from "./controllers/productController";
import formidable from "formidable";
import fs from "fs";

connectDb();

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const data = await productController.getAll();
      res.status(200).json({
        data,
        status: 200,
        error: false,
      });
    } else if (req.method === "POST") {
      const form = new formidable.IncomingForm();
      const files = [];
      const fields = {};
      form.keepExtensions = true;
      form.keepFilenames = true;

      form.on("file", (field, file) => {
        const imgFile = fs.readFileSync(file.filepath);
        const mimeType = "data:" + file.mimetype + ";base64,";
        const base64Img = mimeType + Buffer.from(imgFile).toString("base64");
        files.push(base64Img);
      });

      form.on("field", (field, value) => {
        fields[field] = value;
      });

      form.on("end", async function () {
        const {
          product_name,
          product_description,
          product_price,
          product_count,
        } = fields;
        const data = await productController.create({
          product_name,
          product_description,
          product_price,
          product_count,
          product_images: files,
        });
        res.status(200).json({
          data,
        });
      });

      form.parse(req);
      //   fs.unlinkSync(files.product_image.filepath);
    } else {
      res.status(404).json({
        message: "Not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}
