// import { useEffect, useState } from "react";
// import AddTransaction from "./components/AddTransaction";
// import TransactionList from "./components/TransactionList";
// import "./App.css";
// import Balance from "./components/Balance";
// import IncomeExpense from "./components/IncomeExpense";
// import axios from 'axios';

// function App() {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(()=>{
//     console.log("hi")
//     fetch("http://localhost:8000/api/expenses")
//         .then(res=>res.json())
//         .then(data=>setTransactions(data.data))
//   },[])

//   const onDeleteTransaction = (id) => {
//     setTransactions(transactions.filter((transaction) => transaction.id !== id));
//   };

//   const onAddTransaction = (data) => {
//     const modifiedData = { ...data, id: Math.random() * 1000 };
//     setTransactions([...transactions, modifiedData]);
//     console.log(transactions);
//   };

//   return (
//     <div className="container">
//      <h1>Expense Tracker</h1>
//       <Balance transactions={transactions}/>
//       <IncomeExpense transactions = {transactions} /> 
//       <TransactionList
//         transactions={transactions}
//         onDelete={onDeleteTransaction}
//       />
//       <AddTransaction onAdd={onAddTransaction} />
      
//     </div>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import axios from "axios";

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from the database when the component mounts
  useEffect(() => {
    axios
      .get("https://mern-backend-u2yl.onrender.com/api/expenses")
      .then((res) => setTransactions(res.data.data))
      .catch((err) => console.error("Error fetching transactions:", err));
  }, []);

  // Add a new transaction and store it in the database
  const onAddTransaction = (data) => {
    axios
      .post("https://mern-backend-u2yl.onrender.com/api/expenses", data)
      .then((res) => {
        setTransactions([...transactions, res.data]); // Add the newly created transaction to the state
      })
      .catch((err) => console.error("Error adding transaction:", err));
  };

const onDeleteTransaction = (id) => {
  console.log("Deleting transaction with ID:", id);
  axios
    .delete(`https://mern-backend-u2yl.onrender.com/api/expenses/${id}`)
    .then(() => {
      console.log("Transaction deleted successfully");
      setTransactions(transactions.filter((transaction) => transaction.id !== id)); // Update the state
    })
    .catch((err) => console.error("Error deleting transaction:", err));
};

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList
        transactions={transactions}
        onDelete={onDeleteTransaction}
      />
      <AddTransaction onAdd={onAddTransaction} />
    </div>
  );
}

export default App;





