import "./sidePanel.css";
import { GrHistory } from "react-icons/gr";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { TbBookmarkEdit } from "react-icons/tb";
import { PiShieldCheck } from "react-icons/pi";
import NewChatBox from "../../../components/newchatbox";
import HistoryList from "../../../components/historylist";

const bottom_info = [
  {
    icon: <MdOutlinePersonAddAlt />,
    text: "Upgrade to Plus",
  },
  {
    icon: <BsBoxArrowUpRight />,
    text: "Updates & FAQ",
  },
  {
    icon: <TbBookmarkEdit />,
    text: "Terms & Conditions",
  },
  {
    icon: <PiShieldCheck />,
    text: "Privacy Policy Page",
  },
];

export default function SidePanel() {
  return (
    <div className="side_panel_container">
      <div className="side_panel_top">
        <NewChatBox />
        <div className="history">
          <GrHistory width={20} height={20} />
          <p>History</p>
        </div>

        <HistoryList />
      </div>

      <div className="side_panel_bottom">
        {bottom_info.map((info, index) => {
          return (
            <div className="bottom_info_tile" key={index}>
              {info.icon}
              <p>{info.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
