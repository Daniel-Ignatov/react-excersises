import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
    const [expand, setExpand] = useState(false);

    const onFormSaveHandler = (formData) =>{    
    const formDataKeyd = {
        ...formData,
        id: Math.random().toString()
    };
    props.onAddExpense(formDataKeyd)
        setExpand(false)
    };
    
    const expandFormHandler = () =>{
        setExpand(true);
    };

    const shrinkFormHandler = () =>{
        setExpand(false);
    }

    return (<div className='new-expense'> 
    {!expand && <button onClick={expandFormHandler}> Add New</button>}
    {expand && <ExpenseForm onFormSave={onFormSaveHandler} onCancel={shrinkFormHandler}/>}
    </div>);
}

export default NewExpense;