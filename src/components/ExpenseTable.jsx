import React from 'react';

function ExpensesTable({ expenses, onDeleteExpense }) {
  return (
    <div className="expenses-table-container">
      <table className="expenses-table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>
                <button onClick={() => onDeleteExpense(index)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesTable;