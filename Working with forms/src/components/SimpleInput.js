import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ''; 

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
    if(event.target.value === ''){
      return;
    }
  }

  const inputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if(event.target.value === ''){
      return;
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if(!enteredNameIsValid){
      return;
    }
    
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputClasses = !enteredNameTouched? 'form-control': enteredNameIsValid? 'form-control': 'form-control invalid';
  return (
    <form onSubmit = {formSubmitHandler}>
      <div className= {nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange = {inputChangeHandler} onBlur = {inputBlurHandler} value = {enteredName} />
        {!enteredNameIsValid && enteredNameTouched && <p>Entered Name is invalid</p>}
      </div>
      <div className="form-actions">
        <button type = "submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
