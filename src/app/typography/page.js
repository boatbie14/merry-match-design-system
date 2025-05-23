import React from "react";
import PreviewCode from "@/components/PreviewCode";

export default function TypoPage() {
  return (
    <>
      <div className="row">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Typography</h1>
        </div>
      </div>

      {/* Setup Font */}
      <div className="row">
        <div className="container flex gap-8">
          <div className="preview w-2/5 leading-10">
            <h2>Setup Font</h2>
            <p className="text mb-4">การเอา Google Font มาใช้ใน Next.js มี 2 วิธี:</p>

            <p className="text">
              <b>1. Built-in Font Loader หรือ Next.js optimized font loading</b>
              <br />
              Next.js optimized font loading หรือที่เรียกว่า &ldquo;Font Optimization&rdquo; คือฟีเจอร์พิเศษของ Next.js
              ที่ช่วยจัดการการโหลดฟอนต์ให้มีประสิทธิภาพสูงสุด ผ่านโมดูล <code>next/font</code>
            </p>
            <ul>
              <li>- โหลดเร็วกว่า เพราะ Next.js เอาฟอนต์มาเก็บไว้ในเซิร์ฟเวอร์ของเราเอง</li>
              <li>- ไม่ส่งข้อมูลไปหา Google (ดีเรื่องความเป็นส่วนตัว)</li>
              <li>- ไม่ทำให้หน้าเว็บกระตุกตอนโหลด</li>
            </ul>
          </div>
          <div className="preview-code w-3/5">
            <p className="text mb-4">
              ในการใช้ import Google Fonts ด้วย next/font/google นั้น โค้ดจะนิยมถูกประกาศและใช้ในไฟล์หลักๆ ของ Next.js โดยทั่วไปมี 3
              ตำแหน่งหลักที่นิยมใช้:
            </p>
            <p className="text mb-4">
              <b>layout.js หรือ RootLayout</b> - นี่เป็นตำแหน่งที่นิยมที่สุด เพราะจะทำให้ฟอนต์ถูกใช้ทั่วทั้งแอพพลิเคชัน
            </p>
            <PreviewCode language="jsx">{`import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}`}</PreviewCode>

            <p className="text mb-4">แล้วเวลาใช้งานก็ไม่ต้องประกาศ Font อะไรแล้วเพราะมีการประกาศ Font แล้วที่ body</p>

            <p className="text mb-4">ตัวอย่าง</p>

            <PreviewCode language="jsx">{`<h1 className="text-4xl text-amber-950">Test H1</h1>
<h2 className="text-2xl text-amber-800">Test H2</h2>
<h3 className="text-xl text-amber-600">Test H3</h3>`}</PreviewCode>

            <h1 className="text-4xl text-amber-950">Test H1</h1>
            <h2 className="text-2xl text-amber-800">Test H2</h2>
            <h3 className="text-xl text-amber-600">Test H3</h3>

            <hr />

            <p className="text mb-4">
              <b>_app.js (สำหรับ Pages Router)</b> - สำหรับโปรเจคที่ใช้ Pages Router แทน App Router
            </p>

            <PreviewCode language="jsx">{`import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;`}</PreviewCode>

            <hr />

            <p className="text mb-4">
              <b>ใน Component ที่ต้องการฟอนต์เฉพาะ </b> - ในกรณีที่ต้องการใช้ฟอนต์เฉพาะในบางส่วนของแอพพลิเคชัน
            </p>

            <PreviewCode language="jsx">{`import { Nunito } from "next/font/google";

const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  return <h1 className={roboto.className}>This is a header</h1>;
}`}</PreviewCode>
          </div>
        </div>
      </div>

      <hr />

      {/* Setup Font */}
      <div className="row">
        <div className="container flex gap-8">
          <div className="preview w-2/5 leading-10">
            <p className="text">
              <b>2. Traditional CSS Font Import หรือ CSS @import for fonts</b>
              <br />
              Traditional CSS Font Import คือวิธีแบบเก่าที่เรียกใช้ฟอนต์โดยตรงจาก Google Fonts
            </p>

            <ul>
              <li>- เบราว์เซอร์ต้องส่งคำขอไปที่เซิร์ฟเวอร์ของ Google ทุกครั้งที่โหลดหน้าเว็บ</li>
              <li>- หากอินเทอร์เน็ตช้าหรือมีปัญหา อาจทำให้ฟอนต์โหลดช้าหรือไม่โหลดเลย</li>
              <li>- อาจเกิดการกระตุกของหน้าเว็บ (Layout Shift) เมื่อฟอนต์โหลดเสร็จ</li>
              <li>- ข้อมูลการเข้าชมเว็บไซต์ของผู้ใช้จะถูกส่งไปยัง Google</li>
            </ul>
          </div>
          <div className="preview-code w-3/5">
            <p className="text mb-4">วิธีการใช้งานจะง่ายกว่า Built-in Font Loader โดยจะทำการเขียน Code Import font บนไฟล์ CSS</p>
            <PreviewCode language="jsx">{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: 'Nunito', sans-serif;
}

h1 {
  font-weight: 700;
}

p {
  font-weight: 400;
}`}</PreviewCode>
          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="container flex gap-8">
          <div className="preview w-2/5 leading-10">
            <p className="text">
              <b>Header ต่าง ๆ </b>
            </p>

            <h1 className="main-header text-[#A62D82]">Main : Welcome back to Merry Match</h1>
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`.main-header {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 46px;
  line-height: 125%;
  letter-spacing: -2%;
  font-variant-numeric: lining-nums proportional-nums;
  color:#A62D82;
}

@media (max-width: 767px) {
  .main-header {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1%;
  }
}`}</PreviewCode>

            <PreviewCode language="html">{`<h1 className="main-header text-[#A62D82]">Main : Welcome back to Merry Match</h1>`}</PreviewCode>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container flex gap-8">
          <div className="preview w-2/5 leading-10">
            <p className="text">
              <b>subhead</b>
            </p>

            <div className="subhead text-[red]">Login</div>
            <h1 className="main-header text-[#A62D82]"> Welcome back to Merry Match</h1>
          </div>
          <div className="preview-code w-3/5">
            <p className="text mb-4">มันคือตรงคำว่า LOGIN</p>
            <PreviewCode language="jsx">{`.subhead {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0;
  text-transform: uppercase;
  color:#7B4429;
}`}</PreviewCode>

            <PreviewCode language="html">{` <div className="subhead">Login</div>`}</PreviewCode>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container flex gap-8">
          <div className="preview w-2/5 leading-10">
            <p className="text">
              <b>section-title</b>
            </p>

            <div className="subhead text-[#7B4429]">Register</div>
            <h1 className="main-header text-[#A62D82]">Join us and start matching </h1>

            <h2 className="section-title">Basic Information</h2>
          </div>
          <div className="preview-code w-3/5">
            <p className="text mb-4">มันคือตรงคำว่า Basic Information</p>
            <PreviewCode language="jsx">{`.section-title {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: -2%;
  color: #A62D82;
}`}</PreviewCode>

            <PreviewCode language="html">{`<h2 className="section-title">Basic Information</h2>`}</PreviewCode>
          </div>
        </div>
      </div>
    </>
  );
}
