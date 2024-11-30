/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";

const PieChart = ({ series, labels, type = "pie", width = 380 }) => {
  const options = {
    chart: {
      width,
      type,
    },
    labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type={type}
        width={width}
      />
    </div>
  );
};

export default PieChart;
