import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import { useState } from "react";

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Grill Burger',
    amount: 12.99,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Soft Ice Cream', amount: 3.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'new',
    amount: 5.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Ice Slurry',
    amount: 2.49,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  
  const expenseDataHandler = expenseData => {
   setExpenses(prevExpenses =>{
     return [expenseData, ...prevExpenses]
   });
  }
  
  return (
    <li>
      <NewExpense onAddExpense={expenseDataHandler} />
      <Expenses items={expenses} />
    </li>
  );
}

export default App;
