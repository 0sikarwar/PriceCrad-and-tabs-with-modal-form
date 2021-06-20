const Tab = (props) => {
  return (
    <div
      className={`tab ${props.isActive ? "active" : ""}`}
      onClick={() => props.onChange(props.text)}
    >
      {props.text}
    </div>
  );
};

export default Tab;
