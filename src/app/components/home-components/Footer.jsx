"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { socials } from "../social";

function Footer() {
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
    if (products.length > 4) {
      const randomProducts = [];
      while (randomProducts.length < 4) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
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
    <div className="footer mt-5">
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <div className="container">
          <section className="py-4 ">
            <div className="text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-md-start text-sm-center">
                  <h6 className="text-uppercase fw-bold mb-4 text-md-end text-sm-center">
                    <Image
                      src="/logo.png"
                      width={63}
                      height={67}
                      alt="logo-footer"
                    />
                  </h6>
                  <p className="f-5 fw-bold text-end">
                    من المهم جدًا أن يتمكن العميل من الحصول على بعض دعم العملاء
                  </p>
                  <div className="socials d-flex w-75 justify-content-between">
                    {socials.map((social) => {
                      return (
                        <div key={social.id}>
                          <Link
                            href={social.link}
                            className="text-primary fw-bold fs-5"
                          >
                            {social.icon}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
                  <h6 className="text-uppercase fw-bold mb-4">منتج</h6>
                  {getRandomProducts().map((product) => {
                    return (
                      <p key={product._id}>
                        <Link
                          href={`/products/${product._id}`}
                          className="text-reset text-decoration-none"
                        >
                          {product.name}
                        </Link>
                      </p>
                    );
                  })}
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
                  <h6 className="text-uppercase fw-bold mb-4">اتصل بنا</h6>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    support@alsayedalaa.com.eg
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> 01006169399
                  </p>
                  <p>
                    <i className="fas fa-home me-3" />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874867.0028143933!2d30.473491767932067!3d31.069428850960456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f78f3d85e7c633%3A0x815604b7e09ae092!2z2YXYpNiz2LPYqSDYp9mE2LPZitiv2LnZhNin2KEg2YXYp9mD2YrZhtin2Kog2KfZhNix2K7Yp9mFINmI2YTZhNis2LHYp9mG2YrYqg!5e0!3m2!1sen!2seg!4v1711494413723!5m2!1sen!2seg"
                      width={300}
                      height={200}
                      style={{ borderRadius: "11px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </p>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <div className="text-end p-4">
            ©{new Date().getFullYear()}{" "}
            <Link className="text-reset text-decoration-none" href="/">
              مؤسسة السيد علاء
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
