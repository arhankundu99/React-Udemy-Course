import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props){
    const saveExpenseDataHandler = expense => {
        props.onAddExpense(expense);
    }
    return (
        <div className = "new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;