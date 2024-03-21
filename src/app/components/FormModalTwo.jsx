"use client";
import Image from "next/image";
import React from "react";
export const lists = [
  { id: 1, name: "Bank", icon: "building-black" },
  { id: 2, name: "Vodafone Cash", icon: "vf-cash" },
  { id: 3, name: "Usdt", icon: "tether" },
  { id: 4, name: "Paypal", icon: "paypal" },
];
function FormModalTwo({ changeMethod }) {
  return (
    <div className="ul w-100 mt-5">
      <ul className="list-unstyled d-flex flex-column justify-content-around align-items-center w-100">
        {lists.map((list) => {
          return (
            <li
              key={list.id}
              className="w-100 mb-4 rounded-3 px-4 py-2"
              style={{ backgroundColor: "#ffffff" }}
            >
              <label
                className="form-check-label d-flex justify-content-between align-items-center w-100 flex-row-reverse"
                htmlFor={list.name}
              >
                <input
                  type="radio"
                  className="form-check-input"
                  name="payment"
                  id={list.name}
                  value={list.name}
                  onChange={(e) => {
                    changeMethod(e.target.value);
                  }}
                />
                <div className="title d-flex align-items-center">
                  <div
                    className="icon p-1 rounded-1 me-3"
                    style={{ border: "1px solid #D6DCE5" }}
                  >
                    <Image
                      src={`/icon/${list.icon}.png`}
                      width={39}
                      height={31}
                      alt={list.icon}
                    />
                  </div>
                  <div className="name">
                    <h6> {list.name} </h6>
                  </div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FormModalTwo;
