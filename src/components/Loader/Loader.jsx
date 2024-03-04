import './Loader.css'; // Correct path to your CSS file
import LoaderImg from '../../assets/images/loader.png'; // Correct path to your image

const Loader = () => {
  return (
    <div className='bg-[#4FC8E8] flex justify-center items-center w-full h-screen'>
      <img src={LoaderImg} className="loader-image" alt="loader" />
    </div>
  );
}

export default Loader;
