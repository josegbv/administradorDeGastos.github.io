import React, { useState } from "react";
import {useGlobalState} from "../../context/GlobalState"


function TransactionForm() {
  const {addTransaction} = useGlobalState()
  const [descripcion, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e)=>{
    e.preventDefault()
    addTransaction({
      id:window.crypto.randomUUID(),
      descripcion,
      amount: +amount
    })

  }

  return (
    <div style={{marginTop: '48px'}}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una descripcion"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="text"
          step="0.01"
          placeholder="Ingresa un monto"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">Añadir transaccion</button>
      </form>
    </div>
  );
}

export default TransactionForm;
