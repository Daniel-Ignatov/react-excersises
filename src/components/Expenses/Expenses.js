import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';
import ExpensesList from "./ExpensesList";

function Expenses(props) {

    const [filter, SetFilter] = useState('2020');
    const filterChangeHandler = selectedYear => {
        SetFilter(selectedYear);

    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filter;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filter} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;


