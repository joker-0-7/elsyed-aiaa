"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/app/utils/loader";
import { useRouter } from "next/navigation";
function Page() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [client, setClient] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setClient(false);
    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        user
      );
      setClient(true);
      router.push("/admin/products");
      window.localStorage.setItem("authAdminPanel", true);
    } catch (error) {
      console.log(error);
      setClient(true);
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setClient(true);
  }, []);
  return client ? (
    <div className="login h-100">
      <div className="container h-100">
        <div
          className="box-content d-flex justify-content-center align-items-center w-100"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="row w-100"
            style={{
              minHeight: "70vh",
            }}
          >
            <div
              className="col-lg-6 col-sm-0 d-none d-md-block"
              style={{
                backgroundImage: 'url("/admin/login.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-around px-5">
              <div className="title">
                <h1>تسجيل الدخول 👋</h1>
                <h6>تسجيل الدخول الي مؤسسة السيد علاء</h6>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        البريد الالكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        كلمه السر
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        onChange={handleChange}
                      />
                    </div> */}
                    <div className="mb-3 ">
                      <div className="lable">
                        <label htmlFor="password" className="form-label">
                          كلمه السر
                        </label>
                      </div>
                      <div className="inp position-relative">
                        <input
                          type={show ? "text" : "password"}
                          placeholder="كلمة السر"
                          name="password"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <div
                          className="position-absolute"
                          style={{
                            left: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          {show ? (
                            <i
                              className="bi bi-eye"
                              style={{ cursor: "pointer" }}
                              onClick={() => setShow(!show)}
                            ></i>
                          ) : (
                            <i
                              className="bi bi-eye-slash"
                              style={{ cursor: "pointer" }}
                              onClick={() => setShow(!show)}
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary w-100">دخول</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="footer">
                <div className="text-center p-4">
                  ©{new Date().getFullYear()}{" "}
                  <Link className="text-reset text-decoration-none" href="/">
                    مؤسسة السيد علاء
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
export default Page;
