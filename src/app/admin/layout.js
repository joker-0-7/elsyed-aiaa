"use client";
import { usePathname, useRouter } from "next/navigation";
import "./globals-admin.css";
import Sidebar from "../components/admin/Sidebar";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const state = window.localStorage.getItem("authAdminPanel");
    if (!state) {
      router.push("/admin/login");
    }
  });
  const pathname = usePathname();
  return (
    <div className="admin-page" style={{ minHeight: "100vh" }}>
      <div className="row" style={{ minHeight: "100vh" }}>
        <div className="col-lg-2 col-sm-12">
          {pathname.split("/")[2] !== "login" && (
            <div className="div">
              <Sidebar />
            </div>
          )}
        </div>
        <div className="col-lg-10 col-sm-12">
          <div className="div">{children}</div>
        </div>
      </div>
    </div>
  );
}
