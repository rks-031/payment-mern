import React, { useState } from "react";
import axios from "axios";
import Cashback from "./Cashback";
import '../App.css'
import { useEffect } from "react";

function Transfer() {
  const [recipientId, setRecipientId] = useState("");
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [transferResponse, setTransferResponse] = useState();
  const [showCashback, setShowCashback] = useState(false);

  const handleTransfer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/users/transfer",
        {
          recipientId,
          recipientPhoneNumber,
          transferAmount,
        }
      );

      console.log("Transfer response:", response.data);
      // Add any additional logic or UI updates based on the transfer response
      setTransferResponse(response.data);

      // Clear input fields after successful transfer
      setRecipientId("");
      setRecipientPhoneNumber("");
      setTransferAmount("");
      setShowCashback(true);
    } catch (error) {
      console.error("Error during transfer:", error);
      setTransferResponse({
        error: "An error occurred during transfer.",
      });
      // Optionally, you may want to set showCashback to false in case of an error
    setShowCashback(false);
    }
  };

  return (
    <div>
      <h2 className="font-weight-bold">Transfer</h2>
      <div>
        <label className="pr-4">Sender ID:</label>
        <input
          type="text"
          value={recipientId}
          onChange={(e) => setRecipientId(e.target.value)}
          className="mt-2 mb-2"
        />
      </div>
      <div>
        <label className="pr-4">Recipient Phone Number:</label>
        <input
          type="text"
          value={recipientPhoneNumber}
          onChange={(e) => setRecipientPhoneNumber(e.target.value)}
          className="mt-2 mb-2"
        />
      </div>
      <div>
        <label className="pr-4">Transfer Amount:</label>
        <input
          type="text"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
          className="mt-2 mb-2"
        />
      </div>
      <button onClick={handleTransfer} className="m-3 btn btn-primary">Transfer</button>

      {transferResponse && (
        <div>
        <hr/>
          <h3 className="m-3 font-weight-bold">Transfer Response</h3>
          {transferResponse.error ? (
            <p style={{ color: "red" }}>{transferResponse.error}</p>
          ) : (
            <div>
              <div style={{ color: "green" }}>
                <p> Recipient Number: {transferResponse.number}</p>
                <p>Sender Id: {transferResponse.transferId}</p>
                <p>Amount left : {transferResponse.leftAmount}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Conditionally render the Cashback component */}
      {showCashback && <Cashback transferAmount={transferAmount} />}
    </div>
  );
}

export default Transfer;
