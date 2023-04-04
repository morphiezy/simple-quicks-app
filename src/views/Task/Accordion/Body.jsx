import { useState } from "react";
import CalendarIcon from "../../../assets/icons/calendar_today_24px.svg";
import date from "../../../utils/date";
import { useEffect } from "react";

const Body = ({ open, openCalendar, data, updateTask }) => {

  const [deadline, setDeadline] = useState(date.task.deadline(data.deadline));

  const handleDescriptionChange = (value) => {
    updateTask(data.id,'description',value)
  }

  const updateDeadline = () => {
    const [date,month,year] = deadline.split('/');
    return updateTask(data.id, "deadline", new Date(`${year}-${month}-${date}`))
  }

  useEffect(()=>{
    setDeadline(date.task.deadline(data.deadline))
  },[data])

  return (
    <div
      className={`w-full ml-[35px] ${
        open ? "min-h-auto pb-[22px]" : "h-0 pb-0"
      } transition-all duration-300`}
    >
      <div className="mb-4">
        <div className="flex items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.99181 0.666626C4.39181 0.666626 0.666809 4.39996 0.666809 8.99996C0.666809 13.6 4.39181 17.3333 8.99181 17.3333C13.6001 17.3333 17.3335 13.6 17.3335 8.99996C17.3335 4.39996 13.6001 0.666626 8.99181 0.666626ZM9.0003 15.6666C5.31697 15.6666 2.33364 12.6833 2.33364 8.99996C2.33364 5.31662 5.31697 2.33329 9.0003 2.33329C12.6836 2.33329 15.667 5.31662 15.667 8.99996C15.667 12.6833 12.6836 15.6666 9.0003 15.6666ZM8.16681 4.83329H9.41681V9.20829L13.1668 11.4333L12.5418 12.4583L8.16681 9.83329V4.83329Z"
              fill={data.deadline ? "#2F80ED" : "#4F4F4F"}
            />
          </svg>
          <div className="flex items-center justify-between w-[190px] h-[40px] px-[14px] py-3 ml-4 rounded-[5px] border border-[#828282] cursor-pointer relative z-40">
            <input
              type="text"
              placeholder="Set Date"
              value={deadline}
              className="block max-w-[85px] text-sm text-[#4F4F4F] outline-0"
              onChange={(e)=> setDeadline(e.target.value)}
              onBlur={updateDeadline}
            />
            <img src={CalendarIcon} alt="calendar" onClick={openCalendar} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-start">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z"
              fill={data.description.length ? "#2F80ED" : "#4F4F4F"}
            />
          </svg>
            <textarea
              className="w-[470px] h-fit ml-5 focus:border border-[#828282] relative z-30 block text-sm text-[#4F4F4F] outline-0 rounded-[5px] focus:p-1 focus:resize-y resize-none"
              placeholder="No Description"
              defaultValue={data.description}
              onChange={(e)=> handleDescriptionChange(e.target.value)}
            ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Body;
