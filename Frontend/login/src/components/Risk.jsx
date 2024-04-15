import ChatbotPage from "./Chatbot";
import { Chart1 } from "./Chart";

import "../App.css";

const Risk = () => {
  return (
    <div className="risk-main-container">
      <div className="chatbot">
        <ChatbotPage />
      </div>
      <div className="graphs">
        <Chart1 />
        <Chart1 />
      </div>
    </div>
  );
};
export default Risk;
