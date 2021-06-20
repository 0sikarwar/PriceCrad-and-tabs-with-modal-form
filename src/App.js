import CardContainer from "./CardContainer";
import "./styles.css";
import "./main.scss";
import { pricingDataAll } from "./data";
import TabsContainer from "./TabsContainer";
import { useEffect, useState } from "react";
import NoInternet from "./NoInternet";

export default function App() {
  const [activeTab, setActiveTab] = useState("$300K-$400K");
  const [isOnline, setIsOnlineFlag] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOnlineFlag(false);
    });
    window.addEventListener("online", () => {
      setIsOnlineFlag(true);
    });
    setActiveTab(window.localStorage.getItem("activeTab") || activeTab);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  return (
    <div className="App">
      {isOnline ? (
        <>
          <TabsContainer
            tabList={Object.keys(pricingDataAll)}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <CardContainer priceList={pricingDataAll[activeTab]} />
        </>
      ) : (
        <NoInternet />
      )}
    </div>
  );
}
