import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = props => (
  <div>
    {props.expenses.length === 0 ? null : props.expenses.length === 1 ? (
      <p>
        Viewing {props.expenses.length} expense totalling{' '}
        {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}
      </p>
    ) : (
      <p>
        Viewing {props.expenses.length} expenses totalling{' '}
        {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}
      </p>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
