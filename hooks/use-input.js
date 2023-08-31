import { useState } from "react"

const useInput = (validateValue) =>
{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);

    const inputChange = (event) =>
    {
        setEnteredValue(event.target.value);
    }

    const inputBlur = () =>
    {
        setIsTouched(true);
    }

    const reset = () =>
    {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        inputChange,
        inputBlur,
        reset
    }
}

export default useInput;