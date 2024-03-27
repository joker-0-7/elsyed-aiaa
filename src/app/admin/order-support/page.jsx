"use client";
import IsEmpty from "@/app/components/admin/IsEmpty";
import Loader from "@/app/utils/loader";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "moment/locale/ar";
import Image from "next/image";
import Link from "next/link";

function Page() {
  moment.locale("ar");
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [client, setClient] = useState(false);
  const getData = async () => {
    const rus = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/forms/contacts`
    );
    setData(rus.data);
    setClient(true);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (e) => {
    setClient(false);
    try {
      await axios
        .delete(`${process.env.NEXT_PUBLIC_API}/forms/contact/${e}`)
        .then((res) => {
          getData();
          setClient(true);
        });
    } catch (err) {
      console.log(err);
      setClient(true);
    }
  };
  return client ? (
    <div className="order-page px-5" style={{ minHeight: "100vh" }}>
      <div className="container" style={{ minHeight: "100vh" }}>
        <div
          className="header d-flex justify-content-between align-items-center"
          style={{ height: "150px" }}
        >
          <div className="title">
            <h1>طلبات الدعم</h1>
          </div>
        </div>
        {data && data.length > 0 ? (
          <div className="content text-center">
            <div className="info" style={{ overflow: "auto" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">الاسم</th>
                    <th scope="col">البريد الالكتروني</th>
                    <th scope="col">رقم الهاتف</th>
                    <th scope="col">تاريخ الطلب</th>
                    <th scope="col">استفسار بخصوص</th>
                    <th scope="col">رسالة العميل</th>
                    <th scope="col">حذف الطلب</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, i) => {
                    return (
                      <tr key={data._id}>
                        <th scope="row">{i + 1}</th>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>
                          <span
                            className="d-block w-75 px-2 py-1 text-secondary mx-auto text-center rounded-2"
                            style={{ backgroundColor: "#FAFAFA" }}
                          >
                            <i className="bi bi-clock ms-2"></i>
                            {moment
                              .utc(data.createdAt)
                              .local()
                              .startOf("seconds")
                              .fromNow()}
                          </span>
                        </td>
                        <td>{data.placeType || data.interested}</td>
                        <td>
                          <span
                            className="d-block w-75 px-2 py-1 text-secondary mx-auto text-center rounded-2"
                            data-bs-toggle="modal"
                            data-bs-target="#imageOrder"
                            style={{
                              backgroundColor: "#FAFAFA",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setImage(data.message);
                            }}
                          >
                            <i className="bi bi-eye ms-1"></i>
                            عرض
                          </span>
                        </td>
                        <td>
                          <span
                            className="btn me-2"
                            onClick={() => {
                              handleDelete(data._id);
                            }}
                            style={{
                              backgroundColor: "rgba(255, 103, 103, 0.38)",
                              color: "#D32525",
                            }}
                          >
                            حذف
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="pagination" dir="ltr">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-primary">
                  التالي
                </button>
                <button type="button" className="btn btn-light">
                  السابق
                </button>
              </div>
            </div>
            <Modal data={image} />
          </div>
        ) : (
          <IsEmpty
            title="لم يتم استقبال اي رسائل مساعدات بعد"
            description="رسائل الدعم سوف تظهر هنا"
          />
        )}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Page;

export const Modal = ({ data }) => {
  return (
    <div>
      <div
        className=" modal fade"
        id="imageOrder"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <p>{data}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                اغلاق
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
