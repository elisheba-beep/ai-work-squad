import { useState } from "react";
import "./chatarea.css";
import { GoPencil } from "react-icons/go";
import { PiSealQuestion, PiChatsLight, PiEnvelopeSimple } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";
import { FiCopy } from "react-icons/fi";
import { AiOutlineExport } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
import { useViewport } from "../../../context/viewportContext";

interface chatAreaProps {
  department: string;
}

export default function ChatArea({ department }: chatAreaProps) {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState(
    "I'm Nithin, CEO of an IT startup company in India"
  );

  const { isMobile } = useViewport();
  return (
    <div className="chat_area_container">
      {/* introduce yourself */}
      <div className="introduce_yourself_box">
        <h3>Introduce yourself to AIWorkSquad</h3>
        <div className="user_info">
          <input
            placeholder=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="user_info_input"
            disabled={disabled}
          />
          <GoPencil
            className="edit_user_info"
            onClick={() => setDisabled(!disabled)}
          />
        </div>
      </div>

      {/* chat */}
      <div className="chat_container">
        <div className="user_chat_rectangle">
          <p>What is marketing</p>
          <PiSealQuestion className="question_icon" />
        </div>
        <div className="ai_chat_rectangle">
          <div className="ai_chat_rectangle_top">
            <PiChatsLight className="chat_icon" />
            <p>
              Marketing refers to the process of promoting and selling products
              or services to customers. It invoives researching customer needs
              and wants,developing products and services that meet those
              needs,pricing products and sorvices appropriately.creating
              markoting materials to promote products and services,and
              distributing those materials through various channels to reach
              potential customers.The ultimate goal of marketing is to generate
              interest and increase sales for a business or organization.
            </p>
          </div>
          
          <div className="ai_chat_rectangle_bottom_row">
            <FiCopy className="ai_chat_rectangle_bottom_icon" />
            <AiOutlineExport className="ai_chat_rectangle_bottom_icon" />
            <GrDocumentDownload className="ai_chat_rectangle_bottom_icon" />
            <PiEnvelopeSimple className="ai_chat_rectangle_bottom_icon" />
          </div>
        </div>
        <div className="user_chat_rectangle">
            <p>
              Give me a list of top 5 digital marketing agencies near me who
              offers services like social media marketing, content marketing and
              influencer marketing
            </p>
            <PiSealQuestion className="question_icon" />
          </div>
      </div>

      <div>
        {/* enter a query */}
        <div className="query_input_container">
          <div className="query_input_left">
            <PiSealQuestion className="question_icon" />
            <input
              placeholder={`Enter your ${department.toLowerCase()} query here...`}
              className="query_input_box"
            />
          </div>
          <VscSend className="send_icon" />
        </div>

        {/* type your next question */}
        <p className="next_question_text">
          Type your next question above or select one from the related questions
          section
        </p>
      </div>
    </div>
  );
}
