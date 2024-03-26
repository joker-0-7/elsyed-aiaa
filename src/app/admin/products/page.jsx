"use client";
import BoxProduct from "@/app/components/BoxProduct";
import IsEmpty from "@/app/components/admin/IsEmpty";
import Loader from "@/app/utils/loader";
import { Modal } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Page() {
  const [open, setOpen] = useState(false);
  const [del, setDel] = useState(false);
  const [products, setProducts] = useState([]);
  const [client, setClient] = useState(false);
  const getData = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API}/products`)
        .then((res) => res.data)
        .then((res) => {
          setProducts(res);
          setClient(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (e) => {
    const delId = window.localStorage.getItem("delId");
    try {
      setClient(false);
      const del = await axios.delete(
        `${process.env.NEXT_PUBLIC_API}/product/delete/${delId}`
      );
      toast.success("تم حذف المنتج");
      getData();
      setOpen(false);
      setClient(true);
    } catch (error) {
      console.log(error);
      setClient(true);
    }
    setDel(false);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return client ? (
    <div className="products-page">
      <div className="container">
        <div className="top w-100 d-flex justify-content-between mt-5 px-5">
          <div className="heading">
            <h1>المنتجات</h1>
          </div>
          <div className="btns">
            <Link
              href="/admin/products/add-product"
              className="btn btn-primary"
            >
              {" "}
              اضافة منتج{" "}
            </Link>
          </div>
        </div>
        {products && products.length > 0 ? (
          <div className="products px-5 mt-5">
            <div className="row row-gap-4">
              {products.length > 0 &&
                products.map((product, i) => (
                  <div className="col-lg-3 col-sm-6 px-4" key={i}>
                    <BoxProduct
                      product={product}
                      handleDelete={() => {
                        window.localStorage.setItem("delId", product._id);
                        setOpen(true);
                      }}
                    />
                  </div>
                ))}
            </div>
            <Modal
              title="حذف المنتج"
              open={open}
              onOk={handleDelete}
              onCancel={hideModal}
              okButtonProps={{ style: { backgroundColor: "#DE3932" } }}
              okText="حذف"
              cancelText="الغاء"
              style={{
                marginTop: "20vh",
                height: " 215px",
                width: "550px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                borderRadius: "12px",
              }}
            >
              <h5>هل انت متاكد من حذف المنتج </h5>
            </Modal>
          </div>
        ) : (
          <IsEmpty
            page="product"
            title="لم تقم باضافة منتجات بعد"
            description="اضافة منتجات السيد علاء"
          />
        )}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Page;
