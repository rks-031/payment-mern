import React from "react";
import '../App.css'

const TransactionHistory = ({ userInfo }) => {
  return (
    <div>
      {/* <h2>Transaction History</h2>
      {userInfo ? (
        <div>
          <p>Phone Number: {userInfo.phoneNum}</p>
          <p>Available Amount: {userInfo.availableAmount}</p>
          {userInfo.transactions ? (
            <div>
              <h3>Transactions:</h3>
              <ul>
                {userInfo.transactions.map((transaction) => (
                  <li key={transaction.transactionId}>
                    {`From: ${transaction.from} | To: ${transaction.to} | Amount: ${transaction.amount}`}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No transactions available.</p>
          )}
        </div>
      ) : (
        <p>No user information available.</p>
      )} */}
    </div>
  );
};

export default TransactionHistory;
