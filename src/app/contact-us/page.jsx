"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Page() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    interested: "",
    placeType: "",
    country: "",
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
    <div className="contact-us" style={{ minHeight: "100vh" }}>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="box-contact-us w-100" style={{ minHeight: "80vh" }}>
          <div className="row w-100 h-100">
            <div
              className="col-lg-8 col-sm-12 rounded-end-4 px-5 py-4 one"
              style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
            >
              <div className="title">
                <h1 className="fw-bold">احنا هنا علشانك ، خليك</h1>
                <h1 className="fw-bold">علي تواصل 👋</h1>
              </div>
              <div className="content mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="row row-gap-4 align-content-end h-100">
                    <div className="col-lg-6 col-sm-12">
                      <label htmlFor="name" className="form-label fs-6 fw-bold">
                        اسمك
                      </label>
                      <input
                        type="text"
                        value={data.name}
                        onChange={handleChange}
                        name="name"
                        required
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label
                        htmlFor="email"
                        className="form-label fs-6 fw-bold"
                      >
                        بريدك الالكتروني
                      </label>
                      <input
                        type="email"
                        value={data.email}
                        onChange={handleChange}
                        name="email"
                        required
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label
                        htmlFor="phone"
                        className="form-label fs-6 fw-bold"
                      >
                        رقم الهاتف
                      </label>
                      <input
                        type="text"
                        value={data.phone}
                        onChange={handleChange}
                        name="phone"
                        required
                        className="form-control"
                        id="phone"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label
                        htmlFor="interestet"
                        className="form-label fs-6 fw-bold"
                      >
                        بماذا كنت مهتم
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        value={data.interested}
                        required
                        className="form-control"
                        id="interestet"
                        aria-describedby="emailHelp"
                        name="interested"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="interestet"
                        className="form-label fs-6 fw-bold"
                      >
                        اترك لنا رساله
                      </label>
                      <textarea
                        value={data.message}
                        name="message"
                        placeholder="اخبرنا كيف يمكننا مساعدتك"
                        onChange={handleChange}
                        className="form-control"
                        rows="7"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary d-flex justify-content-center align-items-center w-25 fs-5">
                        <span>ارسال</span>
                        <span>
                          <i className="bi bi-arrow-up-left me-3"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-0 d-none d-md-flex rounded-start-4 h-100 flex-column py-4 px-4"
              style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
            >
              <div className="title mb-5">
                <h1 className="fw-bold">طرق اخري للاتصال</h1>
                <p className="text-secondary">
                  احنا بنحب نسمع منك. فريقنا موجود دائمًا للدردشة.
                </p>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-around">
                  <div className="icon">
                    <Image
                      src="/icon/chat.png"
                      width={15}
                      height={15}
                      alt="icon"
                    />
                  </div>
                  <div className="data w-75">
                    <h4 className="fw-bold">
                      تواصل معنا علي البريد الالكتروني
                    </h4>
                    <p>فريقنا متواجد هنا للمساعدة</p>
                    <p className="text-blue">support@alsayedalaa.com.eg</p>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-around">
                  <div className="icon">
                    <Image
                      src="/icon/bag.png"
                      width={15}
                      height={15}
                      alt="icon"
                    />
                  </div>
                  <div className="data w-75">
                    <h4 className="fw-bold">للمهن</h4>
                    <p>أرسل سيرتك الذاتية على</p>
                    <p className="text-blue">support@alsayedalaa.com.eg</p>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-around">
                  <div className="icon">
                    <Image
                      src="/icon/phone.png"
                      width={15}
                      height={15}
                      alt="icon"
                    />
                  </div>
                  <div className="data w-75">
                    <h4 className="fw-bold">هاتف</h4>
                    <p>
                      من الاثنين إلى الجمعة من الساعة 8 صباحًا حتى الساعة 5
                      مساءً.
                    </p>
                    <p className="text-blue">01006169399</p>
                    <p className="text-blue">01000933008</p>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-around">
                  <div className="icon">
                    <i className="bi bi-geo-alt text-blue"></i>
                  </div>
                  <div className="data w-75">
                    <h4 className="fw-bold">عنوان المؤسسة</h4>
                    <p>المقر الرئيسي لمكتبنا</p>
                    <p className="text-blue">
                      السنبلاوين - المنصورة، محافظة الدقهلية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
