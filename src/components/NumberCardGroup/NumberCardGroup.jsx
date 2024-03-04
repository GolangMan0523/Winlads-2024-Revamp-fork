import add from "../../assets/images/icons/Add-User.svg";
import home from "../../assets/images/icons/Home.svg";
import wallet from "../../assets/images/icons/Wallet.svg";
import VanImage from "../../assets/images/services/service-1.png";
import { motion } from "framer-motion";
import "./NumberCardGroup.css";

function NumberCardGroup() {
  return (
    <div className="mx-auto xl:px-20 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mb-5 md:mb-0">
          <motion.img
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.6 }}
            src={VanImage}
            alt="Your Logo"
            className="van-card-image"
          ></motion.img>
        </div>
        <div className="grid-cols-3 md:grid-cols-1 mb-2 ">
          <div className="card p-7 mb-5 bg-sky-400 hover-up">
            <div className="card-body ">
              {/* <img className="icon" src={add} alt="saving"></img> */}
              <h1 className="text-7xl text-blue-900">600+</h1>
              <p className="card-text text-blue-900">
                Australian business Benefits
              </p>
            </div>
          </div>

          <div className="card p-7 mt-5 md:mt-0  mb-5 hover-up bg-blue-400">
            <div className="card-body">
              {/* <img className="icon" src={home} alt="saving"></img> */}
              <h1 className="text-7xl text-white">1000s</h1>
              <p className="card-text text-white">
                In savings through our mates rates discounts
              </p>
            </div>
          </div>

          <div className="card p-7 mt-5 md:mt-0 mb-5 hover-up bg-blue-600">
            <div className="card-body">
              {/* <img className="icon" src={wallet} alt="saving"></img> */}
              <h1 className="text-7xl text-white">1000s</h1>
              <p className="card-text text-white">
                Stores you can redeem offers in person or online
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberCardGroup;
