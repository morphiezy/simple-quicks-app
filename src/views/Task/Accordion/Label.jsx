import ExpandIcon from "../../../assets/icons/expand_more_24px.svg";
import { Menu } from "../../../components";
import date from "../../../utils/date";

const Label = ({ expand, expandBody, data, updateTask, deleteClick }) => {

  const handleChecked = () => {
    updateTask(data.id, "completed", !data.completed);
  };

  const handleTitleChange = (value) => {
    updateTask(data.id, "title", value)
  }

  const daysLeft = date.task.dayLeft(data.deadline);
  const deadline = date.task.deadline(data.deadline);

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start">
        <div className="mr-[22px] w-fit h-fit">
          <input
            type="checkbox"
            name="checked task"
            className="block mt-1"
            checked={data.completed}
            onChange={handleChecked}
          />
        </div>
        <div className="w-[300px]">
          <textarea
            className={`resize-none block w-full text-sm font-bold ${
              data.completed ? "line-through text-[#828282]" : "text-[#4F4F4F]"
            }`}
            value={data.title}
            placeholder="Type task title"
            onChange={(e) => handleTitleChange(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="flex items-center text-xs">
        <span className="text-[#EB5757] mr-3">
          { !!daysLeft ? daysLeft : "" }
        </span>
        <span className="text-[#4F4F4F] mr-3">
          { !!deadline ? deadline : "" }
        </span>
        <button
          className={`w-fit h-fit mr-3 ${
            expand ? "rotate-180" : null
          } transition-all duration-300`}
          onClick={() => expandBody(!expand)}
        >
          <img src={ExpandIcon} alt="expand taks" />
        </button>
        <div className="relative w-[22px] h-[22px]">
          <Menu>
            <li className="w-full py-[8px] px-[14px] border-b-2 border-[#BDBDBD] last-of-type:border-0">
              <button onClick={() => deleteClick(data.id)} className="text-sm text-[#EB5757]">
                {" "}
                Delete
              </button>
            </li>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Label;
