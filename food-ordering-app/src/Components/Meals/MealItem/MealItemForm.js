import { useState, useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [quantityIsValid, setQuantityIsValid] = useState(true);
    const quantityRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();
        const quantity = quantityRef.current.value;
        const quantityNumber = parseInt(quantity);
        
        if(quantity.trim().length === 0 || quantityNumber < 1 || quantityNumber > 5){
            setQuantityIsValid(false);
            return;
        }
        props.onAddToCart(quantityNumber);
        setQuantityIsValid(true);
    }
    return (
        <form onSubmit = {submitFormHandler} className = {classes.form}>
            <Input label = "Amount" input = {{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} ref = {quantityRef}/>
            <button type = 'submit'>+ Add</button>
            {!quantityIsValid && <p>Please Enter Valid Amount (1-5)</p>}
        </form>
    )
}
export default MealItemForm;