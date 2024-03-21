import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active fs-5"
                aria-current="page"
                href="/"
              >
                الصفحة الرئسية
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link fs-5" href="/products">
                المنتجات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" href="/#service">
                الخدمات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" href="about-us">
                من نحن
              </Link>
            </li>
          </ul>
          <Link className="btn btn-outline-primary fs-5" href="/contact-us">
            اتصل بنا
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
