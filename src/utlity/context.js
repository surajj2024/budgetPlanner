import { createContext } from 'react';

export const BudgetContext = createContext()

export const initialState = {
    budget: 2000,
    expenses: [],
}
export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }
        default:
            return state
    }
}
