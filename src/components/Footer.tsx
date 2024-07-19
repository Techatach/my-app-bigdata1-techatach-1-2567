import React from "react";

export default function Footer() {
  return (
    <div className="shadow-lg p-16 mb-5 bg-body rounded">
      <footer className="footer text-base-content p-10">
        <nav>
          <h6 className="footer-title">บริการ</h6>
          <a className="link link-hover">ยี่ห้อ</a>
          <a className="link link-hover">ออกแบบ</a>
          <a className="link link-hover">การตลาด</a>
          <a className="link link-hover">โฆษณา</a>
        </nav>
        <nav>
          <h6 className="footer-title">มหาวิทยาลัยเกษตรศาตร์</h6>
          <a className="link link-hover">เกี่ยวกับ</a>
          <a className="link link-hover">ติดต่อ</a>
          <a className="link link-hover">ภารกิจ</a>
          <a className="link link-hover">AI ตรวจวินิจฉัยโรค</a>
        </nav>
        <nav>
          <h6 className="footer-title">นโยบาย</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}
