import ExpandIcon from "../../../assets/icons/expand_more_24px.svg";
import MoreIcon from "../../../assets/icons/more_horiz_24px.svg";

const Label = ({ expand, setExpand }) => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start">
        <div className="mr-[22px] w-fit h-fit">
          <input type="checkbox" name="checked task" className="block mt-1" />
        </div>
        <div className="w-[300px]">
          <h2 className="text-[#4F4F4F] text-sm font-bold">
            Close off Case #012920- RODRIGUES, Amiguel
          </h2>
        </div>
      </div>
      <div className="flex items-center text-xs">
        <span className="text-[#EB5757] mr-3">2 Days Left</span>
        <span className="text-[#4F4F4F] mr-3">14/06/2021</span>
        <button className={`w-fit h-fit mr-3 ${expand ? "rotate-180" : null} transition-all duration-300`} onClick={()=> setExpand(!expand)}>
            <img src={ExpandIcon} alt="expand taks"/>
        </button>
        <button className="w-fit h-fit">
            <img src={MoreIcon} alt="menu task"/>
        </button>
      </div>
    </div>
  );
};

export default Label;
