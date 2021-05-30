import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import React from 'react';

const dummyList = [{
  date: new Date(2021, 12, 1),
  title: "Shampoo",
  amount: 549
},
{
  date: new Date(2021, 11, 14),
  title: "Narasimha Karumanchi Algo and DS",
  amount: 345
}]
function App() {
  const [expenseList, setExpenseList] = React.useState(dummyList);

  const addExpenseHandler = (item) => {
    setExpenseList((prevState) => {
      return [...prevState, item];
    });
  }

  const deleteExpenseHandler = (toBeDeletedExpense) => {
    setExpenseList((prevState) => {
      let newExpensesList = []
      for(let i = 0; i < prevState.length; i++){
        if(isEqual(prevState[i], toBeDeletedExpense))continue;
        newExpensesList.push(prevState[i]);
      }
      return newExpensesList;
    });
  }

  const isEqual = (expenseItem1, expenseItem2) => {
    return expenseItem1.title === expenseItem2.title && 
           expenseItem1.amount === expenseItem2.amount && 
           expenseItem1.date.toLocaleString() === expenseItem2.date.toLocaleString();
  }

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses onDeleteExpense = {deleteExpenseHandler} expenseList = {expenseList}/>
    </div>
  );
}

export default App;
