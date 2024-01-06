import React from "react";
import { VictoryLabel, VictoryPie } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const total = transactions.reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);
    

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;
    

  const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100) ? Math.round((totalExpense / totalIncome) * 100) : 0;
  console.log(totalExpensePercentage, 'totalExpensePercentage')
  const totalIncomePercentage = 100 - totalExpensePercentage ? 100 - totalExpensePercentage : 0;
  console.log(totalIncomePercentage, 'totalIncomePercentage')
  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Gastos", y: totalExpensePercentage },
        { x: "Ingresos", y: totalIncomePercentage },
      ]}
      animate={{ duration: 2000 }}
      labels={({ datum }) => datum.y}
      labelComponent={<VictoryLabel  style={{ fill: "white" }} />}
    />
  );
}

export default ExpenseChart;
