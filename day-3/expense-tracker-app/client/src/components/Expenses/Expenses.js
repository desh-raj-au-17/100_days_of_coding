import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesLists from "./ExpensesLists";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState(2022);
  const filterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterHandler} />
        <ExpenseChart expenses={filterdExpenses}></ExpenseChart>
        <ExpensesLists items={filterdExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
