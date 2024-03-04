import welcomeImage from "../../../src/assets/images/welcome/welcome.png";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center mt-5  ">
      <h1 className="text-3xl font-bold mt-8 ">Welcome To Winlads</h1>
      <img
        src={welcomeImage}
        alt="welcome"
        className="mt-5"
      />
      <p className="text-center font-semibold  mt-5 ">
        Join us as we embark on a mission <br></br>
        to save money and improve lives.<br></br>
        We appreciate your confidence and on-going assistance.<br></br>
        Let s start saving and change the world
        <br></br>
        right now.
      </p>
    </div>
  );
}

export default Welcome;
