import Image from "next/image";
import React from "react";
import img from "../../../public/image/product-image.png";
function BoxProduct({ product, handleDelete }) {
  return (
    <div
      className="box-product-admin rounded-4 position-relative px-4 py-3 d-flex flex-column justify-content-around"
      style={{
        backgroundColor: "rgba(168, 200, 253, 0.2)",
        width: "300px",
        height: "350px",
      }}
    >
      <Image
        src={img}
        alt={product.name}
        className=" mx-auto"
        width={180}
        height={120}
      />
      <h1>{product.name} </h1>
      <h6 className="text-secondary">{product.description}</h6>
      <button className="btn btn-primary w-50 fw-bold">تعديل</button>
      <div
        className="dele-icon position-absolute d-flex justify-content-center align-items-center"
        style={{
          top: "15px",
          left: "15px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          cursor: "pointer",
        }}
        onClick={() => handleDelete(product._id)}
      >
        <i class="bi bi-trash fs-4 text-danger"></i>
      </div>
    </div>
  );
}

export default BoxProduct;
