import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {expenses.map((expense, index) => (
          <Transaction
            key={expense.id}
            expense={expense}
            onDeleteExpense={onDeleteExpense} // Pass down the delete function
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;