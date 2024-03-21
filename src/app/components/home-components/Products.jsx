"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../../public/image/robot-smile.png";
import axios from "axios";
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
              //     <button
              //   type="button"
              //   data-bs-target="#carouselExampleCaptions"
              //   data-bs-slide-to={0}
              //   className="active"
              //   aria-current="true"
              //   aria-label="Slide 1"
              // />
              // <button
              //   type="button"
              //   data-bs-target="#carouselExampleCaptions"
              //   data-bs-slide-to={1}
              //   aria-label="Slide 2"
              // />
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
        <div className="carousel-inner">
          {getRandomProducts().map((product, i) => {
            return (
              <div
                className={`carousel-item ${i == 0 ? "active" : ""}`}
                key={product._id}
              >
                <Image
                  src="/image/product-image.png"
                  // src={product.image}
                  className="d-block mx-auto"
                  width={949}
                  height={522}
                  alt="product-image"
                />
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h3>{product.name}</h3>
                  <p className="fs-5">{product.description}</p>
                  <div className="btns d-flex justify-content-evenly w-50 align-items-center mx-auto">
                    <button className="btn btn-outline-primary fs-5">
                      تفاصيل اكثر
                    </button>
                    <button className="btn btn-primary d-flex align-items-center justify-content-around fs-5">
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
      <div className="box d-none d-md-block">
        <div className="row position-relative">
          <Image
            src="/icon/Vector.png"
            width={950}
            height={550}
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
            <Image src={img} alt="consulting" className="robot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;