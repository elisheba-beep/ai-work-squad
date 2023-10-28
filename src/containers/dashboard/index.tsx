import { useState } from "react";
import "./dashboard.css";
import SidePanel from "./sidePanel";
import ChatArea from "./chatArea";
import Breadcrumb from "../../components/breadcrumb";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai';
import { useViewport } from "../../context/viewportContext";

export default function ChatBotScreen() {
  const { isMobile } = useViewport();

  const [department, setDepartment] = useState("Marketing");
  const [showSidePanel, setShowSidePanel] = useState(false)

  const getDepartment = (dept: string) => {
    setDepartment(dept);
  };
  return (
    <div className="dashboard_container">
      {/* breadcrumb */}
      <Breadcrumb getDepartment={getDepartment} />
      <div className="dashboard_body">
        {isMobile ? showSidePanel ? <SidePanel/> : <GiHamburgerMenu onClick={()=>setShowSidePanel(true)}/> : <SidePanel />}
       {!showSidePanel && <ChatArea department={department} />}
        {showSidePanel && <AiOutlineClose onClick={()=>setShowSidePanel(false)}/> }
      </div>
    </div>
  );
}
