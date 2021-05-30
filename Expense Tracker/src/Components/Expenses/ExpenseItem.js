import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const deleteClickHandler = () => {
    props.onDeleteExpense({date: props.date, title: props.title, amount: props.amount});
  }
  return (
    <li>
      <Card className = "expense-item">
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className = "expense-item__description">
          <h2>{props.title}</h2>
          <div className = "expense-item__price">{props.amount}</div>
          <button onClick = {deleteClickHandler}>Delete</button>
        </div> 
      </Card>
    </li>
  );
}
export default ExpenseItem;
