import { useGlobalState } from "../../context/GlobalState"
import { TransactionItem } from "./TransactionItem"

function TransactionList() {
 
  const {transactions} = useGlobalState()

  return (
    <>
      <h3 className="">Historico de transacciones</h3>
      <ul>
      {
     
     transactions.map(transaction => (
       <TransactionItem transaction={transaction} key={transaction.id}/>
     ))
    } 
      </ul>

    </>
  )
}

export default TransactionList
