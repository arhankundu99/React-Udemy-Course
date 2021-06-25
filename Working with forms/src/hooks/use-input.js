import { useReducer } from 'react';

const initalInputState = {
    input: '',
    inputIsValid: false,
    inputIsTouched: false
}
const inputReducer = (state, action) => {
    if(action.type === 'reset'){
        return initalInputState;
    }
    else if(action.type === 'inputChangeOrBlur'){
        return {
            input: action.val,
            inputIsValid: action.inputIsValid,
            inputIsTouched: true
        }
    }
    return initalInputState;
}
const useInput = (inputValidation) => {
    const [inputState, inputDispatch] = useReducer(inputReducer, initalInputState);

    const inputChangeOrBlurHandler = (event) => {
        inputDispatch(
            {type: 'inputChangeOrBlur', 
            inputIsValid: inputValidation(event.target.value), 
            val: event.target.value
        });
    }

    const resetInput = () => {
        inputDispatch({type: 'reset'});
    }
    const overallInputIsValid = !inputState.inputIsTouched || (inputState.inputIsTouched && inputState.inputIsValid);

    return {
        input: inputState.input, 
        inputChangeOrBlurHandler,
        overallInputIsValid,
        resetInput
    }

}
 export default useInput;