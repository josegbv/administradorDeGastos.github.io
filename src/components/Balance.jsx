import React from 'react'
import { useGlobalState } from '../context/GlobalState'

function Balance() {
  const {transactions} = useGlobalState();

  const amount = transactions.map(transactions=> transactions.amount)
  const total = amount.reduce((acc, item)=> (acc += item), 0).toFixed(2)

  const data = useGlobalState();

  return (
    <div className='flex justify-between'>
      <h3>Saldo Actual</h3>
      <h1 className='text-2x1 font-bold'>${total}</h1>
    </div>
  )
}

export default Balance