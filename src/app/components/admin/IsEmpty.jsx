import Image from "next/image";
import Link from "next/link";
import React from "react";

function IsEmpty({ title, description, page }) {
  return (
    <div
      className="component d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 150px)" }}
    >
      <Image src="/image/empty.png" alt="Empty" width={75} height={135} />
      <div className="title my-3">
        <h4>{title && title}</h4>
      </div>
      <div className="description">
        <p className="text-secondary">{description && description}</p>
      </div>
      {page === "product" && (
        <Link href="/admin/products/add-product" className="btn btn-primary">
          اضافة منتج
        </Link>
      )}
    </div>
  );
}

export default IsEmpty;
