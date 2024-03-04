 import Forms from "./components/Forms"


function App() {

  return (
    <div className=" bg-[#F3F3E3] h-screen flex justify-center items-center w-full">
      <div className="w-[45%] flex flex-col justify-center items-center h-full">
        <p className="font-merriweather font-extrabold text-[14px]  md:text-[1.2rem] lg:text-2xl mid:text-4xl mb-4 sm:mb-[2.5%] text-nowrap">Join our Community of Developers</p>
        <p className="font-poppins text-[0.5rem] md:text-[0.650rem] lg:text-sm mid:text-xl mb-[1%] text-nowrap">To join our community and participate in frontend challenges. </p>
        <p className="font-poppins text-[0.5rem] md:text-[0.650rem] lg:text-sm mid:text-xl mb-5 sm:mb-[4%] ">Please fill out the following form.</p>
        
        <Forms></Forms>
      </div>
    </div>
  )
}

export default App
