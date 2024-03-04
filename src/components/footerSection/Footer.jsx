import logo2 from "../../assets/images/logo/logo2.png";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
function Footer() {
  return (
    <div className="flex items-start justify-center  bg-[#000]" id="footer">
      <div className="mx-auto max-w-[2400px]  bg-[#000] w-full">
        <div className="md:pl-0   px-3 sm:py-5 py-3">
          <div className="flex flex-col md:flex-row md:px-14">
            <div className="xl:w-5/12 lg:w-5/12 md:w-4/12 w-full mx-2 sm:mx-4  2xl:pt-0 lg:pl-0 ">
              <img src={logo2} alt="" className="2xl:w-72 special:max-w-72 max-w-52" />
              {/* <p className="text-sx sm:text-sm mt-5 2xl:text-xl special:text-2xl text-[#fff]">
                Empowering Lives Through Winlads
              </p> */}
              <p className="text-sx sm:text-sm mt-5 2xl:text-lg special:text-2xl text-[#fff]">
                Embark on an opulent journey with Winlads LuxeLife Rewards – an
                exclusive program curated to indulge members in premium and
                luxury experiences.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row xl:w-7/12 lg:w-7/12 md:w-8/12 w-full sm:justify-between pb-2 ">
              <div className="m-2 sm:m-4 text-[#fff] flex-1 ">
                <p className="font-bold text-sm mb-3 2xl:text-xl special:text-2xl">
                  Quick Links
                </p>
                <ul className="text-xs 2xl:text-lg flex flex-col gap-1">
                  <li className="cursor-pointer">
                    <Link
                      to="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    {/* <a href="#" target="_blank" rel="noopener noreferrer">
                      Membership T&C
                    </a> */}
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      to="conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="m-2 sm:m-4 text-[#fff] flex-1 ">
                <p className="font-bold mb-3 text-sm 2xl:text-xl special:text-2xl">
                  Contact Us
                </p>
                <ul className="text-xs 2xl:text-lg flex flex-col gap-1 ">
                  {/* <li className=" cursor-pointer flex items-center gap-2 2xl:gap-5">
                    <MdOutlineLocalPhone className="text-white text-sm 2xl:text-lg" />

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      +61 420 363 993
                    </a>
                  </li> */}
                  <li className="cursor-pointer flex items-center gap-2 2xl:gap-5">
                    <MdOutlineEmail className="text-white text-sm 2xl:text-lg" />

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      info@winlads.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div className="m-2 sm:m-4 text-[#fff] flex-1 ">
                <p className="font-bold text-sm mb-3 2xl:text-xl special:text-2xl">
                  News Letter
                </p>
                <ul className="text-xs 2xl:text-lg flex flex-col gap-1">

                  <li className="cursor-pointer">2009/15 Everage St</li>
                  <li className="cursor-pointer">Moonee Ponds</li>
                  <li className="cursor-pointer">Victoria</li>
                  <li className="cursor-pointer">3039</li>

                </ul>
              </div> */}
              {/* <div className="m-2 sm:m-4 text-[#fff] flex-1 ">
                <p className="font-bold text-sm mb-3 2xl:text-xl special:text-2xl">
                  Registration
                </p>
                
              </div> */}
            </div>
          </div>
        </div>
        <hr />
        <div className="py-2 flex items-left justify-between md:px-10 px-5">
          <div className="flex lg:flex-row flex-col justify-start items-start">
            <p className="text-left text-xs special:text-base text-white">
              Copyright 2023 Winlads, All Rights Reserved. |
            </p>
            <ul className="text-xs flex md:flex-row flex-col text-white gap-1">

              <li className="cursor-pointer">ABN: 87671535149 |</li>
              <li className="cursor-pointer">NSW: TP/03199 |</li>
              <li className="cursor-pointer">Permit No: ACT TP 23/02687</li>

            </ul>
          </div>

          <div className="flex items-center justify-center gap-4 text-white text-2xl">
            <Link to={'https://www.facebook.com/winlads'} target="_blank">
              <FaFacebook className="hover:text-gray-500" />
            </Link>
            <Link to={'https://www.instagram.com/winladsau/'} target="_blank">
              <FaInstagram className="hover:text-gray-500" />
            </Link>
            <Link to={'#'} target="_blank">
              <FaXTwitter className="hover:text-gray-500" />
            </Link>
            <Link to={'https://www.tiktok.com/@winlads'} target="_blank">
              <FaTiktok className="hover:text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
//                  