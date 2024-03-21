import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-0">{/* <Image /> */}</div>
          <div className="col-lg-6 col-sm-12">
            <div className="title">
              <h1>تسجيل الدخول</h1>
              <h6>تسجيل الدخول الي مؤسسة السيد علاء</h6>
            </div>
            <div className="form">
              <form>
                <div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      البريد الالكتروني
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      كلمه السر
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary">دخول</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
