import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const calculateBalance = (expenses) => {
    const income = expenses
      .filter((expense) => expense.amount > 0)
      .reduce((acc, expense) => acc + expense.amount, 0);
    const expense = expenses
      .filter((expense) => expense.amount < 0)
      .reduce((acc, expense) => acc + expense.amount, 0);
    return { income, expense, balance: income + expense };
  };

  // Add a new expense
  const addExpense = (expenseText, expenseAmount) => {
    const newExpense = {
      id: new Date().getTime(),
      text: expenseText,
      amount: parseFloat(expenseAmount),
    };

    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  // Delete an expense
  const deleteExpense = (id) => {
    console.log("Deleting expense with ID:", id);
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== id
      );
      console.log("Updated Expenses:", updatedExpenses); // Log updated expenses
      return updatedExpenses;
    });
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm onAddExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
