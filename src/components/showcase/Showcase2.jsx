import React, { useEffect, useState } from 'react';
import Jip from "../../assets/images/showacase/jip.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import WindlandText from "../../assets/images/showacase/windland.png";
import { motion } from "framer-motion";
import HeaderLogo from "../../assets/images/headerLogo.png"
import { toast } from 'react-toastify';

const Showcase2 = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate()

  const scrollTo = (id) => {
    const otherComponentElement = document.getElementById(id);

    if (otherComponentElement) {
      otherComponentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolling = scrollTop > 0;

      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="w-full ">
      <div className={`${scrolling ? 'bg-white' : 'bg-transparent'} fixed py-4 w-full z-20 hidden xl:flex justify-between items-center px-4`}>
        <div>
          <img src={HeaderLogo} alt="" />
        </div>
        <nav className="lg:flex items-center justify-end gap-3 xl:gap-5 special:gap-8 hidden">
          <span
            className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA]"
            onClick={() => navigate('/under-dev')}
          >
            <Link>Cashback</Link>
          </span>
          <span
            className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA]"
            onClick={() => scrollTo("contactUs")}
          >
            <Link>Be a Partner</Link>
          </span>
          <span
            className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA]"
            onClick={() => scrollTo("partners")}
          >
            <Link>Our Partners</Link>
          </span>
          <span
            className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA]"
            onClick={() => scrollTo("faq")}
          >
            <Link>FAQ</Link>
          </span>
          <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA] hidden">
            <Link to="">Become A Partner</Link>
          </span>
          <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA]">
            <a
              href="https://winladsgiveaway.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Giveaways
            </a>
          </span>
          {/* <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA]">
            <Link to="">Shop</Link>
          </span> */}
          <button
            className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-black bg-amber-500 rounded-lg hover:text-black hover:bg-white"
            onClick={() => scrollTo("contactUs")}
          >
            {" "}
            Contact
          </button>
          <button
            className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-black hover:bg-white"
            onClick={() => navigate('/login')}
          >
            {" "}
            Sign In
          </button>
        </nav>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch ">
        {/* left */}
        <div className="w-full lg:w-[46%] xl:1/2 bg-left-showcase flex flex-col items-end  ">
          {/* mobile nav start*/}
          <div className="flex items-center justify-end p-3 lg:hidden">
            <div
              className=" cursor-pointer"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              {isNavOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </div>
          </div>

          {isNavOpen && (
            <div className="flex px-10 py-5 rounded-lg-lg flex-col items-center gap-5 lg:hidden rounded-lg bg-[#38bfc9] absolute z-10 w-full top-12 ">
              <span
                className="font-bold text-base text-white  hover:text-[#EC263F]"
                onClick={() => scrollTo("our-partners")}
              >
                <Link>Cashback</Link>
              </span>
              <span
                className="font-bold text-base text-white  hover:text-[#EC263F]"
                onClick={() => scrollTo("contactUs")}
              >
                <Link>Be a Partner</Link>
              </span>
              <span
                className="font-bold text-base text-white  hover:text-[#EC263F]"
                onClick={() => scrollTo("our-partners")}
              >
                <Link>Our Partners</Link>
              </span>
              <span className="font-bold text-base text-white  hover:text-[#EC263F] hidden">
                <Link to="">Become A Partner</Link>
              </span>
              <span
                className="font-bold text-base text-white  hover:text-[#EC263F]"
                target="_blank"
              >
                <a
                  href="https://winladsgiveaway.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Giveaway
                </a>
              </span>
              {/* <span className="font-bold text-base text-white  hover:text-[#EC263F] hidden">
                <Link to="">Shop</Link>
              </span> */}
              <span
                className="font-bold text-base text-white  hover:text-[#EC263F]"
                onClick={() => scrollTo("faq")}
              >
                <Link>FAQ</Link>
              </span>
              <button
                className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-black hover:bg-white"
                onClick={() => navigate('/login')}
              >
                {" "}
                Sign In
              </button>
              <button
                className="font-bold text-base  px-3 py-2 text-[#d4d4d4] bg-amber-500 rounded-lg hover:text-black hover:bg-white"
                onClick={() => scrollTo("contactUs")}
              >
                Contact
              </button>
            </div>
          )}

          {/* mobile nav end*/}

          {/* for mobile */}
          <div className="p-3  flex flex-col items-center gap-8 lg:hidden  w-full">
            <div className="flex items-center lg:justify-end justify-center ">
              <motion.img
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.5, delay: 0 }}
                src={WindlandText}
                alt=""
                className=" md:w-10/12 w-9/12"
              />
            </div>

            <div className=" flex flex-col items-center  gap-2 ">
              <motion.p
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold"
              >
                With over <span className='text-sm sm:text-md md:text-lg xl:text-xl 2xl:text-xl special:text-2xl font-semibold'>200+</span> businesses across 200+ stores where
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold"
              >
                you can access exclusive discounts Australia Wide from
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold"
              >
                only $ 9.99 per month, opt-out anytime
              </motion.p>
            </div>

            <Link to="/login">
              <div className="flex items-center justify-center lg:justify-end">
                <motion.button
                  initial={{ opacity: 0, y: "-10%" }}
                  whileInView={{ opacity: 1, y: "0" }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white hover:bg-black/75"
                >
                  Sign Up now
                </motion.button>
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center h-full   2xl:max-w-[1200px]">
            <motion.img
              initial={{ opacity: 0, x: "-20%" }}
              whileInView={{ opacity: 1, x: "0" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={Jip}
              alt=""
              className="lg:w-full md:w-10/12 w-9/12"
            />
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-[54%] xl:1/2 xl:pt-16">
          <div className="p-3 lg:p-5 flex flex-col gap-16   2xl:max-w-[1200px] ">
            {/* web-nav */}

            {/* <nav className="lg:flex items-center justify-end gap-3 xl:gap-5 special:gap-8 hidden">
              <span
                className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA]"
                onClick={() => scrollTo("our-partners")}
              >
                <Link>Our Partners</Link>
              </span>
              <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA] hidden">
                <Link to="">Become A Partner</Link>
              </span>
              <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA]">
                <a
                  href="https://winladsgiveaway.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Giveaways
                </a>
              </span>
              <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#0184EA]">
                <Link to="">Shop</Link>
              </span>
              <button
                className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white hover:bg-black/75"
                onClick={() => scrollTo("contactUs")}
              >
                {" "}
                Contact Us
              </button>
            </nav> */}

            <div className="hidden lg:flex items-center lg:justify-end justify-center mt-14">
              <motion.img
                initial={{ opacity: 0, x: "-20%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5 }}
                src={WindlandText}
                viewport={{ once: true }}
                alt=""
                className="lg:w-10/12 md:w-10/12 w-9/12"
              />
            </div>

            <div className="hidden lg:flex flex-col items-center lg:items-end gap-2 lg:gap-3 2xl:gap-4 special:gap-6">
              <motion.p
                initial={{ opacity: 0, x: "-20%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold"
              >
                With over <span className='text-sm sm:text-md md:text-lg xl:text-2xl 2xl:text-4xl special:text-3xl font-semibold'>200+</span> businesses across <span className='text-sm sm:text-md md:text-lg xl:text-2xl 2xl:text-4xl special:text-3xl font-semibold'>200+</span> stores where
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: "-20%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold"
              >
                you can access exclusive discounts Australia Widefrom
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: "-20%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold"
              >
                only $ <span className='text-sm sm:text-md md:text-lg xl:text-2xl 2xl:text-4xl special:text-3xl font-semibold'>9.99</span> per month, opt-out anytime
              </motion.p>
            </div>

            <Link to="/register">
              <div className="hidden lg:flex items-center justify-center lg:justify-end">
                <motion.button
                  initial={{ opacity: 0, x: "-20%" }}
                  whileInView={{ opacity: 1, x: "0" }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-black hover:bg-white"
                >
                  {" "}
                  Sign Up now
                </motion.button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase2;
