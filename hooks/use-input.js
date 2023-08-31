import { useState } from "react"

const useInput = () =>
{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

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