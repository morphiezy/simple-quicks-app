import React from "react";
import ExpandIcon from "../../../assets/icons/expand_more_24px.svg";

const dropdownLists = [
  { id: 1, text: "All", value: "all" },
  { id: 2, text: "Complete Tasks", value: true },
  { id: 3, text: "Uncomplete Task", value: false },
];

const Dropdown = ({ updateList }) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(dropdownLists[0].text);

  const dropdownClick = () => {
    setOpen(!open);
  };

  const itemDropDownClick = (text, value) => {
    setSelected(text);
    updateList(value);
  };

  const dropdownItemStyle = open
    ? "opacity-100 visible top-12"
    : "opacity-0 invisible top-10";

  return (
    <div className="relative z-50" onClick={dropdownClick}>
      <div className="flex justify-between w-[120px] h-[40px] py-[10px] px-[14px] ml-12 border border-[#828282] rounded-[5px] cursor-pointer">
        <p className="text-sm font-bold max-w-[80px] line-clamp-1">
          {selected}
        </p>
        <button>
          <img
            className={`${
              open ? "rotate-180" : null
            } transition-all duration-300`}
            src={ExpandIcon}
            alt="expand dropdown"
          />
        </button>
      </div>
      <ul
        className={`overflow-hidden absolute w-[220px] h-fit bg-white border border-[#828282] rounded-[5px] transition-all duration-300 ${dropdownItemStyle}`}
      >
        {dropdownLists.map(({ id, text, value }) => {
          return (
            <li
              key={id}
              className="border-b border-[#828282] last-of-type:border-b-0"
            >
              <button
                className="block w-full h-full p-3 text-left font-bold text-sm hover:bg-zinc-100"
                onClick={() => itemDropDownClick(text, value)}
              >
                {text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
