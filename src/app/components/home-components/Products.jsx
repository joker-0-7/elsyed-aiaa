"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import axios from "axios";
import Link from "next/link";
import Modal from "../product/Modal";
function Products() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/products`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // اختيار 3 منتجات بشكل عشوائي
  const getRandomProducts = () => {
    if (products.length > 3) {
      const randomProducts = [];
      while (randomProducts.length < 3) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        console.log(randomProduct);
        if (
          !randomProducts.some((product) => product._id === randomProduct._id)
        ) {
          randomProducts.push(randomProduct);
        }
      }
      return randomProducts;
    } else {
      return products;
    }
  };
  return (
    <div className="product">
      <div className="main-heading">
        <h1 className="text-primary">منتجات ... السيد علاء</h1>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {getRandomProducts().map((product, i) => {
            return (
              <button
                key={i}
                type="button"
                className={i == 0 ? "active" : ""}
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={i}
                aria-label={`Slide ${i + 1}`}
              />
            );
          })}
        </div>
        <div className="carousel-inner" style={{ minHeight: "40vh" }}>
          {getRandomProducts().map((product, i) => {
            return (
              <div
                className={`carousel-item ${i == 0 ? "active" : ""}`}
                key={product._id}
                style={{ minHeight: "40vh" }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API}/public/images/products/${product.image[0]}`}
                  className="d-block mx-auto"
                  width={849}
                  height={422}
                  alt="product-image"
                />
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h3>{product.name}</h3>
                  <p className="fs-5">{product.description}</p>
                  <div className="btns d-flex justify-content-evenly w-50 align-items-center mx-auto">
                    <Link
                      className="btn btn-outline-primary fs-5"
                      href={`/products/${product._id}`}
                    >
                      تفاصيل اكثر
                    </Link>
                    <button
                      type="button"
                      style={{
                        cursor: product.count === 0 ? "auto" : "pointer",
                      }}
                      className="btn btn-primary d-flex align-items-center justify-content-around fs-5"
                      data-bs-toggle={product.count > 0 ? "modal" : ""}
                      disabled={product.count > 0 ? false : true}
                      data-bs-target={product.count > 0 ? "#exampleModal" : ""}
                      onClick={() => {
                        window.localStorage.setItem("price", product.price);
                        window.localStorage.setItem(
                          "productName",
                          product.name
                        );
                      }}
                    >
                      <span>اطلب الأن</span>
                      <span className="icon me-2">
                        <Image
                          src="/icon/buying.png"
                          width={24}
                          height={24}
                          alt="icon"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="box d-none d-md-block mt-5">
        <div className="row position-relative">
          <Image
            src="/icon/Vector.png"
            width={950}
            height={450}
            alt="vector"
            className="position-absolute"
          />
          <div
            className="col-lg-6 col-sm-12 d-flex flex-column justify-content-evenly data"
            style={{ height: "384px", zIndex: "9" }}
          >
            <h1 className="text-light fw-bold">
              استشارات <span className="text-primary">فنية</span>
            </h1>
            <div className="paraghraph">
              <p className="fw-bold fs-5">
                تقديم الاستشارات الفنية اللازمة لمختلف فئات العملاء
              </p>
            </div>
            <div className="button">
              <button className="btn btn-primary fw-bolder fs-5">
                احصل علي استشارة
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Image
              src="/image/robot-smile.png"
              alt="consulting"
              className="robot"
              width={385}
              height={450}
            />
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default Products;
