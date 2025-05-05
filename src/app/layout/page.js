import React from "react";
import PreviewCode from "@/components/PreviewCode";

export default function LayoutPage() {
  return (
    <>
      <div className="row">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Layout</h1>
          <p className="text">ตัวอย่าง Layout </p>

          <PreviewCode language="css">
            {`.row{
  width:100%;
}
.container{
  max-width: 1200px;
  padding:0px 0px;
  margin: auto;
}
.container-full{
  max-width: 100%;
  padding:0px 0px;
  margin: auto;
}
@media only screen and (max-width: 1239px) {
  .container{
     padding:0px 24px;
  }
}
@media only screen and (max-width: 561px) {
  .container{
    padding:0px 16px;
  }
}
`}
          </PreviewCode>

          <p className="text mb-4">เวลาใช้งานกรณีที่ Content อยู่ตรงกลางอย่างหน้า Home เนื้อหาจะมีขนาดความกว้างไม่เกิน 1200px</p>

          <p className="text mb-4">
            เมื่อหน้าจอย่อลงต่ำกว่า 1200px เนื้อหาจะโดนบีบตามไปด้วยแต่ยังมี padding ซ้าย-ขวา 24px ทำให้เนื้อหาไม่ติดขอบจอ และ
            เมื่อหน้าจอย่อลงเหลือต่ำกว่า 561px ก็จะมี padding ซ้าย-ขวา 24 px
          </p>

          <p className="text mb-4">
            เราสามารถใช้ tailwindCSS กำหนด padding-top และ padding-bottom ได้จากตัวอย่างใช้ <code>py-20</code> ก็จะมี padding-top และ
            padding-bottom = 80px
          </p>

          <p className="text mb-4">
            ถ้าอยากกำหนด background ก็ไปทำที่ <code>.row</code> อีกเช่นกัน
          </p>

          <PreviewCode language="html">
            {`<div class="row py-20 bg-amber-900">
    <div class="container">
    Your content
    </div>
</div>
`}
          </PreviewCode>

          <p className="text mb-4">
            กรณีที่เราจะแสดง Content เต็มหน้าจออย่างหน้า <code>matching page</code>
          </p>

          <PreviewCode language="html">
            {`<div class="row">
    <div class="container-full flex flex-row">
      <div className="w-1/5">
         Left content
      </div>
      <div className="w-3/5">
         center content
      </div>
      <div className="w-1/5">
         right content
      </div>
    </div>
</div>
`}
          </PreviewCode>
        </div>
      </div>
    </>
  );
}
