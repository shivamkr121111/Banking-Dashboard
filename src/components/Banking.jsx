import React, { useState } from "react";

export default function Banking() {
  const [current, setCurrent] = useState(100);
  const [deposit, setDeposit] = useState(0);
  const [showDepositInput, setShowDepositInput] = useState(false);
  const [withdrawal, setWithdrawal] = useState(0);
 const [showWithdrawInput, setShowWithdrawInput] = useState(false);

  const handleDepositClick = () => {
    setShowDepositInput(true);
  };

  const handleDepositChange = (e) => {
    setDeposit(Number(e.target.value));
  };

  const handleAddDeposit = () => {
    setCurrent((prev) => prev + deposit);
    setDeposit(0); // Reset deposit input after submission
    setShowDepositInput(false); // Hide input after deposit
  };

  const handleWithdrawClick = () => {
    setShowWithdrawInput(true);
  };

  const handleWithdrawChange = (e) => {
    setWithdrawal(Number(e.target.value));
  };

  const handleWithdraw = () => {
    setCurrent((prev) => prev - withdrawal);
    setWithdrawal(0); // Reset withdrawal input after submission
    setShowWithdrawInput(false); // Hide input after withdrawal
  }; 

  return (
    <>
      <div className="w-full">
        <img
          src="src/assets/SBI-New-Logo-PNG-HD.png"
          className="w-full h-24"
          alt="SBI logo"
        />
      </div>
      <div className="justify-between font-bold border-4">
        SBI Banking Dashboard
      </div>
      <div className="border-4 text-left">
        Current Balance: Rs {current}
      </div>
      <h1>My Current Balance is Rs {current}</h1>

      {/* Deposit Section */}
      <div className="border-4 text-left font-bold">
        Deposit Amount:{" "}
        <button className="bg-slate-700" onClick={handleDepositClick}>
          Deposit Button
        </button>
        {showDepositInput && (
          <div>
            <input
              type="number"
              value={deposit}
              onChange={handleDepositChange}
              placeholder="Enter deposit amount"
            />
            <button onClick={handleAddDeposit}>Submit Deposit</button>
          </div>
        )}
      </div>

      {/* Withdrawal Section */}
      <div className="border-4 text-left font-bold">
        Withdrawal Amount:{" "}
        <button onClick={handleWithdrawClick}>Withdrawal Button</button>
        {showWithdrawInput && (
          <div>
            <input
              type="number"
              value={withdrawal}
              onChange={handleWithdrawChange}
              placeholder="Enter withdrawal amount"
            />
            <button onClick={handleWithdraw}>Submit Withdrawal</button>
          </div>
        )}
      </div> 

      <div className="border-4 text-left">Contact Details: 8789775569</div>
    </>
  );
}
