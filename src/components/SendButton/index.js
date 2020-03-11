import React from "react";

export const SendButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
