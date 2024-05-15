import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const visitorDetails = location.state?.visitorDetails;

  return (
    <div>
      <h2>Visitor Details:</h2>
      {visitorDetails ? (
        <>
          <p>Name: {visitorDetails.visitor}</p>
          <p>ID Number: {visitorDetails.id_number}</p>
          {/* Include other visitor details here */}
        </>
      ) : (
        <p>No visitor details found.</p>
      )}
    </div>
  );
};

export default ConfirmationPage;
