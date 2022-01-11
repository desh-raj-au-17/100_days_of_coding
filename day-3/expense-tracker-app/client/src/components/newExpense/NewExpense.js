import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formShow, setFormShow] = useState(false);
  //cutom prop to pass data from child to parent.
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setFormShow(false);
  };
  // ====================================================

  const formContent = () => {
    setFormShow(true);
  };
  const stopShowFormContent = () => {
    setFormShow(false);
  };
  return (
    <div className="new-expense">
      {!formShow && <button onClick={formContent}>Add New Expenses</button>}
      {formShow && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopShowFormContent}
        />
      )}
    </div>
  );
};

export default NewExpense;
