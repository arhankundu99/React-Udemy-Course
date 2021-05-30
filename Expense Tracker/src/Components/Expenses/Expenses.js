import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';


function Expenses(props){
    const deleteExpenseHandler = (toBeDeletedExpense) => {
        props.onDeleteExpense(toBeDeletedExpense);
    }

    let maxValue = 0, amountArr = [];

    for(let i = 0; i < 12; i++)amountArr.push(0);

    for(let i = 0; i < props.expenseList.length; i++){
        maxValue += parseInt(props.expenseList[i].amount);
        amountArr[props.expenseList[i].date.getMonth()] += parseInt(props.expenseList[i].amount);
    }
    return (
        <div>
            <Card className = 'expenses'>
                <ExpensesChart max = {maxValue} amountArr = {amountArr}/>
                <ExpensesList onDeleteExpense = {deleteExpenseHandler} expenseList = {props.expenseList}/>
            </Card>
        </div>
    )
}
export default Expenses;