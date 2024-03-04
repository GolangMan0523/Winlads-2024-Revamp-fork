import { Switch } from "@headlessui/react";
import logo from "../../assets/images/logo/logo.png";
import "./footer.css";

function Footer() {
  return (
    <div className="flex flex-col ssl mt-0 px-5 xl:px-10">
      <div className="flex flex-col xl:flex-row justify-between">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <img src={logo} alt="Your Logo" className="f-logo" />
            <p className="text-white mt-5">
            Embark on an opulent journey with Winlads LuxeLife Rewards –
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="footer-title">
            <h4 className="f-tittle">Links</h4>
          </div>
          <div>
            <ul>
              <li>
                <a className="fbottomlink" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Service
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Pricing
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Feature
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div
   
          >
            <div className="footer-title">
              <h4 className="f-tittle">Product</h4>
            </div>
            <ul>
              <li>
                <a className="fbottomlink" href="https://www.winlads.com/conditions">
                  Membership T&C
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Cars
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Drive
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Winners
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div
    
          >
            <div className="footer-title">
              <h4 className="f-tittle">Community</h4>
            </div>
            <ul>
              <li>
                <a className="fbottomlink" href="/">
                  Global Partners
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Forum
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Careers
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Community
                </a>
              </li>
              <li>
                <a className="fbottomlink" href="/">
                  Brand Assets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-white font-semibold mb-5">
        <p>Copyright @ 2023 Winlads</p>
      </div>
    </div>
  );
}

export default Footer;
