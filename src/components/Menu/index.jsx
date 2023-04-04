import { useState } from "react";
import DottedIcon from "../../assets/icons/more_horiz_24px.svg";


const Menu = ({ children, contentDirection }) => {

  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const toggleDirection = contentDirection === "left" ? "left-[-30px]": contentDirection === "right" ?  "right-[-30px]" : null;
  const menuDirection = contentDirection === "left" ?  "left-0" : "right-0";

  return (
    <div className={`absolute ${toggleDirection}`}>
      <button
        onClick={() => setOpen(!open)}
        className="grid place-items-center w-[22px] h-[22px] hover:bg-[rgba(0,0,0,0.08)] rounded-full p-1"
      >
        <img src={DottedIcon} alt="message menu" />
      </button>
      {open && (
        <ul
          className={`absolute ${menuDirection} block list-none bg-white rounded-[5px] min-w-[125px] w-fit border-2 border-[#BDBDBD]`}
          onClick={close}
        >
          {children}
        </ul>
      )}
    </div>
  );
};


export default Menu;