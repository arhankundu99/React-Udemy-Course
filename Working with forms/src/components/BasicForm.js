import useInput from '../hooks/use-input';
const BasicForm = (props) => {

  const nameValidation = (name) => {
    return name.trim() !== '';
  }

  const emailValidation = (email) => {
    return email.trim() !== '' && email.includes("@");
  }

  const {
    input: firstName, 
    inputChangeOrBlurHandler: firstNameChangeOrBlurHandler, 
    overallInputIsValid: firstNameInputIsValid,
    resetInput: resetFirstName} = useInput(nameValidation);

  const {
    input: lastName, 
    inputChangeOrBlurHandler: lastNameChangeOrBlurHandler, 
    overallInputIsValid: lastNameInputIsValid,
    resetInput: resetLastName} = useInput(nameValidation);

  const {
    input: email, 
    inputChangeOrBlurHandler: emailChangeOrBlurHandler, 
    overallInputIsValid: emailInputIsValid,
    resetInput: resetEmail} = useInput(emailValidation);

  const formSubmitHandler = (event) => {
    event.preventDefault(); //to prevent sending of default http request to the server and reloading the page

    const overallFormIsValid = firstNameInputIsValid && lastNameInputIsValid && emailInputIsValid;
    
    if(!overallFormIsValid){
      console.log("Form input(s) are invalid");
      return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(email);

    resetFirstName();
    resetLastName();
    resetEmail();
    
  }

  return (
    <form onSubmit = {formSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='firstNameID'>First Name</label>
          <input type='text' id='firstNameID' value = {firstName} onChange = {firstNameChangeOrBlurHandler} onBlur = {firstNameChangeOrBlurHandler} />
          {!firstNameInputIsValid && <p>First Name is Invalid.</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='lastNameID'>Last Name</label>
          <input type='text' id='lastNameID' value = {lastName} onChange = {lastNameChangeOrBlurHandler} onBlur = {lastNameChangeOrBlurHandler} />
          {!lastNameInputIsValid && <p>Last Name is Invalid.</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='emailAddressID'>E-Mail Address</label>
        <input type='email' id='emailAddressID' value = {email} onChange = {emailChangeOrBlurHandler} onBlur = {emailChangeOrBlurHandler} />
        {!emailInputIsValid && <p>Email is Invalid.</p>}
      </div>
      <div className='form-actions'>
        <button type = "submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
