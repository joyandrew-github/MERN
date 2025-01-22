const IncomeExpense = ({transactions}) => {
   
    let income = 0;
    let expense = 0;
  
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount; 
      } else {
        expense += transactions[i].amount;
      }
    }
  
    return (
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">₹{income.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">₹{(expense < 0 ? -expense : expense).toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default IncomeExpense;

  