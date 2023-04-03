import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import ThunderIcon from "../../assets/icons/thunder_24px.svg"

const FloatingButton = ({ floatingItems, activeTab, setActiveTab, itemClick, resetOrder }) => {
    
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const handleBackdropClick = () => {
    setOpen(false);
    setActiveTab(null);
    resetOrder();
    navigate('/')
  }

  return (
    <div className="flex flex-row-reverse items-end absolute bottom-[27px] right-[34px]">
      { 
        !activeTab &&
        <Button
          icon={ThunderIcon}
          clicked={()=> setOpen(!open)}
          size='w-[68px] h-[68px]'
          styles='bg-[#2F80ED]'
        />
      }
      {
        open && floatingItems.map((item,i) => {

          const active = activeTab === item.name;
          const bg = active ? item.color : 'bg-white';

          return (
            <Button 
              key={item.id}
              icon={active ? item.lightIcon : item.icon}
              value={ !activeTab && item.name}
              clicked={()=> itemClick(i,item.name)}
              size='w-[60px] h-[60px]'
              styles={bg}
              showBackDrop={active}
              backdropClick={handleBackdropClick}
            />
          )

        })
      }
    </div>
  );
};

export default FloatingButton;