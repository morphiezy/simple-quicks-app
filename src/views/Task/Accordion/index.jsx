import { useState } from "react";
import Label from "./Label";
import Body from "./Body";

const Accordion = ({ header, body }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pb-[22px] mb-[22px] border-b border-[#828282] last-of-type:border-b-0">
      <div className="w-full h-auto overflow-hidden">
        <Label expand={open} setExpand={setOpen} />
        <Body open={open} />
      </div>
    </div>
  );
};

export default Accordion;
