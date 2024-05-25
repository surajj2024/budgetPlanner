import { useReducer, useEffect } from "react"
import AddExpenses from "./components/AddExpenses.jsx"
import ShowExpenses from "./components/ShowExpenses.jsx"
import {initialState, reducer, BudgetContext} from "./utlity/context.js"

function App() {
  const [state, dispatch] = useReducer(reducer,JSON.parse(localStorage.getItem("BudgetState")) || initialState)

  useEffect(() => {
    localStorage.setItem("BudgetState", JSON.stringify(state))
  }, [state])

  return (
    <BudgetContext.Provider value={{state, dispatch}}>
      <AddExpenses />
      <ShowExpenses />
    </BudgetContext.Provider>
  )
}

export default App
