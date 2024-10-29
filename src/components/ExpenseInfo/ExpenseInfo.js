import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = ({ expenses }) => {
  // Calculate income, expense, and balance
  const income = expenses
    .filter((expense) => expense.amount > 0)
    .reduce((acc, expense) => acc + expense.amount, 0);

  const expense = expenses
    .filter((expense) => expense.amount < 0)
    .reduce((acc, expense) => acc + expense.amount, 0);

  const balance = income + expense;

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${balance.toFixed(2)}</h1> {/* Grand total (balance) */}
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${income.toFixed(2)} {/* Total income */}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${Math.abs(expense).toFixed(2)}{" "}
            {/* Total expense (negative values) */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
