import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [filtered, SetFiltered] = useState('2020');
    const filterChangeHandler = selectedYear => {
        SetFiltered(selectedYear);

    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filtered;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filtered} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;


