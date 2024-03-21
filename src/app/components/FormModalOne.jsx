"use client";
import React, { useEffect, useState } from "react";
import { country_arr, s_a } from "./country-states";

function FormModalOne() {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className="form-modal-one" dir="rtl">
      <div className="row row-gap-4">
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="name" className="form-label fs-6">
            الأسم بالكامل
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="phone" className="form-label fs-6">
            رقم الهاتف
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label fs-6">
            العنوان
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="address"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="exampleInputEmail1" className="form-label fs-6">
            بريدك الالكتروني
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="country" className="form-label fs-6">
            المدينة
          </label>
          <select
            className="form-control"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          >
            {country_arr.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="city" className="form-label fs-6">
            المحافظة
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="city"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="exampleInputEmail1" className="form-label fs-6">
            الرمز البريدي للمحافظة
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </div>
  );
}

export default FormModalOne;
