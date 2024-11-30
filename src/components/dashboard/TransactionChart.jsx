import PieChart from "../charts/PieChart";

const TransactionSummaryChart = () => {
  const pieChartData = {
    series: [44, 55, 13, 43, 22],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  };

  return (
    <PieChart
      series={pieChartData.series}
      labels={pieChartData.labels}
      type="pie"
    />
  );
};

export default TransactionSummaryChart;
