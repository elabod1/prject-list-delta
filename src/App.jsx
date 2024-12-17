import { useState } from "react"
import List from "./components/List"
import InputList from "./components/InputList"

function App() {
  const [expenses, setExpenses]= useState([
    {id: 1 , product: 'laptop' ,price: 1000},
    {id: 2 , product: 'phone' ,price: 700},
    {id: 3 , product: 'Hphone' ,price: 200},
  ])
   
  return (
    <>
    <InputList onSubmit={expense =>setExpenses([...expenses,{...expense,id:expense.length+1}])}/>
    <List expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e=>e.id !== id ))}/>
  </>
  
  )
}
export default App