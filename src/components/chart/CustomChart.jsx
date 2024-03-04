import ApexCharts from 'react-apexcharts';

const CustomChart = ({ height }) => {
  const options = {
    series: [
      {
        name: "Winners",
        data: [10, 41, 35, 51, 49, 62]
      }
    ],
    chart: {
      height: height, // Use the 'height' prop here
      width: '100%',
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Recent Activities',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    }
  };

  return (
    <div>
      <ApexCharts options={options} series={options.series} type="line" height={height} />
    </div>
  );
};

export default CustomChart;
