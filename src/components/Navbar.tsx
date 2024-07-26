import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="self-center top-0 w-full max-w-9xl shadow-lg p-3 mb-5 bg-body rounded ">
          <div className="flex justify-end items-center text-gray-700">
            {/* <div className="mx-2 my-4 ">
              <ion-icon
                name="logo-pwa"
                className="text-5xl text-blue-600 hover:text-stone-600"
              ></ion-icon>
            </div> */}
            <ul className="hidden md:flex items-center text-[18px] font-semibold pr-10">
              <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/">หลักสูตรรัฐประศาสนศาตสร์</a>
              </li>
              <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/">หน้าหลัก</a>
              </li>
              <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/about">เกี่ยวกับ</a>
              </li>
              <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/ai">AI ขับเคลื่อนนโยบายสาธารณะ</a>
              </li>
              <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/chatgpt">ChatGPT</a>
              </li>
              <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="#">ทีมงาน</a>
              </li>
              <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="#">ติดต่อ</a>
              </li>
              <li className="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                <a href="#">LogIn</a>
              </li>
              <li className="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                <a href="#">SignUp</a>
              </li>
            </ul>{" "}
            <button className="block p-3 mx-10 md:hidden hover:bg-gray-200 rounded-xl group">
              <div className="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
              <div className="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
              <div className="w-5 my-[3px] h-[3px] bg-gray-600"></div>
              <div className="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-white group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                <ul className="flex flex-col items-center text-[18px] pt-[60px]">
                  <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Home</a>
                  </li>
                  <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">About Us</a>
                  </li>
                  <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Our Services</a>
                  </li>
                  <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Portfolio</a>
                  </li>
                  <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Contact</a>
                  </li>
                  <li className="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                    <a href="#">LogIn</a>
                  </li>
                  <li className="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                    <a href="#">SignUp</a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
