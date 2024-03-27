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
      `${process.env.NEXT_PUBLIC_API}/forms/payments`
    );
    setData(rus.data);
    setClient(true);
  };
  useEffect(() => {
    getData();
  }, []);
  const acceptFun = async (e) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/forms/payment/accept/${e._id}`,
        e
      );
      getData();
    } catch (err) {
      console.log(err);
    }
  };
  const adjFun = async (e) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/forms/payment/rej/${e}`
      );
      getData();
    } catch (err) {
      console.log(err);
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
            <h1>الطلبات</h1>
          </div>
        </div>
        {data && data.length > 0 ? (
          <div className="content text-center">
            <div className="info" style={{ overflow: "auto" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">رقم الطلب</th>
                    <th scope="col">المنتج</th>
                    <th scope="col">اجمالي التكلفة</th>
                    <th scope="col">رقم الهاتف</th>
                    <th scope="col">العميل</th>
                    <th scope="col">تاريخ الطلب</th>
                    <th scope="col">طريقة الدفع</th>
                    <th scope="col">تأكيد الدفع</th>
                    <th scope="col">حالة الطلب</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, i) => {
                    return (
                      <tr key={data._id}>
                        <th scope="row">{i + 1}</th>
                        <td>{data.productName}</td>
                        <td>
                          <span
                            style={{
                              backgroundColor: "rgba(229, 250, 234, 1)",
                              color: "#22C55E",
                            }}
                            className="px-3 py-1 mx-auto fw-bold rounded-2 d-block text-center "
                          >
                            {data.price}
                          </span>
                        </td>
                        <td>{data.phone}</td>
                        <td>{data.name}</td>
                        <td>
                          <span
                            className="d-block w-100 px-2 py-1 text-secondary mx-auto text-center rounded-2"
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
                        <td>{data.payment}</td>
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
                              setImage(data.image);
                            }}
                          >
                            <i className="bi bi-eye ms-1"></i>
                            عرض
                          </span>
                        </td>
                        <td>
                          {data.status == null ? (
                            <>
                              <span
                                onClick={() => {
                                  acceptFun(data);
                                }}
                                className="btn"
                                style={{
                                  backgroundColor: "rgba(229, 250, 234, 1)",
                                  color: "#22C55E",
                                }}
                              >
                                موافقة
                              </span>
                              <span
                                className="btn me-2"
                                onClick={() => {
                                  adjFun(data._id);
                                }}
                                style={{
                                  backgroundColor: "rgba(255, 103, 103, 0.38)",
                                  color: "#D32525",
                                }}
                              >
                                رفض
                              </span>
                            </>
                          ) : data.status ? (
                            <span
                              className="btn d-flex align-items-center w-75 justify-content-center mx-auto"
                              style={{
                                backgroundColor: "rgba(229, 250, 234, 1)",
                                color: "#22C55E",
                              }}
                            >
                              <i className="bi bi-check-circle-fill text-success ms-2"></i>
                              نشط
                            </span>
                          ) : (
                            <span
                              className="btn d-flex align-items-center w-75 justify-content-center mx-auto"
                              style={{
                                backgroundColor: "rgba(255, 103, 103, 0.38)",
                                color: "#D32525",
                              }}
                            >
                              <i className="bi bi-x-circle-fill text-danger ms-2"></i>
                              ملغي
                            </span>
                          )}
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
        className="modal fade"
        id="imageOrder"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <Image
                src={`${process.env.NEXT_PUBLIC_API}/public/images/orders/${data}`}
                alt="image"
                width={450}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
