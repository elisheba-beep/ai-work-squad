import {useState, useEffect} from 'react'
import './historylist.css'
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

const history = [
    {
      prompt: "What is Marketing",
    },
    {
      prompt: "Give me a list of marketing agencies near me in 5km",
    },
  ];

export default function HistoryList() {
    const [isShown, setIsShown] = useState(history.map(() => false));
    const [chatHistory, setChatHistory] = useState([""]);
  
    const showMore = (index: number) => {
      const newShown = history.map((show, i) => i === index);
      setIsShown(newShown);
    };
    const hideMore = (index: number) => {
      const newShown = history.map((show, i) => false);
      setIsShown(newShown);
    };
  
    useEffect(() => {
      setChatHistory(history.map((history) => history.prompt));
    }, []);
  return (
    <div className="history_list">
    <div className="history_tile">
      <div className="history_tile_left">
        <HiOutlineChatBubbleBottomCenter />
        <p className="history_tile_text">New Chat</p>
      </div>
      <div className="history_tile_right">
        <BiEditAlt />
        <RiDeleteBin2Line />
      </div>
    </div>
    {chatHistory.map((history, index) => {
      return (
        <div key={index} className="history_tile">
          <div className="history_tile_left">
            <HiOutlineChatBubbleBottomCenter />
            <p
              className="history_tile_text"
              onMouseEnter={() => showMore(index)}
              onMouseLeave={() => hideMore(index)}
            >
              {history}
            </p>
          </div>
          <div className="history_tile_right">
            <BiEditAlt />
            <RiDeleteBin2Line />
          </div>
          {isShown[index] && (
            <div className="history_tile_text_full">
              <p className="history_tile_text_full_arrow">^</p>
              <div className="history_tile_text_full_container">
                {history}
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>


  )
}
