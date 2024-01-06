import React from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  console.log(transaction)
  return (
    <li
      className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center"
      key={transaction.id}
    >
      <p className="text-sm">{transaction.descripcion}</p>
      <div>
        <span>${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          x
        </button>
      </div>
    </li>
  );
}
