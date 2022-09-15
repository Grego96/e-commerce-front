import React from "react";

const EmailSection = () => {
  return (
    <div className="email-container">
      <h3>Don't miss out.</h3>
      <input type="email" name="email" placeholder="Your email" className="email" />
      <p>Sign up to get the latest on new releases and more.</p>
    </div>
  );
};

export default EmailSection;
