import React from "react";
import Style from "../Styles/footer.module.css";
import Logo from "../Assets/Icons/white-logo.png";
import { Facebook, Instagram, Twitter } from "react-feather";

const Footer = () => {
  return (
    <div className={Style.footerContainer}>
      <div className={Style.footerContent}>
        <div className={Style.footerAddress}>
          <img alt="startup-logo" src={Logo} />
          <p>101, Relcon Enclave, NH-48</p>
          <p>Surat, Gujarat</p>
          <p>India - 394325</p>
        </div>
        <div className={Style.footerSection}>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className={Style.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>Community Guidelines</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>Cancellation & Refund</li>
            <li>Shipping & Exchange</li>
            <li>FAQs</li>
            <li>Startup FAQs</li>
          </ul>
        </div>
        <div className={Style.footerSection}>
          <h3>FAQs</h3>
          <ul>
            <li>Startup FAQs</li>
          </ul>
        </div>
      </div>
      <div className={Style.bottomNav}>
        <div className={Style.socialMedia}>
          <p><Twitter /></p>
          <p><Facebook /></p>
          <p><Instagram /></p>
        </div>
        <div className={Style.footerCopyRight}>
          <p>
            © 2023 <b>StartupzWorld,</b> All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
