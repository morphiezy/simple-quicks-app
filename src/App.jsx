import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"

import BaseLayout from "./layout/BaseLayout";
import AppLayout from "./layout/AppLayout";
import Router from "./router";
import { FloatingButton } from "./components";
import { Chat, Task } from "./views";

import QuestionIcon from "./assets/icons/question_answer_24px.svg";
import LightQuestionIcon from "./assets/icons/white_question_answer_24px.svg";
import ReaderIcon from "./assets/icons/chrome_reader_mode_24px.svg";
import LightReaderIcon from "./assets/icons/white_chrome_reader_mode_24px.svg";
import { useEffect } from "react";


function App() {

  const [activeTab, setActiveTab] = useState(null);
  const [floatingItems, setFloatingItems] = useState([
    {
      id: 1,
      name: "Inbox",
      color: "bg-[#8885FF]",
      icon: QuestionIcon,
      lightIcon: LightQuestionIcon,
    },
    {
      id: 2,
      name: "Task",
      color: "bg-[#F8B76B]",
      icon: ReaderIcon,
      lightIcon: LightReaderIcon,
    },
  ]);

  const navigate = useNavigate();
  const location = useLocation();

  const updateItemOrder = (index, name) => {
    const currentOrder = [...floatingItems];
    const selectedItem = currentOrder.splice(index, 1);
    currentOrder.unshift(...selectedItem);
    setFloatingItems(currentOrder);
    setActiveTab(name);
    navigate(`/${name.toLowerCase()}`);
  };

  const resetOrder = () => {
    const currentOrder = [...floatingItems].sort((a, b) => a.id - b.id);
    setFloatingItems(currentOrder);
  };

  const view = activeTab === "Inbox" ? <Chat /> : activeTab === "Task" ? <Task /> : null;

  useEffect(()=>{
    if(location.pathname !== "/" && !activeTab) navigate('/');
    if(location.pathname === "/") setActiveTab(null);
  },[location.pathname])


  return (
    <BaseLayout>
      {
        view && (
          <AppLayout>
            <Router />
          </AppLayout>
        )
      }
      <FloatingButton
        activeTab={activeTab}
        floatingItems={floatingItems}
        setActiveTab={setActiveTab}
        itemClick={updateItemOrder}
        resetOrder={resetOrder}
      />
    </BaseLayout>
  );
}

export default App;
