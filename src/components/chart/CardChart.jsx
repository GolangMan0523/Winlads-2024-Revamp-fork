import ReactApexChart from 'react-apexcharts';

function CardChart() {
  const options = {
    series: [
      {
        name: "Winners",
        data: [10, 41, 35, 51]
      }
    ],
    chart: {
      height: 100, // Set the height to 100px
      type: 'line',
      zoom: {
        enabled: false
      },
      background: 'transparent' // Set the background to transparent
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr'],
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="area" height={350} />
    </div>
  );
}

export default CardChart;
