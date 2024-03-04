function Sidebar() {
  return (
    <div
      className="md:flex lg:flex flex-col lg:w-[111px] 4xl:w-[222px] xl:w-[111px] h-screen md:w-[36px] w-[24px]"
      style={{
        position: "fixed",
        top: "0px",
        zIndex: "1000",
      }}
    > 
      <div
        className="flex justify-center items-center transition duration-700 hover:scale-x-125"
        style={{
          background: "linear-gradient(180deg, #46ED43 0%, #0D9D01 100%)",
          color: "#fff",
          height: "33.333%",
          textTransform: "uppercase",
          borderRadius: "0px 20px 20px 0px",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            transformRigin: "0 0",
            transform: "rotate(270deg)",
            letterSpacing: "5px",
          }}
          className="2xl:text-4xl"
        >
          winlands
        </p>
      </div>
      <div
        className="flex justify-center items-center transition duration-700 hover:scale-x-125"
        style={{
          background: "linear-gradient(180deg, #ED4343 0%, #9D1D01 100%)",
          color: "#fff",
          height: "33.333%",
          textTransform: "uppercase",
          borderRadius: "0px 20px 20px 0px",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            transformRigin: "0 0",
            transform: "rotate(270deg)",
            letterSpacing: "5px",
          }}
          className="2xl:text-4xl"
        >
          benifits
        </p>
      </div>
      <div
        className="flex justify-center items-center transition duration-700 hover:scale-x-125"
        style={{
          background: "linear-gradient(130deg, #FFF400 1.1%, #CA9E03 97.54%)",
          color: "#fff",
          height: "33.333%",
          textTransform: "uppercase",
          borderRadius: "0px 20px 20px 0px",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            transformRigin: "0 0",
            transform: "rotate(270deg)",
            letterSpacing: "5px",
          }}
          className="2xl:text-4xl"
        >
          promotions
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
