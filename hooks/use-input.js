import { useState } from "react"

const useInput = () =>
{
    const [enteredValue, setEnteredValue] = useState('');
    const [selectedType, setSelectedType] = useState('planets');
    const [isTouched, setIsTouched] = useState(false);

    const inputChange = (event) =>
    {
        setEnteredValue(event.target.value);
    }

    const inputBlur = () =>
    {
        setIsTouched(true);
    }
    
    const typeInputChange = (event) =>
    {
        setSelectedType(event.target.value);
    }

    const reset = () =>
    {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        inputValue: selectedType,
        inputChange,
        inputBlur,
        typeInputChange,
        reset
    }
}

export default useInput;