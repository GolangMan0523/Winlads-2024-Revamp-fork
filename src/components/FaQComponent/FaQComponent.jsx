import { useState } from "react";

function FaQComponent({title, desc, number}) {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? null : accordionId);
  };

  const isAccordionActive = (accordionId) => {
    return (
      accordionId === activeAccordion ||
      (activeAccordion === 1 && accordionId === 1)
    );
  };

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="my-3 special:flex special:flex-col special:gap-10 special:pt-10"
    >
      <div>
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 mb-2 font-medium text-left text-black-500 rounded-3xl focus:bg-white dark:text-black-400 bg-white border border-[#dcdcdc] special:border-4 2xl:border-2 special:rounded-[40px] hover:bg-[#D1D5DB] active:bg-[#D1D5DB]`}
            onClick={() => toggleAccordion(number+1)}
            aria-expanded={isAccordionActive(number+1)}
            aria-controls="accordion-collapse-body-1"
          >
            <span className="font-bold special:text-xl 2xl:text-sm special:py-5 ">
              {title}
            </span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 special:w-6 special:h-6 rotate-180 shrink-0 ${
                isAccordionActive(number+1) ? "rotate-0" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 10 6"
            >
              <path d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`p-5 my-5  bg-gray-200 rounded-3xl mb-2 ${
            isAccordionActive(number+1) ? "" : "hidden"
          }`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <p className="mb-2 text-black special:text-lg 2xl:text-md text-xs special:py-3 special:rounded-[40px]">
           {desc}
          </p>
        </div>
      </div>
      {/* 
      <button
        type="button"
        className=" bg-black text-white  text-lg  font-semibold	w-full  py-3  rounded-xl mt-2 mb-2"
      >
        Submit Your Question
      </button> */}
    </div>
  );
}

export default FaQComponent;
