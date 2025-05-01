import React from "react";
import PreviewCode from "@/components/PreviewCode";

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

      {/* Element */}
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
              HTML : ใช้ได้เฉพาะ <code>&lt;button&gt;</code> เท่านั้น
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
              HTML : สามารถเรียกใช้งานได้ทั้ง <code>&lt;button&gt;</code> และ <code>&lt;a&gt;</code>
            </p>

            <PreviewCode language="html">
              {`<button className="secondary-btn">Primary Button</button>
<a className="secondary-btn">Primary Button</a>`}
            </PreviewCode>
          </div>
        </div>
      </div>

      <hr />

      {/* Element */}
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
              HTML : ใช้ได้เฉพาะ <code>&lt;button&gt;</code> เท่านั้น
            </p>

            <PreviewCode language="html">{`<button class="secondary-btn" disabled>Submit</button>`}</PreviewCode>
          </div>
        </div>
      </div>
    </>
  );
}
