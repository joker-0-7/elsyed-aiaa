import React from "react";

function HomeSection() {
  return (
    <div className="col-12">
      <div className="main-head text-center">
        <h1 className="fw-bold">
          مؤسسة{" "}
          <span className="main-heading text-primary" style={{ zIndex: "9" }}>
            السيد علاء
          </span>{" "}
          لتصنيع ماكينات الرخام و الجرانيت
        </h1>
        <h1 className="fw-bold">تقديم خدمات عالية الجودة لكافة العملاء</h1>
      </div>
      <div className="para-section text-center">
        <p className="fs-5">
          بفضل فريق العمل المحترف المكون من مصممين وفنيين قادرين على تنفيذ احدث
          ماكينات الرخام والجرانيت بالمواصفات
        </p>
        <p className="fs-5">
          التي يرغب العملاء في الحصول عليها وفقًا للأغراض المفترض أنهم يخططون
          لاستخدامها لها
        </p>
      </div>
      <div className="btns">
        <div className="row text-center mx-auto justify-content-center row-gap-3">
          <div className="col-lg-2 col-sm-12">
            <button className="btn btn-primary">
              <span className="title fs-5">المقطع الدعائي</span>
              <span className="icon">
                <i className="bi bi-play-fill fs-5"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
