import { useState } from "react";

const AddTransactions = (porps)=>{
    const {onAdd} = porps;

    const [title,setTitle] = useState("")
    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const [amount,setAmount] = useState();
    const onAmountChange = (event) =>{
        setAmount(event.target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        console.log(" Title: ",title," Amount: ",    +amount);
        onAdd({title,amount: +amount});
        setTitle=("");
        setAmount=("");

    }
    return(
        <div className="add-transaction">
            <h3>Add new transaction</h3>
           
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Enter text..."  value={title} onChange={onTitleChange} required/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" value={amount} onChange={onAmountChange} placeholder="Enter amount..." required/>
                </div>
                <button className="btn" type="submit">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransactions;