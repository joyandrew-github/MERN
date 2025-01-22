const Balance = ({ transactions }) => {
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  
    return (
      <div>
        <h3>Your Balance</h3>
        <div>₹{total.toFixed(2)}</div>
      </div>
    );
  };
  
  export default Balance;