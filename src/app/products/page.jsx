"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "../utils/loader";
function Products() {
  const [products, setProducts] = useState([]);
  const [client, setClient] = useState(false);
  const getData = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API}/products`)
        .then((res) => res.data)
        .then((res) => {
          setProducts([...products, ...res]);
          console.log(res);
          setClient(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return client ? (
    <div className="products">
      <div className="container">
        <div className="title mt-5">
          <h1>المنتجات</h1>
        </div>
        <div className="product-list mt-5">
          <div className="row">
            {products &&
              products.map((product) => {
                return (
                  <div
                    className="col-lg-4 col-sm-12"
                    key={product && product._id}
                  >
                    <div className="box-product" style={{ height: "533px" }}>
                      <span
                        className="is-new rounded-3 text-light px-3"
                        style={{ backgroundColor: "rgba(37, 102, 211, 0.84)" }}
                      >
                        جديد
                      </span>
                      <div className="image-product">
                        <div id="carouselExample" className="carousel slide">
                          <div className="carousel-inner">
                            {product &&
                              product.image.map((img, i) => {
                                return (
                                  <div
                                    className={`carousel-item ${
                                      i == 0 ? "active" : ""
                                    }`}
                                    key={img}
                                  >
                                    <Image
                                      src="/image/product-image.png"
                                      className="d-block w-100"
                                      alt="product-images"
                                      width={345}
                                      height={190}
                                    />
                                  </div>
                                );
                              })}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                      <div className="title-product">
                        <h1>{product && product.name}</h1>
                      </div>
                      <div className="description-product">
                        {product && product.description}
                      </div>
                      <div className="buttons-box d-flex mt-5">
                        <div className="order-now">
                          <Link
                            href={`/products/${product && product._id}`}
                            className="btn btn-primary fs-5 ms-5"
                          >
                            اطلب الأن
                          </Link>
                        </div>
                        <div className="another-btn">
                          <Link
                            href={`/products/${product && product._id}`}
                            className="d-flex justify-content-center align-items-center"
                            style={{
                              backgroundColor: "#B8B8B8",
                              width: "50px",
                              height: "49px",
                              borderRadius: "17px",
                            }}
                          >
                            <Image
                              src="/icon/note.png"
                              alt="note"
                              width={27}
                              height={26}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Products;
