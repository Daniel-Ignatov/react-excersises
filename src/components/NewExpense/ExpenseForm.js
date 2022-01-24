import { useState } from 'react/cjs/react.development';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmmount, setEnteredAmmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput]= useState({
    //         setEnteredTitle: '',
    //         enteredAmmount: '',
    //         enteredDate: ''
    //     });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };
    const ammountChangeHandler = (event) => {
        setEnteredAmmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const resetForm = () => {
        setEnteredDate('');
        setEnteredAmmount('');
        setEnteredTitle('');
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const exprenseData = {
            title: enteredTitle,
            amount: enteredAmmount,
            date: new Date(enteredDate)
        }
        props.onFormSave(exprenseData);
        resetForm();
    }

    return <form onSubmit={submitHandler}>
        <div className='new_expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input value={enteredAmmount} onChange={ammountChangeHandler} type='number' min='0.01' step='0.01'></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input value={enteredDate} onChange={dateChangeHandler} type='date' min="2019-01-01" step='2022-12-31'></input>
            </div>
            <div className='new_expense__actions'>
                <button type='submit'>Add</button>
                <button type="reset" onClick={resetForm}>Reset</button>
                <button type="button" onClick={props.onCancel}> Cancel</button>
            </div>

        </div>

    </form>;
};

export default ExpenseForm;