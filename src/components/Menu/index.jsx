import { useState } from "react";
import DottedIcon from "../../assets/icons/more_horiz_24px.svg";
import { useLocation } from "react-router-dom";


const Menu = ({ list, rtl, data }) => {

  const [open, setOpen] = useState(false);
  const { state } = useLocation()

  const close = () => {
    setOpen(false);
  };

  const direction = rtl ? "left-[-30px]" : "right-[-30px]";
  const menuDireciton = rtl ? "left-0" : "right-0";

  return (
    <div className={`absolute ${direction}`}>
      <button
        onClick={() => setOpen(!open)}
        className="grid place-items-center w-[22px] h-[22px] hover:bg-[rgba(0,0,0,0.08)] rounded-full p-1"
      >
        <img src={DottedIcon} alt="message menu" />
      </button>
      {open && (
        <ul
          className={`absolute ${menuDireciton} block list-none bg-white rounded-[5px] min-w-[125px] w-fit border-2 border-[#BDBDBD]`}
          onClick={close}
        >
          {list.map((item) => (
            <li
              key={item.text}
              style={{ color: item.color }}
              className="w-full py-[8px] px-[14px] border-b-2 border-[#BDBDBD] last-of-type:border-0"
            >
              <button
                onClick={() =>
                  item.text === "Edit" ? item.click(data) : item.click(state.data.id,data.id)
                }
                className="text-sm"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
