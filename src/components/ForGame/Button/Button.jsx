'use client'
import "./Button.css";

const Button = ({ width, onClick, children }) => {


  return (
    <button onClick={onClick} className="btn bg-[#FFF07D] border-none shadow-none hover:shadow-non hover:bg-[#FFF07D]  rounded-full">
      <h2 className="text-[18px] text-[#705896]"> 
        {children}
      </h2>
   </button>
  );
};

export default Button;
