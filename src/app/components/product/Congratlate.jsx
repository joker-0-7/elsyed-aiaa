import Image from "next/image";
import React from "react";

function Congratlate({ close, setClose }) {
  return (
    <div className="modal d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body text-center">
            <Image
              src="/image/party.png"
              width={250}
              height={350}
              alt="congratlation"
            />
            <h1>تم ارسال الطلب بنجاح</h1>
            <p>سوف يتواصل معك احد ممثلي خدمة العملاء قريبا</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary w-100"
              data-bs-dismiss="modal"
              onClick={() => {
                setClose(false);
                window.location.reload();
              }}
            >
              اغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Congratlate;
