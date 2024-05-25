import { v4 as uuidv4 } from "uuid";
import {useState, useContext} from "react"
import {BudgetContext} from "../utlity/context.js"

const AddExpenses = () => {
  const [input, setInput] = useState("")
  const [cost, setCost] = useState(0)

  const { dispatch } = useContext(BudgetContext)

  const addExpense = () => {
    if(!input || !cost) return
    const expense = {
      id: uuidv4(),
      text: input,
      cost: parseInt(cost),
    }

    dispatch({type: "ADD_EXPENSE", payload : expense})
    setInput("")
    setCost(0)
  }
  return (
    <div>
      <h2 className="text-center p-8 text-4xl">My Budget Planner</h2>
      <div className="flex px-10 py-4 text-2xl">
        <div className=" w-full p-4 bg-[#D5EDF6]">
          <label htmlFor="expense">Expense</label>
          <br />
          <input type="text" name="expense" value={input} onChange={e => setInput(e.target.value)}/>
        </div>
        <div className="w-full p-4 bg-[#D5EDF6]">
          <label htmlFor="cost">Cost</label>
          <br />
          <input type="number" name="cost"  value={cost} onChange={e => setCost(e.target.value)}/>
        </div>
      </div>
      <button className="button-51 mx-10 my-2" onClick={addExpense}>ADD EXPENSE</button>
    </div>
  );
};

export default AddExpenses;
