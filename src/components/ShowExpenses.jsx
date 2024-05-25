import { useContext } from "react";
import { BudgetContext } from "../utlity/context.js";

const ShowExpenses = () => {
  const { state, dispatch } = useContext(BudgetContext);

  const { expenses } = state;

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  const totalVal = expenses.reduce((acc, next) => {
    return (acc += next.cost);
  }, 0);

  console.log(state);
  return (
    <div>
    <h1 className="p-4 w-[80%] m-auto text-3xl text-center">EXPENSE LIST</h1>
      <div className="text-3xl flex justify-around w-[80%] m-auto p-2">
        <span>Budget {state.budget} </span>
        <span className="text-green-500">Remaining : {state.budget - totalVal}</span>
        <span>Spent so far : {totalVal}</span>
      </div>
      <div className="w-[80%] m-auto">
        {expenses.map((item) => {
          return (
            <div
              key={item.id}
              className="flex p-4 text-2xl justify-between m-4 rounded bg-[#D5EDF6]"
            >
              <p>{item.text}</p>
              <div className="flex gap-20">
                <span>RS : {item.cost}</span>
                <button onClick={() => handleDelete(item.id)}>❌</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowExpenses;
