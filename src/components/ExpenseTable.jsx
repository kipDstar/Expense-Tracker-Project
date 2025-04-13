import React from 'react';

function ExpenseTable({ expenses }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, index) => (
                    <tr key={index}>
                        <td>{expense.description}</td>
                        <td>{expense.category}</td>
                        <td>${expense.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ExpenseTable;