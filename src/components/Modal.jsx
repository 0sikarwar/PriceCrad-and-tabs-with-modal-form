const Modal = (props) => {
  const { heading, onClose, children } = props;

  return (
    <div className="screen">
      <div className="modal">
        {heading && <h2>{heading}</h2>}
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
