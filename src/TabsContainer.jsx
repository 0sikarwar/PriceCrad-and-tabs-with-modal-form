import Tab from "./components/Tab";

const TabsContainer = (props) => {
  return (
    <div className="tab-container">
      {props.tabList.map((name) => (
        <Tab
          key={name}
          text={name}
          isActive={name === props.activeTab}
          onChange={props.setActiveTab}
        />
      ))}
    </div>
  );
};

export default TabsContainer;
