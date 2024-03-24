"use client";
import React, { useEffect, useState } from "react";
import { country_arr, s_a } from "./country-states";

function FormModalOne({ data, handleChange, setData }) {
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
            name="name"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="phone" className="form-label fs-6">
            رقم الهاتف
          </label>
          <input
            type="text"
            required
            name="phone"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label fs-6">
            العنوان
          </label>
          <input
            type="text"
            required
            name="address"
            className="form-control"
            id="address"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="exampleInputEmail1" className="form-label fs-6">
            بريدك الالكتروني
          </label>
          <input
            type="text"
            name="email"
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="country" className="form-label fs-6">
            المدينة
          </label>
          <select className="form-control" onChange={handleChange} name="city">
            {country_arr.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="state" className="form-label fs-6">
            المحافظة
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="state"
            name="state"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="zip" className="form-label fs-6">
            الرمز البريدي للمحافظة
          </label>
          <input
            type="text"
            name="zip"
            required
            className="form-control"
            id="zip"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FormModalOne;
