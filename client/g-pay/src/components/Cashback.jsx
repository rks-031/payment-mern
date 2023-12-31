import React from "react";
import '../App.css'

const Cashback = ({ transferAmount }) => {
  const calculateCashback = () => {
    // Your cashback calculation logic here
    if (transferAmount % 500 === 0) {
      return "Better luck next time!";
    } else if (transferAmount < 1000) {
      return "Congratulations! You've got a 5% cashback!";
    } else {
      return "Congratulations! You've got a 2% cashback!";
    }
  };

  return (
    <div>
    <hr/>
      <h3 className="font-weight-bold mt-2">Cashback Message</h3>
      <p>{calculateCashback()}</p>
    </div>
  );
};

export default Cashback;
