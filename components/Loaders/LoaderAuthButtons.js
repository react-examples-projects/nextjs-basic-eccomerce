import Skeleton from "react-loading-skeleton";

export default function LoaderAuthButtons() {
  return (
    <div className="d-flex me-1 w-100">
      <Skeleton height={40} width={100} className="ms-1"/>
    </div>
  );
}
