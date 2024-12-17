const List = ({expenses, onDelete}) => {
  return (
    <div className="grid grid-cols-1">
        {expenses.map((expense) =>( <div key={expense.id} className="border-solid rounded-lg h-16 w-2/4 shadow-lg bg-slate-200 flex justify-between m-3 items-center px-4 place-self-center">
         <div className="flex">
        <h1 className="text-2xl">{expense.product}</h1>
        <span className="text-2xl">-${expense.price}</span>
        </div>   
        <div>
        <button className="bg-blue-600 border-solid rounded-md h-10 w-32">increase price</button>
        <button className="ml-6 bg-red-600 border-solid rounded-md h-10 w-14" onClick={() => onDelete(expense.id)}>delet</button>
        </div>
     </div>))}
    </div>
    )
}

export default List