"use client";
import React, { useEffect, useState } from "react";
import StepProgressBar from "react-step-progress";
import FormModalOne from "../FormModalOne";
import FormModalTwo, { lists } from "../FormModalTwo";
import axios from "axios";
import "react-step-progress/dist/index.css";

function Modal() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    payment: "Bank",
    accountName: "",
    accountNum: "",
    price: "",
    productName: "",
  });
  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const uploadImageToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      setImage(selectedImage); // تحديث الصورة
    }
  };

  const handleSubmit = async () => {
    try {
      // تحديث القيم في data
      const updatedData = {
        ...data,
        price: window.localStorage.getItem("price"),
        productName: window.localStorage.getItem("productName"),
      };
      // تحديث data باستخدام setData
      const formdata = new FormData();
      formdata.append("image", image);
      formdata.append("name", data.name);
      formdata.append("phone", data.phone);
      formdata.append("email", data.email);
      formdata.append("address", data.address);
      formdata.append("city", data.city);
      formdata.append("state", data.state);
      formdata.append("zip", data.zip);
      formdata.append("payment", data.payment);
      formdata.append("accountName", data.accountName);
      formdata.append("price", data.price);
      formdata.append("productName", data.productName);
      setData(updatedData);
      // إرسال الطلب باستخدام updatedData بدلاً من data
      const rus = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/forms/payment`,
        formdata
      );
    } catch (error) {
      console.log(error);
    }
  };
  const changeMethod = (e) => {
    console.log(e);
    window.localStorage.setItem("method", e);
  };
  const RusaltForm = ({ labelOne, inputOne, labelTwo, handleChange }) => {
    const [price, setPrice] = useState("");
    useEffect(() => {
      setPrice(window.localStorage.getItem("price"));
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
          <input
            type="text"
            className="form-control"
            name="accountName"
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <label htmlFor="price" className="form-label fs-6">
            {labelTwo}
          </label>
          <input
            type="text"
            required
            className="form-control"
            name="accountNum"
            onChange={handleChange}
          />
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
                onChange={uploadImageToClient}
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
  const FormTree = ({ handleChange }) => {
    const method = window.localStorage.getItem("method");
    if (!method) return <div>Select a method of payment</div>;
    console.log(method);
    switch (method) {
      case lists[0].name:
        return (
          <RusaltForm
            handleChange={handleChange}
            inputOne="EG460002023102310383000002410"
            labelOne="رقم الحساب البنكي"
            labelTwo="رقم حسابك"
          />
        );
      case lists[1].name:
        return (
          <RusaltForm
            handleChange={handleChange}
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
            handleChange={handleChange}
          />
        );
      case lists[3].name:
        return (
          <RusaltForm
            inputOne="EG460002023102310383000002410"
            labelOne="حسال البيبال"
            labelTwo="حساب البايبال الخاص بك"
            handleChange={handleChange}
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
                    content: (
                      <FormModalOne
                        handleChange={handleChange}
                        data={data}
                        setData={setData}
                      />
                    ),
                  },
                  {
                    label: "وسائل الدفع",
                    name: "step 2",
                    subtitle: "جميع طرق الدفع يدويه",
                    content: (
                      <FormModalTwo
                        changeMethod={changeMethod}
                        handleChange={handleChange}
                      />
                    ),
                  },
                  {
                    label: "استكمال الدفع",
                    name: "step 3",
                    content: <FormTree handleChange={handleChange} />,
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
