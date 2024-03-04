import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import BgImg from "../../assets/images/conImg.png"

const ContactForm = () => {

  const divStyle = {
    backgroundImage: `url(${BgImg})`,
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // height: "300px",
    backgroundPosition: 'right bottom'

  };


  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleInputChange = (event) => {

    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/contactEmail`,
        {
          formData,
        }
      );
    
      if (response.status == 200) {
        toast.success(`We have recieved your message, we will contact you on ` + formData.email);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(response.data.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-chose-plan py-4" id="contactUs">
      <form
        // style={{ backgroundImage: 'url(./fadejeep.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}
        style={divStyle}
        onSubmit={handleSubmit}
        method="POST"
        className="px-5 xl:px-10 2xl:px-10 special:px-40 flex flex-col justify-center bg-white w-3/4 mx-auto py-10 shadow-sm rounded-lg mb-5"
      >
        <p className="text-center text-base md:text-lg 2xl:text-xl special:text-3xl font-extrabold xl:tracking-[18px] sm:tracking-[8px] tracking-[12px] uppercase py-4">
          Contact Us
        </p>

        <div className="pt-0 mb-8">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            className=" bg-transparent focus:outline-none relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-500  border-b-2 rounded outline-none"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="pt-0 mb-8">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            className=" bg-transparent focus:outline-none relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-500  border-b-2 rounded outline-none"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="pt-0 mb-8">
          <textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            className="bg-transparent focus:outline-none relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-500  border-b-2 rounded outline-none"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="pt-0 justify-center flex">
          <button
            className="bg-black hover:shadow-lg focus:outline-none px-6 py-3  mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none hover:text-black hover:bg-white"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
