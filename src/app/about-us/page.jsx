import Image from "next/image";
import React from "react";
import Help from "../components/home-components/Help";

function page() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="main-heading mt-5">
          <h1 className="text-primary">من نحن</h1>
        </div>
        <div className="description text-center fs-5 mb-5">
          <p>
            مؤسسة{" "}
            <span className="main-heading text-primary" style={{ zIndex: "9" }}>
              السيد علاء
            </span>{" "}
            هي شركة رائدة في قطاع تصنيع جميع انواع ماكينات الرخام والجرانيت علي
            المستوى المحلي والعربي في منطقة الشرق الاوسط وشمال افريقيا،حيث تمتلك
            اكثر من 18عام من الخبرة التي مكنتها من تطوير مجال ماكينات الرخام
            والجرانيت بجميع انواعها اليدوية والاتوماتيكية،كما تسعي جاهدة لتحقيق
            اهداف ارضاء عملائها حيث تم تخصيص فريق صيانة مدرب ومجهز لاي اعمال
            صيانة لمنتجاتها او خدمات مابعد البيع،كما توفر ايضا جميع قطع غيار
            منتجاتها بكافة انواعها سواء محلي الصنع منها او المستورد،كما تعمل
            ايضا علي اعطاء الرأي والمشورة الصحيحة لكل عميل علي وجه الاخص
            المستجدين في استخدام ماكينات الرخام والجرانيت،لان هدف المؤسسة
            الاساسي هو الارتقاء بمجال صناعة ماكينات الرخام والجرانيت لأعلي مستوي
            ورفع علامة الجودة المصرية علي المستوي المحلي والدولى في منطقة الشرق
            الاوسط
          </p>
        </div>
        <div className="row mt-5 align-items-center row-gap-5">
          <div className="col-lg-6 col-sm-12">
            <div className="main-heading text-start mx-0">
              <h1 className="text-primary">كيف نساعدك </h1>
            </div>
            <div className="description">
              توفر مؤسسة{" "}
              <span
                className="main-heading text-primary fs-5"
                style={{ zIndex: "9" }}
              >
                السيد علاء
              </span>{" "}
              احدث ماكينات الرخام والجرانيت سواءً ماكينات تقطيع الرخام والجرانيت
              ( ماكينة قص الرخام والجرانيت ) أو جلايات الرخام والجرانيت
              والمسؤولة عن تلميع الرخام والجرانيت قبل تقديمه في صورة سلعة قابلة
              للاستهلاك التجاري. وهو ما يُساعد أصحاب المصانع والورش في تطوير
              أعمالهم الحالية بصورة ملحوظة أو البدء بمعدات ممتازة تساعدهم على
              المنافسة في السوق بأفضل جودة ممكنة.
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Image
              src="/image/chromed.png"
              width={507}
              height={484}
              alt="image"
            />
          </div>
          <div className="col-12">
            <Help />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
