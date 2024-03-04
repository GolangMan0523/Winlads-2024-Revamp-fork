import "./join.css"
import car from "../../assets/images/services/service-3.png";
import { motion } from "framer-motion";

function Join() {
  return (
    <div className="mx-5 xl:px-20 py-32 lg:py-60 ">
      <div className="join flex items-center lg:flex-row-reverse flex-col">
        <div className="basis-full lg:basis-1/2">
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={car}
            alt="Your Logo"
            className="w-full h-full object-contain"
          ></motion.img>
        </div>


        <h2 className="basis-full J-tittle lg:basis-1/2">
          Join us today and gain entry to Australia s most extensive and
          exceptional rewards network!
          <br></br>
        </h2>
      </div>
    </div>
  );
}

export default Join