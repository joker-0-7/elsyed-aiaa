"use client";
import BoxProduct from "@/app/components/BoxProduct";
import IsEmpty from "@/app/components/admin/IsEmpty";
import Loader from "@/app/utils/loader";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
  const [products, setProducts] = useState([]);
  const [client, setClient] = useState(false);
  const getData = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API}/products`)
        .then((res) => res.data)
        .then((res) => {
          setProducts([...products, ...res]);
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
    // try {
    //   const del = axios.delete(
    //     `${process.env.NEXT_PUBLIC_API}/product/delete/${e}`
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(e);
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
        <div className="products px-5 mt-5">
          {products.length > 0 ? (
            products.map((product, i) => (
              <BoxProduct
                product={product}
                key={i}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <IsEmpty />
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Page;
