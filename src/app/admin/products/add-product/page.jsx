"use client";
import React, { useState } from "react";
import { data } from "./data";

function Page() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    desdescound: "",
    count: "",
  });
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
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
          <form>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
