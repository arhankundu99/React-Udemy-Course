import './ExpenseForm.css'
import React, {useState} from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault(); //this will not allow the browser to refresh whenever we submit the form
        const newExpense = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        };
        props.onSaveExpenseData(newExpense);

        //delete the entered values when the form is submitted
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const addNewExpenseHandler = () => {
        setIsEditing(true);
    }

    const cancelHandler = () => {
        setIsEditing(false);
    }

    if(!isEditing){
        return <button type = "button" className = "new-expense__actions" onClick = {addNewExpenseHandler}>Add New Expense</button>
    } 
    else return (
            <form onSubmit = {submitHandler}>
                <div className = 'new-expense__controls'>
                    <div className = 'new-expense__control'>
                        <label htmlFor = 'newExpenseTitle'>New Expense</label>
                        <input type = 'text' id = 'newExpenseTitle' onChange = {titleChangeHandler} value = {enteredTitle}></input>
                    </div>
                    <div className = 'new-expense__control'>
                        <label htmlFor = 'newExpenseItemDate'>New Expense Date</label>
                        <input type = 'date' min = "2020-01-01" max = '2022-12-31' id = 'newExpenseItemDate' value = {enteredDate} onChange = {dateChangeHandler} ></input>
                    </div>
                        <div className = 'new-expense__control'>
                            <label htmlFor = 'newExpenseItemAmount'>New Expense Amount</label>
                            <input type = 'number' min = "1" step = "1" id = 'newExpenseItemsAmount' value = {enteredAmount} onChange = {amountChangeHandler}></input>
                        </div>
                    <div className = 'new-expense__actions'>
                        <button type = "submit">Add Expense</button>
                        <button type = "button" onClick = {cancelHandler}>Cancel</button>
                    </div>
                </div>
            </form>
    );
}
export default ExpenseForm;