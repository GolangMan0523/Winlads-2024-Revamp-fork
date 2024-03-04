<<<<<<< HEAD
import ApexCharts from 'react-apexcharts';

const CustomChart2 = ({ height }) => {
  const options = {
    series: [
      {
        name: "Winners",
        data: [10, 41, 35, 51, 49, 62]
      }
    ],
    chart: {
      height: height,
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
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          colors: '#fff' // Set x-axis label color to white
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#fff' // Set y-axis label color to white
        }
      }
    },
    theme: {
      mode: 'dark', // Set the theme to dark to ensure text is white
    },
  };

  return (
    <div>
      <ApexCharts options={options} series={options.series} type="line" height={height} />
    </div>
  );
};

export default CustomChart2;
=======
import ApexCharts from 'react-apexcharts';

const CustomChart2 = ({ height }) => {
  const options = {
    series: [
      {
        name: "Winners",
        data: [10, 41, 35, 51, 49, 62]
      }
    ],
    chart: {
      height: height,
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
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          colors: '#fff' // Set x-axis label color to white
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#fff' // Set y-axis label color to white
        }
      }
    },
    theme: {
      mode: 'dark', // Set the theme to dark to ensure text is white
    },
  };

  return (
    <div>
      <ApexCharts options={options} series={options.series} type="line" height={height} />
    </div>
  );
};

export default CustomChart2;
>>>>>>> ea5772a (update project)
