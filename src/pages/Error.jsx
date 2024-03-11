import NotFoundImage from '../assets/404.svg';


const ErrorPage = () => {

  const handleBack = ()=>{
    window.location.href = '/'
  }

  return <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <img src={NotFoundImage} alt="Not Found" className="w-80 h-80 mb-8" />
    <h1 className="text-3xl font-bold mb-4">Oops! an Error 😢</h1>
    <p className="text-lg text-gray-600">Sorry. the page you are looking for does not exist.</p>
    <button className='bg-orange-400 px-5 py-2 my-5 hover:bg-orange-500' onClick={handleBack}>Go back to home</button>
  </div>;

}

export default ErrorPage;