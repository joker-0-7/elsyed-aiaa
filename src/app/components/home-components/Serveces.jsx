import React from "react";
import Image from "next/image";
function Serveces() {
  return (
    <div className="services" id="service">
      <div className="main-heading mb-5 mt-5">
        <h1 className="text-primary position-relative fw-bold">
          مميزات وخدمات ... مؤسسة السيد علاء
        </h1>
      </div>
      <div>
        <ul
          className="nav nav-pills mb-5 mx-auto"
          id="pills-tab"
          role="tablist"
          style={{ width: "fit-content" }}
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active rounded-start-0"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              المميزات
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-end-0"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              الخدمات
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex={0}
          >
            <div className="row row-gap-5">
              <div className="col-lg-6 col-sm-12">
                <div className="row align-items-center">
                  <div
                    className="col-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 200, 253, 0.6)",
                    }}
                  >
                    <Image
                      src="/icon/delivery-time.png"
                      alt="logo"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="col-10">
                    <h4>توقير الوقت علي العميل في استلام البضائع</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row align-items-center">
                  <div
                    className="col-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 200, 253, 0.6)",
                    }}
                  >
                    <Image
                      src="/icon/overstock-sale.png"
                      alt="logo"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="col-10">
                    <h4>
                      مؤسسة السيد علاء تقدم أسعار تنافسية بجودة ونتائج متميزة في
                      ماكينات قص الرخام والجرانيت.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row align-items-center">
                  <div
                    className="col-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 200, 253, 0.6)",
                    }}
                  >
                    <Image
                      src="/icon/company.png"
                      alt="logo"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="col-10">
                    <h4>
                      تقدم مؤسسة السيد علاء ماكينات حديثة للرخام والجرانيت
                      لتعزيز جودة الإنتاج لدى أصحاب المصانع والورش.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row align-items-center">
                  <div
                    className="col-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 200, 253, 0.6)",
                    }}
                  >
                    <Image
                      src="/icon/guarantee.png"
                      alt="logo"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="col-10">
                    <h4>
                      نعمل على تصميم المعدات بجودة عالية وايضًا تقديم النصح
                      والإرشادات للعملاء.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex={0}
          >
            <div className="row row-gap-5">
              <div className="col-lg-6 col-sm-12">
                <div className="row align-items-center">
                  <div
                    className="col-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 200, 253, 0.6)",
                    }}
                  >
                    <Image
                      src="/icon/user-account.png"
                      alt="logo"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="col-10">
                    <h4>
                      فريق مكون من اقوي الاستشاريين والخبراء في صناعة ماكينات
                      الرخام والجرانيت
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row align-items-center">
                  <div
                    className="col-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 200, 253, 0.6)",
                    }}
                  >
                    <Image
                      src="/icon/gear.png"
                      alt="logo"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="col-10">
                    <h4>خدمة توفر كل قطع الغيار المستورد والمحلي</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row align-items-center">
                  <div
                    className="col-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 200, 253, 0.6)",
                    }}
                  >
                    <Image
                      src="/icon/sales-balance.png"
                      alt="logo"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="col-10">
                    <h4>خدمة ما بعد البيع من قبل استشاريينا</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row align-items-center">
                  <div
                    className="col-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 200, 253, 0.6)",
                    }}
                  >
                    <Image
                      src="/icon/support.png"
                      alt="logo"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="col-10">
                    <h4>خدمة تقديم النصائح المباشرة لكل عملائنا</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row align-items-center">
                  <div
                    className="col-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(168, 200, 253, 0.6)",
                    }}
                  >
                    <Image
                      src="/icon/delivery.png"
                      alt="logo"
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="col-10">
                    <h4>خدمة التوصيل في وقت قياسي</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serveces;
