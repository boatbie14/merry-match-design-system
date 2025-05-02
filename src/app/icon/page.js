import React from "react";
import PreviewCode from "@/components/PreviewCode";
import { GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { HiBell, HiUser, HiMiniCube } from "react-icons/hi2";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { BsChatDotsFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { PiImageFill } from "react-icons/pi";
import { HiPaperAirplane } from "react-icons/hi2";
import { IoCloseOutline, IoAdd, IoLogOutOutline } from "react-icons/io5";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import DoubleHeartsIcon from "@/components/icons/DoubleHeartsIcon";
import SparklesIcon from "@/components/icons/SparklesIcon";
import DiscoverMatchIcon from "@/components/icons/DiscoverMatchIcon";

export default function IconPage() {
  return (
    <>
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h1 className="text-3xl font-bold mb-8">Icons</h1>
          </div>

          <div className="preview-code w-3/5">
            <p className="text">
              ติดตั้ง Icon Library ที่ต้องการจะใช่ก่อน ในที่นี้ขอแนะนำ React Icons เพราะมี Icon ให่้เลือกเยอะมาก คำสั่งที่ใช้ในการติดตั้งคือ
            </p>
            <PreviewCode language="command line">npm i react-icons</PreviewCode>
            <p className="text">
              สามารถเลือก Icon ได้ที่{" "}
              <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer">
                https://react-icons.github.io/react-icons/
              </a>
            </p>
            <p className="text">สำหรับ Icon ที่ไม่มีใน Library ก็ต้องใช้ SVG</p>
          </div>
        </div>
      </div>

      <hr />

      {/* Heart Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Heart Icon</h2>
            <GoHeartFill size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { GoHeartFill } from "react-icons/go";
            
<GoHeartFill size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Star Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Star Icon</h2>
            <FaStar size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { FaStar } from "react-icons/fa6";
            
<FaStar size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Bell Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Bell Icon</h2>
            <HiBell size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { HiBell } from "react-icons/hi2";
            
<HiBell size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* User Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>User Icon</h2>
            <HiUser size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { HiUser } from "react-icons/hi2";
            
<HiUser size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Cube Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Cube Icon</h2>
            <HiMiniCube size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { HiMiniCube } from "react-icons/hi2";
            
<HiMiniCube size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Alert Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Alert Icon</h2>
            <TbAlertTriangleFilled size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { TbAlertTriangleFilled } from "react-icons/tb";
            
<TbAlertTriangleFilled size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Chat Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Chat Icon</h2>
            <BsChatDotsFill size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { BsChatDotsFill } from "react-icons/bs";
            
<BsChatDotsFill size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Eye Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Eye Icon</h2>
            <AiFillEye size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { AiFillEye } from "react-icons/ai";
            
<AiFillEye size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Image Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Image Icon</h2>
            <PiImageFill size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { PiImageFill } from "react-icons/pi";
            
<PiImageFill size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Send Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Send Icon</h2>
            <HiPaperAirplane size={48} color="#C70039" />
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { HiPaperAirplane } from "react-icons/hi2";
            
<HiPaperAirplane size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Close Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Close, Add and Log Out Icon</h2>
            <div className="flex flex-row gap-4">
              <IoCloseOutline size={48} color="#C70039" />
              <IoAdd size={48} color="#C70039" />
              <IoLogOutOutline size={48} color="#C70039" />
            </div>
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`/* Close Icon */
import { IoCloseOutline } from "react-icons/io5";";
            
<IoCloseOutline size={48} color="#C70039" />

/* Add Icon */
import { IoAdd } from "react-icons/io5";

<IoAdd size={48} color="#C70039" />

/* Log Out Icon */
import { IoLogOutOutline } from "react-icons/io5";

<IoLogOutOutline size={48} color="#C70039" />`}</PreviewCode>

            <p className="text">
              จะเห็นว่าเรา import Icon มาจากที่เดียวกันดังนั้นเราสามารถเรียก Import ได้แบบนี้เลย ถ้าหากว่าหน้านั้นมีการเรียกใช้ Icon ทั้ง 3
              แบบนี้
            </p>

            <PreviewCode language="jsx">{`import { IoCloseOutline, IoAdd, IoLogOutOutline } from "react-icons/io5";`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Edit Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Edit and Delete Icon</h2>
            <div className="flex flex-row gap-4">
              <HiPencilSquare size={48} color="#C70039" />
              <HiTrash size={48} color="#C70039" />
            </div>
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { HiPencilSquare, HiTrash } from "react-icons/hi2";
            
<HiPencilSquare size={48} color="#C70039" />
<HiTrash size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Check Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Check Icon</h2>
            <div className="flex flex-row gap-4">
              <FaCircleCheck size={48} color="#C70039" />
            </div>
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`import { FaCircleCheck } from "react-icons/fa6";

<FaCircleCheck size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Social Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>Social Icon</h2>
            <div className="flex flex-row gap-4">
              <MdFacebook size={48} color="#C70039" />
              <PiInstagramLogoFill size={48} color="#C70039" />
              <RiTwitterXFill size={48} color="#C70039" />
            </div>

            <div className="flex flex-row gap-4 mt-2">
              <a className="circle-ic" href="#">
                <MdFacebook />
              </a>
              <a className="circle-ic" href="#">
                <PiInstagramLogoFill />
              </a>
              <a className="circle-ic" href="#">
                <RiTwitterXFill />
              </a>
            </div>
          </div>
          <div className="preview-code w-3/5">
            <PreviewCode language="jsx">{`/* Facebook */
import { MdFacebook } from "react-icons/md";

<MdFacebook size={48} color="#C70039" />

/* Instagram */
import { PiInstagramLogoFill } from "react-icons/pi";

<PiInstagramLogoFill size={48} color="#C70039" />

/* X */
import { RiTwitterXFill } from "react-icons/ri";

<RiTwitterXFill size={48} color="#C70039" />

`}</PreviewCode>

            <p className="text">
              แต่กรณีนี้ Icon จะต้องอยู่ในกรอบดังนั้นเราต้องเอา Tag <code>&lt;button&gt;</code> หรือ <code>&lt;a&gt;</code> มาครอบแล้วกำหนด
              CSS อีกที
            </p>

            <PreviewCode language="css">
              {`.circle-ic {
  width: 48px;
  height: 48px;
  border-radius: 99px;
  background: linear-gradient(to right, #a62d82 50%, #7d2262 50%);
  background-size: 200% 100%;
  background-position: left;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-position 0.5s ease;
}

.circle-ic:hover {
  background-position: right;
}

.circle-ic svg {
  width: 20px;
  height: 20px;
  color: #fff;
}`}
            </PreviewCode>

            <PreviewCode language="html">
              {`<a className="circle-ic" href="#">
  <MdFacebook />
</a>

<a className="circle-ic" href="#">
  <PiInstagramLogoFill />
</a>

<a className="circle-ic" href="#">
  <RiTwitterXFill />
</a>`}
            </PreviewCode>
          </div>
        </div>
      </div>

      <hr />

      {/* SVG Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>SVG Icon: Double Hearts</h2>
            <div className="flex flex-row gap-4">
              <DoubleHeartsIcon size={48} color="#C70039" />
            </div>
          </div>
          <div className="preview-code w-3/5">
            <p className="text">
              สำหรับ Icon ที่เป็น SVG เราจะเอา Code SVG ไปสร้างเป็นไฟล์ component แล้วไปเก็บไว้ที่ <code>scr/components/icons</code>{" "}
              ตั้งชื่อไฟล์ว่า DoubleHeartsIcon.jsx โดยที่ไฟล์นี้จะจะมีการรับ <code>props</code> ในส่วนของ สีและขนาดด้วย
            </p>
            <PreviewCode language="jsx">
              {`import React from 'react';
const DoubleHeartsIcon = ({ width, height, size, className = "", color = "currentColor", ...props }) => {
  const originalRatio = 62 / 36;
  const finalWidth = size ? size * originalRatio : width || 62;
  const finalHeight = size ? size : height || 36;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 62 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M25.7635 4.65466C27.4735 4.24163 29.27 4.33326 30.9334 4.92126L31.2625 5.04529C32.8971 5.69532 34.3112 6.80609 35.3299 8.24646L35.5272 8.53748C36.4867 10.012 36.9997 11.736 36.9998 13.5004L36.9881 14.0219C36.751 19.3829 32.9067 23.7348 29.66 26.5336L29.657 26.5365C27.5245 28.3586 25.2089 29.9553 22.7479 31.3011L22.741 31.3051L22.7332 31.309L22.7166 31.3168L22.5018 31.4467H22.4334C22.2128 31.5314 21.9804 31.5822 21.744 31.597L21.6014 31.6019C21.2291 31.6024 20.8628 31.5125 20.532 31.3422V31.3431L20.5281 31.3412L20.494 31.3246L20.4783 31.3148L20.4666 31.309L20.4539 31.3021C19.7247 30.9054 19.0084 30.4846 18.3065 30.0414V30.0404C16.6361 28.9893 15.0441 27.8187 13.5438 26.5365L13.5399 26.5336C10.1906 23.6449 6.20019 19.1009 6.20001 13.5004L6.20685 13.1478C6.27505 11.3901 6.85137 9.6868 7.86993 8.24646L8.07892 7.96228C9.14945 6.56648 10.6042 5.50922 12.2674 4.92126L12.6014 4.80994C14.2814 4.28825 16.0796 4.26433 17.7772 4.74451L18.1141 4.84705C19.4219 5.27232 20.612 5.98843 21.5994 6.93591C22.6711 5.9074 23.9822 5.15204 25.4227 4.74451L25.7635 4.65466Z"
        fill={color}
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M47.3635 4.65466C49.0735 4.24163 50.87 4.33326 52.5334 4.92126L52.8625 5.04529C54.4971 5.69532 55.9112 6.80609 56.9299 8.24646L57.1272 8.53748C58.0867 10.012 58.5996 11.736 58.5998 13.5004L58.5881 14.0219C58.351 19.3829 54.5067 23.7348 51.26 26.5336L51.257 26.5365C49.1245 28.3586 46.8089 29.9553 44.3479 31.3011L44.341 31.3051L44.3332 31.309L44.3166 31.3168L44.1018 31.4467H44.0334C43.8128 31.5314 43.5804 31.5822 43.3439 31.597L43.2014 31.6019C42.8291 31.6024 42.4628 31.5125 42.132 31.3422V31.3431L42.1281 31.3412L42.0939 31.3246L42.0783 31.3148L42.0666 31.309L42.0539 31.3021C41.3247 30.9054 40.6084 30.4846 39.9064 30.0414V30.0404C38.2361 28.9893 36.6441 27.8187 35.1438 26.5365L35.1398 26.5336C31.7906 23.6449 27.8002 19.1009 27.8 13.5004L27.8068 13.1478C27.875 11.3901 28.4514 9.6868 29.4699 8.24646L29.6789 7.96228C30.7494 6.56648 32.2042 5.50922 33.8674 4.92126L34.2014 4.80994C35.8814 4.28825 37.6796 4.26433 39.3772 4.74451L39.7141 4.84705C41.0219 5.27232 42.212 5.98843 43.1994 6.93591C44.2711 5.9074 45.5822 5.15204 47.0227 4.74451L47.3635 4.65466Z"
        fill={color}
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export default DoubleHeartsIcon;`}
            </PreviewCode>
            <p className="text">ทีนี้เราก็จะสามารถเรียกใช้ icon นี้ได้แล้วซึ่งวิธีการเรียกใช้คือ</p>
            <PreviewCode language="jsx">{`import DoubleHeartsIcon from "@/components/icons/DoubleHeartsIcon";

<DoubleHeartsIcon size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* SVG Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>SVG Icon: Sparkles</h2>
            <div className="flex flex-row gap-4">
              <SparklesIcon size={48} color="#C70039" />
            </div>
          </div>
          <div className="preview-code w-3/5">
            <p className="text">
              สำหรับ Icon ที่เป็น SVG เราจะเอา Code SVG ไปสร้างเป็นไฟล์ component แล้วไปเก็บไว้ที่ <code>scr/components/icons</code>{" "}
              ตั้งชื่อไฟล์ว่า DoubleHeartsIcon.jsx โดยที่ไฟล์นี้จะจะมีการรับ <code>props</code> ในส่วนของ สีและขนาดด้วย
            </p>
            <PreviewCode language="jsx">
              {`import React from 'react';

const SparklesIcon = ({ width, height, size, className = "", color = "currentColor", ...props }) => {
  const originalRatio = 1;
  const finalWidth = size ? size : width || 34;
  const finalHeight = size ? size : height || 34;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M27.764 2.24722C27.6814 1.84032 27.4606 1.47449 27.1391 1.21173C26.8176 0.948963 26.4152 0.80542 26 0.80542C25.5848 0.80542 25.1823 0.948963 24.8609 1.21173C24.5394 1.47449 24.3186 1.84032 24.236 2.24722L23.804 4.39282C23.7345 4.74135 23.5634 5.06152 23.3123 5.31297C23.0612 5.56443 22.7412 5.73592 22.3928 5.80582L20.2472 6.23422C19.8383 6.31508 19.4702 6.53532 19.2056 6.85735C18.941 7.17938 18.7964 7.58324 18.7964 8.00002C18.7964 8.41681 18.941 8.82067 19.2056 9.1427C19.4702 9.46473 19.8383 9.68497 20.2472 9.76583L22.3928 10.1942C22.7416 10.2638 23.0619 10.4352 23.3134 10.6866C23.5649 10.9381 23.7362 11.2585 23.8058 11.6072L24.2342 13.7528C24.3151 14.1617 24.5353 14.5298 24.8573 14.7944C25.1793 15.059 25.5832 15.2036 26 15.2036C26.4168 15.2036 26.8206 15.059 27.1427 14.7944C27.4647 14.5298 27.6849 14.1617 27.7658 13.7528L28.1942 11.6072C28.2638 11.2585 28.4351 10.9381 28.6866 10.6866C28.9381 10.4352 29.2584 10.2638 29.6072 10.1942L31.7528 9.76583C32.1617 9.68497 32.5298 9.46473 32.7944 9.1427C33.0589 8.82067 33.2036 8.41681 33.2036 8.00002C33.2036 7.58324 33.0589 7.17938 32.7944 6.85735C32.5298 6.53532 32.1617 6.31508 31.7528 6.23422L29.6072 5.80582C29.2584 5.73624 28.9381 5.56489 28.6866 5.31341C28.4351 5.06193 28.2638 4.74159 28.1942 4.39282L27.7658 2.24722H27.764ZM11.5082 9.23123C11.389 8.87241 11.1598 8.56025 10.8532 8.33901C10.5466 8.11778 10.1781 7.99872 9.79999 7.99872C9.4219 7.99872 9.0534 8.11778 8.74678 8.33901C8.44017 8.56025 8.211 8.87241 8.09179 9.23123L6.86239 12.923C6.77406 13.1884 6.62509 13.4296 6.42731 13.6273C6.22953 13.8251 5.98838 13.9741 5.72299 14.0624L2.03119 15.2918C1.67238 15.411 1.36021 15.6402 1.13898 15.9468C0.917752 16.2534 0.798691 16.6219 0.798691 17C0.798691 17.3781 0.917752 17.7466 1.13898 18.0532C1.36021 18.3599 1.67238 18.589 2.03119 18.7082L5.72299 19.9394C5.98819 20.0276 6.22921 20.1763 6.42698 20.3737C6.62475 20.5712 6.77382 20.812 6.86239 21.077L8.09179 24.7688C8.211 25.1276 8.44017 25.4398 8.74678 25.661C9.0534 25.8823 9.4219 26.0013 9.79999 26.0013C10.1781 26.0013 10.5466 25.8823 10.8532 25.661C11.1598 25.4398 11.389 25.1276 11.5082 24.7688L12.7376 21.077C12.8259 20.8116 12.9749 20.5705 13.1727 20.3727C13.3705 20.1749 13.6116 20.026 13.877 19.9376L17.5688 18.7082C17.9276 18.589 18.2398 18.3599 18.461 18.0532C18.6822 17.7466 18.8013 17.3781 18.8013 17C18.8013 16.6219 18.6822 16.2534 18.461 15.9468C18.2398 15.6402 17.9276 15.411 17.5688 15.2918L13.877 14.0624C13.6116 13.9741 13.3705 13.8251 13.1727 13.6273C12.9749 13.4296 12.8259 13.1884 12.7376 12.923L11.51 9.23123H11.5082ZM24.1082 23.6312C23.989 23.2724 23.7598 22.9602 23.4532 22.739C23.1466 22.5178 22.7781 22.3987 22.4 22.3987C22.0219 22.3987 21.6534 22.5178 21.3468 22.739C21.0402 22.9602 20.811 23.2724 20.6918 23.6312L20.3606 24.623C20.2724 24.8882 20.1237 25.1292 19.9263 25.327C19.7288 25.5248 19.488 25.6739 19.223 25.7624L18.2312 26.0918C17.8724 26.211 17.5602 26.4402 17.339 26.7468C17.1178 27.0534 16.9987 27.4219 16.9987 27.8C16.9987 28.1781 17.1178 28.5466 17.339 28.8532C17.5602 29.1599 17.8724 29.389 18.2312 29.5082L19.223 29.8376C19.4884 29.926 19.7295 30.0749 19.9273 30.2727C20.1251 30.4705 20.2741 30.7116 20.3624 30.977L20.6918 31.9688C20.811 32.3276 21.0402 32.6398 21.3468 32.861C21.6534 33.0823 22.0219 33.2013 22.4 33.2013C22.7781 33.2013 23.1466 33.0823 23.4532 32.861C23.7598 32.6398 23.989 32.3276 24.1082 31.9688L24.4394 30.977C24.5275 30.7118 24.6762 30.4708 24.8737 30.273C25.0711 30.0753 25.3119 29.9262 25.577 29.8376L26.5688 29.5082C26.9276 29.389 27.2398 29.1599 27.461 28.8532C27.6822 28.5466 27.8013 28.1781 27.8013 27.8C27.8013 27.4219 27.6822 27.0534 27.461 26.7468C27.2398 26.4402 26.9276 26.211 26.5688 26.0918L25.577 25.7606C25.3118 25.6725 25.0708 25.5238 24.873 25.3263C24.6752 25.1289 24.5262 24.8881 24.4376 24.623L24.1082 23.6312Z"
        fill={color}
      />
    </svg>
  );
};

export default SparklesIcon;`}
            </PreviewCode>
            <p className="text">ทีนี้เราก็จะสามารถเรียกใช้ icon นี้ได้แล้วซึ่งวิธีการเรียกใช้คือ</p>
            <PreviewCode language="jsx">{`import SparklesIcon from "@/components/icons/SparklesIcon";

<SparklesIcon size={48} color="#C70039" />`}</PreviewCode>
          </div>
        </div>
      </div>

      {/* Discover Match Icon */}
      <div className="row">
        <div className="container flex">
          <div className="preview w-2/5">
            <h2>SVG Icon: Discover Match</h2>
            <div className="flex flex-row gap-4">
              <DiscoverMatchIcon size={48} primaryColor="#FF1659" secondaryColor="#95002B" />
            </div>
          </div>
          <div className="preview-code w-3/5">
            <p className="text">
              สำหรับ Discover Match Icon จะเอารูปมาใช้แทนก็ได้แต่ถ้าพิจรณาแล้วว่าใช้ SVG ดีกว่าก็ลุยเลย แต่ถ้าใช้เป็น SVG จะมีความแตกต่างจาก
              Icon SVG ก่อนหน้าคือ Icon อันนี้มันมี 2 ส่วนและมี 2 สีคือส่วนหัวใจ และแว่นขยายทำให้เราต้องสร้าง <code>props</code>{" "}
              มารับเพิ่มนอกเหนือจาก <code>size</code> คือ <code>primaryColor</code>, <code>secondaryColor</code>
            </p>
            <PreviewCode language="jsx">
              {`import React from 'react';
const DiscoverMatchIcon = ({ width, height, size, className = "", primaryColor = "#A62D82", secondaryColor = "#DF89C6", ...props }) => {
  const originalRatio = 38 / 36;

  const finalWidth = size ? size * originalRatio : width || 38;
  const finalHeight = size ? size : height || 36;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 38 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M13.2604 24.6058L13.2535 24.6017L13.2274 24.5879C12.6853 24.293 12.153 23.9806 11.6312 23.6511C10.3871 22.8683 9.2017 21.996 8.08432 21.0411C5.55674 18.8611 2.74756 15.5903 2.74756 11.6726C2.74768 10.3943 3.14407 9.14751 3.88215 8.10386C4.62024 7.06021 5.66371 6.27104 6.86889 5.84501C8.07407 5.41898 9.38169 5.37704 10.6117 5.72497C11.8417 6.0729 12.9336 6.79358 13.737 7.78779C14.5405 6.79358 15.6324 6.0729 16.8624 5.72497C18.0924 5.37704 19.4 5.41898 20.6052 5.84501C21.8104 6.27104 22.8538 7.06021 23.5919 8.10386C24.33 9.14751 24.7264 10.3943 24.7265 11.6726C24.7265 15.5903 21.9187 18.8611 19.3897 21.0411C17.8022 22.3975 16.0787 23.5861 14.2467 24.5879L14.2206 24.6017L14.2137 24.6058H14.211C14.065 24.6831 13.9024 24.7237 13.7372 24.7239C13.572 24.7241 13.4093 24.6841 13.2631 24.6072L13.2604 24.6058Z"
        fill={primaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.1338 13.2277C22.3718 13.2277 20.682 13.9276 19.4362 15.1735C18.1903 16.4194 17.4903 18.1092 17.4903 19.8711C17.4903 21.6331 18.1903 23.3228 19.4362 24.5687C20.682 25.8146 22.3718 26.5145 24.1338 26.5145C25.8957 26.5145 27.5855 25.8146 28.8314 24.5687C30.0773 23.3228 30.7772 21.6331 30.7772 19.8711C30.7772 18.1092 30.0773 16.4194 28.8314 15.1735C27.5855 13.9276 25.8957 13.2277 24.1338 13.2277ZM15.6785 19.8711C15.6786 18.5191 16.003 17.1868 16.6243 15.986C17.2457 14.7852 18.1459 13.7509 19.2496 12.9699C20.3532 12.1889 21.6281 11.684 22.9672 11.4974C24.3063 11.3109 25.6706 11.4482 26.9457 11.8978C28.2207 12.3475 29.3694 13.0963 30.2953 14.0816C31.2212 15.0668 31.8973 16.2598 32.2669 17.5603C32.6365 18.8608 32.6889 20.231 32.4196 21.556C32.1503 22.8809 31.5672 24.1219 30.7192 25.175L34.7391 29.1961C34.8281 29.279 34.8995 29.379 34.949 29.4901C34.9985 29.6013 35.0251 29.7212 35.0273 29.8429C35.0294 29.9645 35.007 30.0853 34.9615 30.1981C34.9159 30.3109 34.8481 30.4134 34.7621 30.4994C34.676 30.5855 34.5736 30.6533 34.4608 30.6988C34.348 30.7444 34.2271 30.7668 34.1055 30.7646C33.9839 30.7625 33.8639 30.7359 33.7528 30.6863C33.6417 30.6368 33.5416 30.5654 33.4587 30.4764L29.4376 26.4566C28.1954 27.4572 26.6954 28.0859 25.111 28.2703C23.5265 28.4546 21.9223 28.187 20.4834 27.4984C19.0446 26.8097 17.83 25.7281 16.9797 24.3785C16.1295 23.0289 15.6784 21.4662 15.6785 19.8711Z"
        fill={secondaryColor}
      />
    </svg>
  );
};

export default DiscoverMatchIcon;

`}
            </PreviewCode>
            <p className="text">ทีนี้เราก็จะสามารถเรียกใช้ icon นี้ได้แล้วซึ่งวิธีการเรียกใช้คือ</p>
            <PreviewCode language="jsx">{`import DiscoverMatchIcon from "@/components/icons/DiscoverMatchIcon";

<DiscoverMatchIcon size={48} primaryColor="#FF1659" secondaryColor="#95002B" />`}</PreviewCode>
          </div>
        </div>
      </div>
    </>
  );
}
