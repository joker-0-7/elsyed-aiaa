"use client";
import React, { useEffect, useState } from "react";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";
import FormModalOne from "../FormModalOne";
import FormModalTwo, { lists } from "../FormModalTwo";

function Modal() {
  const handleSubmit = () => {
    console.log("submit");
  };
  const changeMethod = (e) => {
    console.log(e);
    window.localStorage.setItem("method", e);
  };
  const RusaltForm = ({ labelOne, inputOne, labelTwo, inputTwo }) => {
    const [price, setPrice] = useState("");
    useEffect(() => {
      setPrice(window.localStorage.getItem("product"));
    }, []);
    return (
      <div className="row row-gap-3" dir="rtl">
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="info" className="form-label fs-6">
            {labelOne}
          </label>
          <input
            type="text"
            className="form-control"
            readOnly
            disabled
            value={inputOne}
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="price" className="form-label fs-6">
            السعر النهائي للمنتج
          </label>
          <input
            type="text"
            required
            className="form-control"
            disabled
            readOnly
            value={price}
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="name" className="form-label fs-6">
            الاسم بالكامل
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="price" className="form-label fs-6">
            {labelTwo}
          </label>
          <input type="text" required className="form-control" />
        </div>
        <div className="col-12">
          <label
            htmlFor="file"
            className="w-100 rounded-3 d-flex justify-content-center align-items-center"
            style={{
              border: "2px dashed #A8C8FD",
              backgroundColor: "#rgba(168, 200, 253, 0.04)",
              height: "200px",
            }}
          >
            <input type="file" accept="image/*" id="file" hidden />
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
              <span>يرجي ارفاق لقطة شاشة للدفع</span>
            </div>
          </label>
        </div>
      </div>
    );
  };
  const FormTree = () => {
    const method = window.localStorage.getItem("method");
    if (!method) return <div>Select a method of payment</div>;
    console.log(method);
    switch (method) {
      case lists[0].name:
        return (
          <RusaltForm
            inputOne="EG460002023102310383000002410"
            labelOne="رقم الحساب البنكي"
            labelTwo="رقم حسابك"
          />
        );
      case lists[1].name:
        return (
          <RusaltForm
            inputOne="EG460002023102310383000002410"
            labelOne="فودافون كاش"
            labelTwo="رقم قودافون كاش الخاص بك"
          />
        );
      case lists[2].name:
        return (
          <RusaltForm
            inputOne="EG460002023102310383000002410"
            labelOne="رقم المحفظة"
            labelTwo="رقم المحفظة الخاص بك"
          />
        );
      case lists[3].name:
        return (
          <RusaltForm
            inputOne="EG460002023102310383000002410"
            labelOne="حسال البيبال"
            labelTwo="حساب البايبال الخاص بك"
          />
        );
    }
  };
  return (
    <div
      dir="ltr"
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            backgroundColor: "#F5F5F5",
            width: "750px",
            height: "auto",
          }}
        >
          <div className="modal-header w-100 border-bottom-0">
            <h1 className="modal-title fs-5 w-100" id="exampleModalLabel">
              <StepProgressBar
                labelClass="fs-6"
                previousBtnName="رجوع"
                nextBtnName="التالي"
                submitBtnName="ارسال"
                primaryBtnClass="btn btn-primary w-75"
                contentClass="mt-5"
                secondaryBtnClass="btn btn-outline-primary w-25"
                subtitleClass="sub-title-class"
                startingStep={0}
                onSubmit={handleSubmit}
                steps={[
                  {
                    label: "عنوان الشحن",
                    name: "step 1",
                    content: <FormModalOne />,
                  },
                  {
                    label: "وسائل الدفع",
                    name: "step 2",
                    subtitle: "جميع طرق الدفع يدويه",
                    content: <FormModalTwo changeMethod={changeMethod} />,
                  },
                  {
                    label: "استكمال الدفع",
                    name: "step 3",
                    content: <FormTree />,
                  },
                ]}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
