"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "../utils/loader";
import { Pagination } from "antd";
import Modal from "../components/product/Modal";
import moment from "moment";

function Products() {
  const [products, setProducts] = useState([]);
  const [client, setClient] = useState(false);
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API}/products/`)
        .then((res) => res.data)
        .then((res) => {
          setProducts([...products, ...res]);
          setClient(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (page) => {
    setCurrent(page);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setClient(false);
    try {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/products/${current}`)
        .then((res) => res.data)
        .then((res) => {
          setData(res);
          setClient(true);
        });
    } catch (error) {
      console.log(error);
      setClient(true);
    }
  }, [current]);
  const timeFun = (e) => {
    const currentTime = Date.now();
    const createdAtTime = new Date(e).getTime();
    const millisecondsSinceCreation = currentTime - createdAtTime;
    const daysSinceCreation = Math.floor(
      millisecondsSinceCreation / (1000 * 60 * 60 * 24)
    );
    return daysSinceCreation;
  };
  return client ? (
    <div className="products">
      <div className="container">
        <div className="title mt-5">
          <h1>المنتجات</h1>
        </div>
        <div className="product-list mt-5">
          <div className="row">
            {data &&
              data.map((product) => {
                return (
                  <div
                    className="col-lg-4 col-sm-12 p-5"
                    key={product && product._id}
                  >
                    <div className="box-product">
                      {timeFun(product.createdAt) < 3 && (
                        <span
                          className="is-new rounded-3 text-light px-3 d-block p-1 mb-2"
                          style={{
                            backgroundColor: "rgba(37, 102, 211, 0.84)",
                            width: "66px",
                          }}
                        >
                          جديد
                        </span>
                      )}
                      {product.count == 0 && (
                        <span
                          className="is-new rounded-3 text-light px-3 d-block p-1 mb-2 text-center"
                          style={{
                            backgroundColor: "#DE3932",
                            width: "66px",
                          }}
                        >
                          منتهي
                        </span>
                      )}
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
                                      src={`${process.env.NEXT_PUBLIC_API}/public/images/products/${img}`}
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
                          <button
                            type="button"
                            style={{
                              cursor: product.count === 0 ? "auto" : "pointer",
                            }}
                            className="btn btn-primary fs-5 ms-5"
                            data-bs-toggle={product.count > 0 ? "modal" : ""}
                            disabled={product.count > 0 ? false : true}
                            data-bs-target={
                              product.count > 0 ? "#exampleModal" : ""
                            }
                            onClick={() => {
                              window.localStorage.setItem(
                                "price",
                                product.price
                              );
                              window.localStorage.setItem(
                                "productName",
                                product.name
                              );
                            }}
                          >
                            اطلب الأن
                          </button>
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
          <div dir="ltr" className="text-center">
            <Pagination
              defaultCurrent={1}
              current={current}
              onChange={onChange}
              total={Math.round((products.length / 6) * 10)}
            />
          </div>
        </div>
      </div>
      <Modal />
    </div>
  ) : (
    <Loader />
  );
}

export default Products;
