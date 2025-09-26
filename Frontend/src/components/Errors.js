import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Errors = ({ message }) => {
  const navigate = useNavigate();
  const onBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 p-4">
      <div className="text-center">
        <div className="d-flex justify-content-center">
          <FiAlertCircle className="text-danger mb-4" size={48} />
        </div>
        <h2 className="fw-bold text-dark mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-muted mb-4 fw-semibold">{message}</p>
        <div className="d-flex justify-content-center">
          <button
            onClick={onBackHandler}
            className="btn btn-danger"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Errors;
