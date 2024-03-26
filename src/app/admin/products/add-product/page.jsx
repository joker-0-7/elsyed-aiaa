"use client";
import React, { useState } from "react";
import { data } from "./data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
function Page() {
  const [images, setImages] = useState([]);
  const [disabled, setDisable] = useState(false);

  const [imageURLS, setImageURLS] = useState([]);
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    count: "",
  });
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const uploadImageToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImages((imageList) => [...imageList, event.target.files[0]]);
      setImageURLS((urlList) => [
        ...urlList,
        URL.createObjectURL(event.target.files[0]),
      ]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    const formdata = new FormData();
    images.forEach((image, index) => {
      formdata.append(`image`, image);
    });
    formdata.append("name", product.name);
    formdata.append("description", product.description);
    formdata.append("price", product.price);
    formdata.append("discount", product.discount);
    formdata.append("count", product.count);
    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/product/add`,
        formdata
      );
      setDisable(false);
      router.push("/admin/products");
    } catch (error) {
      console.log(error);
      setDisable(false);
    }
  };
  return (
    <div
      className="add-product px-5 "
      style={{ minHeight: "100vh", backgroundColor: "rgba(251, 251, 251, 1)" }}
    >
      <div
        className="content d-flex flex-column justify-content-evenly "
        style={{ minHeight: "80vh" }}
      >
        <div className="title">
          <h1>اضافة منتج</h1>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="row row-gap-5">
              <div className="col-lg-6 col-sm-12">
                <div className="row row-gap-5">
                  {data.map((data, i) => {
                    return (
                      <div className="col-lg-6 col-sm-12" key={data.id}>
                        <label htmlFor={data.name} className="form-label fs-6">
                          {data.lable}
                        </label>
                        <input
                          type={data.inpType}
                          required
                          className="form-control"
                          placeholder={data.placeHolder}
                          id={data.name}
                          name={data.name}
                          aria-describedby="emailHelp"
                          onChange={handleChange}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <label htmlFor="description" className="form-label fs-6">
                  وصف المنتج
                </label>
                <textarea
                  placeholder="وصف المنتج"
                  className="form-control"
                  rows="7"
                  id="description"
                  name="description"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <label
                  htmlFor="file"
                  className="w-100 rounded-3 d-flex justify-content-center align-items-center"
                  style={{
                    border: "2px dashed #A8C8FD",
                    backgroundColor: "#rgba(168, 200, 253, 0.04)",
                    height: "200px",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    id="file"
                    hidden
                    onChange={uploadImageToClient}
                  />
                  <div className="info d-flex justify-content-center align-items-center flex-column">
                    <span
                      className="rounded-5 d-flex justify-content-center align-items-center"
                      style={{
                        width: "82px",
                        height: "42px",
                        backgroundColor: "rgba(19, 109, 199, 0.1)",
                      }}
                    >
                      <i className="bi bi-upload"></i>
                    </span>
                    <span>يرجي ارفاق بعض الصور للمنتج</span>
                  </div>
                </label>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="rusalt">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {images.map((file, index) => {
                      return (
                        <SwiperSlide key={index} className="text-center">
                          <Image
                            src={imageURLS[index]}
                            alt="image"
                            width={300}
                            height={200}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" disabled={disabled}>
                  ارسال
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
