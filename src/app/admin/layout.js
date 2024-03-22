"use client";
import { usePathname } from "next/navigation";
import "./globals-admin.css";
export default function AdminLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="admin-page" style={{ minHeight: "100vh" }}>
      <div className="row" style={{ minHeight: "100vh" }}>
        {pathname.split("/")[2] !== "login" && (
          <div className="col-2 admin-sidebar p-0"></div>
        )}

        <div className="col-10 admin-content p-0">{children}</div>
      </div>
    </div>
  );
}
