"use client";
import { usePathname } from "next/navigation";
import "./globals-admin.css";
import Sidebar from "../components/admin/Sidebar";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="admin-page" style={{ minHeight: "100vh" }}>
      <div className="row" style={{ minHeight: "100vh" }}>
        {pathname.split("/")[2] !== "login" && (
          <div className="div">
            <Sidebar />
          </div>
        )}

        <div className="div">{children}</div>
      </div>
    </div>
  );
}
