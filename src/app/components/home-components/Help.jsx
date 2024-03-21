import Image from "next/image";
import React from "react";

function Help() {
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
        <form>
          <div className="row row-gap-4 w-75 mx-auto">
            <div className="col-lg-6 col-sm-12">
              <input
                type="text"
                placeholder="الاسم*"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input
                type="text"
                placeholder="رقم الهاتف*"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input
                type="text"
                placeholder="نوع المكينة*"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <input
                type="text"
                placeholder="البلد*"
                className="form-control"
                required
              />
            </div>
            <div className="col-12">
              <input
                type="email"
                placeholder="البريد الالكتروني*"
                className="form-control"
                required
              />
            </div>
            <div className="col-12">
              <textarea
                placeholder="اكتب استفسارك*"
                className="form-control"
                rows="7"
                required
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
