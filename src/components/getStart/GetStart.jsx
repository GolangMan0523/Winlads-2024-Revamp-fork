import React from "react";
import { motion } from "framer-motion";


const containerStyle = {
   padding: '0% 0 0 0',
   marginBottom:'',
  position: 'relative',
  width:'100%'
};

const iframeStyle = {
  // position: 'absolute',
  // top: 0,
  // left: 0,
  width: '100%',
  height: '100%',
  aspectRatio:'16/9'
};


const GetStart = () => {
  return (
    <div className="">
      <motion.p
        initial={{ opacity: 0, y: "-40%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className="text-center my-4 md:my-4 text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
      >
        {" "}
        Empowering Lives Through Winlads
      </motion.p>
      <div className="flex items-start py-20 lg:flex-row flex-col justify-center bg-welcome2 md:px-14 px-4">
        <div style={containerStyle} className="flex flex-col space-y-4">
          <iframe
            title="Winlads"
            src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture;muted"
            style={iframeStyle}
          />
          <script src="https://player.vimeo.com/api/player.js"></script>
          <motion.p
            initial={{ opacity: 0, y: "40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-5 sm:mt-0 lg:mt-0 text-left mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg w-10/12 lg:w-full"
          >
            <span className="text-2xl">A</span> Journey of Giving Back At Winlads, our pursuit extends beyond
            creating exceptional experiences; it encompasses a heartfelt
            dedication to transforming lives and fostering positive change within
            communities. We firmly believe in the profound impact of giving back
            and are driven by a vision to make a meaningful difference in the
            lives of individuals worldwide.
          </motion.p>
        </div>
        <div className="mx-auto 2xl:max-w-[2400px]   w-full py-10 lg:py-0 ">
          

          <motion.p
            initial={{ opacity: 0, y: "-40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-0 sm:mt-0 lg:mt-0 text-left w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg"
          >
            Enabling Transformation: Our philanthropic journey is rooted in a
            profound commitment to social responsibility. We strive to empower
            those in need, amplifying the possibilities for a brighter, more
            promising future. From supporting underprivileged communities to
            extending a helping hand during critical times, Winlads is dedicated
            to making a tangible difference where it matters most.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: "-40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-5 sm:mt-6 lg:mt-8 text-left w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg"
          >
            Partnering with Purpose: We collaborate with esteemed charitable
            organizations and foundations to channel our efforts effectively.
            These partnerships enable us to amplify our impact and reach,
            extending assistance to diverse causes such as education, healthcare,
            environmental conservation, and socio-economic development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: "-40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-5 sm:mt-6 lg:mt-8 text-left w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg"
          >
            Catalysts of Hope and Change: Through fundraising initiatives,
            awareness campaigns, and direct contributions, Winlads endeavors to be
            catalysts of hope and change. Every action we take, every endeavor we
            embark upon, is driven by the inherent belief that together, we can
            create a world where compassion, generosity, and kindness reign
            supreme.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: "-40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-5 sm:mt-6 lg:mt-8 text-left w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg"
          >
            Building a Legacy of Compassion: With unwavering determination and an
            empathetic spirit, Winlads aspires to build a legacy of compassion and
            empathy. We understand that each act of kindness, no matter how small,
            has the potential to transform lives, elevate communities, and inspire
            a ripple effect of positivity and hope.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: "-40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-5 sm:mt-6 lg:mt-8 text-left w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg"
          >

            Join Us on the Journey: We invite you to join us on this meaningful journey of giving back. Together, we can forge a future where individuals thrive, communities flourish, and hope prevails. Your support and participation in our charitable initiatives empower us to create a world where compassion and kindness reign supreme, ensuring that no one is left behind.
          </motion.p>

          {/* <div className="mt-5 sm:mt-6 lg:mt-8 flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0, y: "40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white hover:bg-black/75"
            >
              Get Started
            </motion.button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GetStart;
