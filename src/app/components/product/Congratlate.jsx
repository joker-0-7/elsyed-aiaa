import Image from "next/image";
import React from "react";

function Congratlate() {
  return (
    <div className="text-center">
      <Image
        src="/image/party.png"
        width={250}
        height={350}
        alt="congratlation"
      />
      <h1>تم جمع البيانات بنجاح</h1>
      <h5>اضغط ارسال لضمان لارسال البيانات</h5>
      <p>سوف يتواصل معك احد ممثلي خدمة العملاء قريبا</p>
    </div>
  );
}

export default Congratlate;
