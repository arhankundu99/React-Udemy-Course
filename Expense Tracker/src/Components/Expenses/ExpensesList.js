import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props){
    const deleteExpenseHandler = (toBeDeletedExpense) => {
        props.onDeleteExpense(toBeDeletedExpense);
    }

    if(props.expenseList.length === 0){
        return <p className = "expenses-list__fallback">You have no current expense!</p>
    }
    else
    {
        const expensesContent = props.expenseList.map((expenseItem) => {return (
            <ExpenseItem 
                onDeleteExpense = {deleteExpenseHandler}
                key = {Math.random()}   //we add this key because when we do not add keys, 
                                        //react usually appends the item to the end of the array and then puts the element in its correct place and updates
                                        //the content of every other item which is not efficient. When we add a key, react knows where to add that item without disturbing
                                        //other elements
                date = {expenseItem.date} 
                title = {expenseItem.title} 
                amount = {expenseItem.amount}>
            </ExpenseItem>)});

        return <ul className = "expenses-list">{expensesContent}</ul>        
    }

}
export default ExpensesList;