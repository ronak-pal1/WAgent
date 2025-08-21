import { useState } from "react";
import chatBG from "../assets/chat-bg.png";
import ChatPreviewWindow from "../components/ChatPreviewWindow";
import LogScreen from "../components/LogScreen";
import IntegrationScreen from "../components/IntegrationScreen";
import WorkflowScreen from "../components/WorkflowScreen";

const TabScreen = ({ activeTab }: { activeTab: string }) => {
  if (activeTab === "logs") return <LogScreen />;
  else if (activeTab === "integrations") return <IntegrationScreen />;
  else if (activeTab === "workflows") return <WorkflowScreen />;
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<
    "logs" | "integrations" | "workflows"
  >("logs");

  return (
    <div className="w-full h-full flex flex-1 bg-neutral-100">
      <div className="flex-[0.5] h-full border-r border-neutral-200">
        <div className="flex flex-1 flex-col w-full h-full">
          <div className="flex flex-[0.08] w-full">
            <div
              onClick={() => {
                setActiveTab("logs");
              }}
              className={`w-full border-b border-neutral-200 text-center py-3 border-r border-r-neutral-200 font-light flex items-center justify-center cursor-pointer ${
                activeTab === "logs" ? "bg-green-200" : ""
              }`}
            >
              <p>Logs</p>
            </div>
            <div
              onClick={() => {
                setActiveTab("integrations");
              }}
              className={`w-full border-b border-neutral-200 text-center py-3 font-light flex items-center justify-center border-r border-r-neutral-200 cursor-pointer ${
                activeTab === "integrations" ? "bg-green-200" : ""
              }`}
            >
              <p>Integrations</p>
            </div>

            <div
              onClick={() => {
                setActiveTab("workflows");
              }}
              className={`w-full border-b border-neutral-200 text-center py-3 font-light flex items-center justify-center cursor-pointer ${
                activeTab === "workflows" ? "bg-green-200" : ""
              }`}
            >
              <p>Workflows</p>
            </div>
          </div>

          <TabScreen activeTab={activeTab} />
        </div>
      </div>

      <div
        className="flex-[0.5] h-full w-full flex flex-col relative"
        style={{
          backgroundImage: `url(${chatBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-1 w-full h-full flex-col z-10">
          <div className="flex flex-[0.08] w-full h-full bg-white px-4 py-1">
            <div className="flex items-center justify-between w-full h-full">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center border border-green-600"></div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Ronak Paul</p>
                  <p className="text-gray-500 text-xs">+91 1234567890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[0.85] w-full h-full">
            <ChatPreviewWindow />
          </div>
          <div className="flex flex-[0.07] w-full h-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
