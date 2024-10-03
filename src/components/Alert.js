const Alert = ({ children, onClose }) => {
  return (
    <div className="alert alert-primary d-flex justify-content-between align-items-center">
      <span>{children}</span>
      <span>
        <button className="btn btn-close" onClick={onClose}></button>
      </span>
    </div>
  );
};

export default Alert;
