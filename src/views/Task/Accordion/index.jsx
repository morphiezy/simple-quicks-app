import { useState } from "react";
import Label from "./Label";
import Body from "./Body";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";

const Accordion = ({ taskData, updateTask, deleteTask }) => {

  const [calendar, setCalendar] = useState();
  const [isAccordionExpand, setAccordionExpand] = useState(false);
  const [isCalendarOpen, setCalenderOpen] = useState(false);

  const expandBodyClick = () => {
    setAccordionExpand(!isAccordionExpand);
    if (!isAccordionExpand) setCalenderOpen(false);
    if (isAccordionExpand) setCalenderOpen(false);
  };

  const openCalendarClick = () => {
    setCalenderOpen(!isCalendarOpen);
  };

  const handleCalendarChange = (value) => {
    setCalendar(value);
    setCalenderOpen(false);
    updateTask(taskData.id, "deadline", value);
  };

  useEffect(()=>{
    const validDate = !isNaN(new Date(taskData.deadline)) ? taskData.deadline : new Date();
    setCalendar(validDate)
  },[taskData])

  const calenderStyle = isCalendarOpen
    ? "opacity-1 visible left-[190px]"
    : "opacity-0 invisible left-[150px]";

  return (
    <div className="relative">
      <div
        className={`mb-[22px] border-b border-[#828282] last-of-type:border-b-0`}
      >
        <div className="w-full h-auto overflow-hidden">
          <Label
            expand={isAccordionExpand}
            expandBody={expandBodyClick}
            updateTask={updateTask}
            data={taskData}
            deleteClick={deleteTask}
          />
          <Body
            open={isAccordionExpand}
            openCalendar={openCalendarClick}
            data={taskData}
            updateTask={updateTask}
          />
        </div>
      </div>
      <div
        className={`absolute top-[50px] z-30 transition-all duration-200 ${calenderStyle}`}
      >
        {isCalendarOpen && (
          <Calendar
            onChange={handleCalendarChange}
            value={calendar}
            className="scale-75 p-5 rounded-[5px]"
            prev2Label={null}
            next2Label={null}
            minDate={new Date()}
          />
        )}
      </div>
    </div>
  );
};

export default Accordion;
