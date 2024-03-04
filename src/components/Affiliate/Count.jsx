import React, { useState } from 'react'
import CountUp from 'react-countup';

const Count = ({ count }) => {
    const [number, setNumber] = useState([])
    return (
      <div className="bg-[#1A1A1A] p-3  rounded-full text-white font-bold text-2xl md:text-3xl xl:text-4xl w-max mx-auto border-white border-4 shadow-xl">
        {/* <span>1</span>
        <span>3</span>
        <span>2</span>
        <span>2</span>
        <span>5</span> */}
        <CountUp start={0} end={count} delay={0}>
          {({ countUpRef }) => (
            <div>
              {count < 10 ? "0" : count}
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </div>
    );
}

export default Count