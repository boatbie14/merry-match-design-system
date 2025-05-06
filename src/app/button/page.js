import React from "react";
import PreviewCode from "@/components/PreviewCode";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { BsEyeFill } from "react-icons/bs";
import { IoHeartSharp } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

export default function ButtonPage() {
  return (
    <>
      <div className="row">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Buttons</h1>
        </div>
      </div>

      {/* Primary Button */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Primary Button</h2>
            <button className="primary-btn">Primary Button</button>
          </div>
          <div className="preview-code w-3/5">
            <p className="text">CSS</p>
            <PreviewCode language="css">{`.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  border-radius: 99px;
  background: linear-gradient(to right, #c70039 50%, #95002b 50%);
  background-size: 200% 100%;
  background-position: left;
  box-shadow: 2px 2px 12px 0 #40328529;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-position 0.5s ease;
}

.primary-btn:hover {
  background-position: right;
}

.primary-btn:active {
  background: #95002b;
  background-size: initial;
  background-position: initial;
}`}</PreviewCode>

            <p className="text">
              HTML : สามารถเรียกใช้งานได้ทั้ง <code>&lt;button&gt;</code> และ <code>&lt;a&gt;</code>
            </p>

            <PreviewCode language="html">
              {`<button className="primary-btn">Primary Button</button>
<a className="primary-btn">Primary Button</a>`}
            </PreviewCode>
          </div>
        </div>
      </div>

      <hr />

      {/* Primary Button disabled */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Primary Button : Disabled</h2>
            <button className="primary-btn" disabled>
              Primary Button
            </button>
          </div>
          <div className="preview-code w-3/5">
            <p className="text">CSS</p>
            <PreviewCode language="css">{`.primary-btn:disabled {
  background: #E4E6ED;
  color: #9AA1B9;
  cursor: not-allowed;
  box-shadow: none;
  background-size: initial;
  background-position: initial;
}`}</PreviewCode>

            <p className="text">
              Disabled ใช้ได้เฉพาะ <code>&lt;button&gt;</code> เท่านั้น
            </p>

            <PreviewCode language="html">{`<button class="primary-btn" disabled>Submit</button>`}</PreviewCode>
          </div>
        </div>
      </div>

      <hr />

      {/* Secondary Button */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Secondary Button</h2>
            <button className="secondary-btn">Secondary Button</button>
          </div>
          <div className="preview-code w-3/5">
            <p className="text">CSS</p>
            <PreviewCode language="css">{`.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 16px;
  color: #95002b;
  font-weight: 700;
  border-radius: 99px;
  background: linear-gradient(to right, #ffe1ea 50%, #ffb1c8 50%);
  background-size: 200% 100%;
  background-position: left;
  box-shadow: 2px 2px 12px 0 #40328514;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-position 0.5s ease;
}

.secondary-btn:hover {
  background-position: right;
}

.secondary-btn:active {
  background: #ff6390;
  background-size: initial;
  background-position: initial;
}`}</PreviewCode>

            <p className="text">
              สามารถเรียกใช้งานได้ทั้ง <code>&lt;button&gt;</code> และ <code>&lt;a&gt;</code>
            </p>

            <PreviewCode language="html">
              {`<button className="secondary-btn">Primary Button</button>
<a className="secondary-btn">Primary Button</a>`}
            </PreviewCode>
          </div>
        </div>
      </div>

      <hr />

      {/* Secondary Button disabled*/}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Secondary Button : Disabled</h2>
            <button className="secondary-btn" disabled>
              Secondary Button
            </button>
          </div>
          <div className="preview-code w-3/5">
            <p className="text">CSS</p>
            <PreviewCode language="css">{`.secondary-btn:disabled {
  background: #e4e6ed;
  color: #9aa1b9;
  cursor: not-allowed;
  box-shadow: none;
  background-size: initial;
  background-position: initial;
}`}</PreviewCode>

            <p className="text">
              Disabled ใช้ได้เฉพาะ <code>&lt;button&gt;</code> เท่านั้น
            </p>

            <PreviewCode language="html">{`<button class="secondary-btn" disabled>Submit</button>`}</PreviewCode>
          </div>
        </div>
      </div>

      <hr />

      {/* Ghost Button */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Ghost Button</h2>
            <button className="ghost-btn">
              <IoArrowBackOutline /> Ghost Button
            </button>
            <br />
            <button className="ghost-btn" disabled>
              <IoArrowBackOutline /> Ghost Button Disabled
            </button>
          </div>
          <div className="preview-code w-3/5">
            <p className="text">CSS</p>
            <PreviewCode language="css">{`.ghost-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  background: none;
  border: none;
  color: #c70039;
  cursor: pointer;
  padding: 8px 16px;
  transition: color 0.3s ease;
}

.ghost-btn:hover {
  color: #ff1659;
}

.ghost-btn:focus {
  color: #95002b;
  outline: none;
}

.ghost-btn:disabled {
  color: #9aa1b9;
  cursor: not-allowed;
}`}</PreviewCode>

            <p className="text">
              Disabled ใช้ได้เฉพาะ <code>&lt;button&gt;</code> เท่านั้น
            </p>

            <PreviewCode language="html">
              {`<button className="ghost-btn">
  <IoArrowBackOutline /> Ghost Button
</button>

<button className="ghost-btn" disabled>
  <IoArrowBackOutline /> Ghost Button Disabled
</button>`}
            </PreviewCode>
          </div>
        </div>
      </div>

      <hr />

      {/* Icon Button */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Icon Button</h2>
            <div className="flex flex-row gap-8">
              <button className="gray-icon-btn">
                <IoChatbubbleEllipses />
                <span className="tooltip">Go to chat</span>
              </button>

              <a className="gray-icon-btn">
                <BsEyeFill />
                <span className="tooltip">See profile</span>
              </a>

              <button className="gray-icon-btn">
                <IoHeartSharp />
                <span className="tooltip">Merry</span>
              </button>

              <button className="gray-icon-btn active">
                <IoHeartSharp />
                <span className="tooltip">Merry Active</span>
              </button>
            </div>
          </div>
          <div className="preview-code w-3/5">
            <p className="text">
              ติดตั้ง Icon Library ที่ต้องการจะใช่ก่อน ในที่นี้ขอแนะนำ React Icons เพราะมี Icon ให่้เลือกเยอะมาก คำสั่งที่ใช้ในการติดตั้งคือ
            </p>
            <PreviewCode language="command line">npm i react-icons</PreviewCode>
            <p className="text">CSS</p>
            <PreviewCode language="css">{`.gray-icon-btn {
  position: relative;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 2px 2px 12px 0 #4032851f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.gray-icon-btn svg {
  color: #646d89;
  font-size: 24px;
}

.gray-icon-btn .tooltip {
  position: absolute;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background-color: #9aa1b9;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 10;
}

.gray-icon-btn:hover .tooltip {
  opacity: 1;
}

.gray-icon-btn.active {
  position: relative;
  width: 48px;
  height: 48px;
  background-color: #c70039;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 2px 2px 12px 0 #4032851f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.gray-icon-btn.active svg {
  color: #fff;
  font-size: 24px;
}`}</PreviewCode>

            <p className="text">
              เวลาเรียกใช้งานต้อง import icon จาก Library มาก่อน จากนั้นจะใช้ Tag <code>&lt;button&gt;</code> หรือ Tag{" "}
              <code>&lt;a&gt;</code> ก็ได้ ในส่วนของ Tool Tip ก็ใส่ Text ลงไปได้เลยใน <code>&lt;span&gt;</code>
            </p>

            <p className="text">
              ใส่ class=active ที่ Tag <code>&lt;button&gt;</code> เพื่อที่จะทำให้ปุ่มเปลี่ยนสี
            </p>

            <PreviewCode language="html">
              {`<button className="gray-icon-btn">
  <IoChatbubbleEllipses />
  <span className="tooltip">Go to chat</span>
</button>

<a className="gray-icon-btn">
  <BsEyeFill />
  <span className="tooltip">See profile</span>
</a>

<button className="gray-icon-btn">
  <IoHeartSharp />
  <span className="tooltip">Merry</span>
</button>
              
<button className="gray-icon-btn active">
  <IoHeartSharp />
  <span className="tooltip">Merry</span>
</button>`}
            </PreviewCode>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}
