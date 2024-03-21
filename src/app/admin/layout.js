import "./globals-admin.css";
export default function AdminLayout({ children }) {
  return (
    <div className="admin-page" style={{ minHeight: "100vh" }}>
      <div className="row" style={{ minHeight: "100vh" }}>
        <div className="col-md-2 admin-sidebar p-0"></div>
        <div className="col-md-10 admin-content p-0">{children}</div>
      </div>
    </div>
  );
}
