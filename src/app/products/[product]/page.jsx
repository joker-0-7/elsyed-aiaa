"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import MoreProducts from "@/app/components/product/MoreProducts";
import Loader from "@/app/utils/loader";
import Listing from "@/app/utils/Listing";
import Modal from "@/app/components/product/Modal";

function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [onToggle, setOnToggle] = useState(false);
  const [val, setVal] = useState(1);
  const [product, setProduct] = useState([]);
  const [client, setClient] = useState(false);
  const params = useParams();
  const [show, setShow] = useState(false);
  const getData = async () => {
    try {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/product/${params.product}`
      );
      setProduct(data.data);
      setClient(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = () => {
    console.log("submit");
  };
  return client ? (
    <>
      <div className="product-page">
        <div className="container">
          <div className="product-container py-3 px-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <>
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {product &&
                      product.image &&
                      product.image.map((img, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <Image
                              // src={img}
                              src={`${process.env.NEXT_PUBLIC_API}/public/images/products/${img}`}
                              alt="product"
                              width={325}
                              height={174}
                              className="mx-auto"
                            />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {product &&
                      product.image &&
                      product.image.map((img, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <Image
                              // src={img}
                              src={`${process.env.NEXT_PUBLIC_API}/public/images/products/${img}`}
                              alt="product"
                              width={150}
                              height={94}
                            />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="heading mb-3"></div>
                <div className="title mb-3">
                  <h3>{product?.name}</h3>
                </div>
                <hr />
                <div className="price mb-3">
                  <h1>{product?.price}</h1>
                  <h5 className="" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                    <del>{product?.discount} </del>
                  </h5>
                </div>
                <hr />
                <div className="description mb-3">
                  <h3>تفاصيل المنتج</h3>
                  <p className="fw-bold">{product?.description}</p>
                </div>
                <hr />
                <div className="btns mt-5">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-primary w-75 fs-5 fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          window.localStorage.setItem("price", product.price);
                          window.localStorage.setItem(
                            "productName",
                            product.name
                          );
                        }}
                      >
                        <span>اطلب الأن</span>
                        <span>
                          <i className="bi bi-bag me-2"></i>
                        </span>
                      </button>
                    </div>
                    <div className="col-6">
                      <div className="number d-flex">
                        <span
                          className={`minus ${val == 0 ? "disabled" : ""}`}
                          onClick={() => {
                            val == 0 ? false : setVal(val - 1);
                          }}
                        >
                          -
                        </span>
                        <input
                          type="text"
                          value={val}
                          className="form-control text-center"
                          readOnly
                        />
                        <span
                          className={`plus ${
                            val == product.count ? "disabled" : ""
                          }`}
                          onClick={() => {
                            val == product.count ? false : setVal(val + 1);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            <Modal />
          </>
          <div className="more">
            <MoreProducts />
          </div>
        </div>
      </div>
      <Listing show={show} setShow={setShow} handleSubmit={handleSubmit} />
    </>
  ) : (
    <Loader />
  );
}

export default Product;
