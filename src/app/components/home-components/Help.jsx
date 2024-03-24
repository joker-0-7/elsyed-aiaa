"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Help() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    placeType: "",
    country: "",
    email: "",
    message: "",
    interested: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const rus = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/forms/contact`,
        data
      );
      toast.success("تم ارسال البيانات بنجاح");
      setData({
        name: "",
        phone: "",
        placeType: "",
        country: "",
        email: "",
        message: "",
        interested: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="help">
      <div className="main-heading mt-5">
        <h1 className="text-primary">هل تريد المساعدة</h1>
      </div>
      <div className="icons text-center">
        <Image
          src="/icon/line.png"
          alt="line"
          width={225}
          height={22}
          className="mt-3"
        />
      </div>
      <div className="form mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row row-gap-4 w-75 mx-auto">
            <div className="col-lg-6 col-sm-12">
              <input
                type="text"
                placeholder="الاسم*"
                className="form-control"
                required
                name="name"
                onChange={handleChange}
                value={data.name}
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input
                type="text"
                onChange={handleChange}
                placeholder="رقم الهاتف*"
                className="form-control"
                value={data.phone}
                required
                name="phone"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input
                type="text"
                onChange={handleChange}
                placeholder="نوع المكينة*"
                value={data.placeType}
                className="form-control"
                required
                name="placeType"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input
                onChange={handleChange}
                type="text"
                placeholder="البلد*"
                value={data.country}
                className="form-control"
                required
                name="country"
              />
            </div>
            <div className="col-12">
              <input
                onChange={handleChange}
                type="email"
                placeholder="البريد الالكتروني*"
                value={data.email}
                className="form-control"
                required
                name="email"
              />
            </div>
            <div className="col-12">
              <textarea
                placeholder="اكتب استفسارك*"
                className="form-control"
                value={data.message}
                onChange={handleChange}
                rows="7"
                required
                name="message"
              />
            </div>
            <div className="col-12">
              <button className="btn btn-primary fs-5 w-100">ارسال</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Help;
