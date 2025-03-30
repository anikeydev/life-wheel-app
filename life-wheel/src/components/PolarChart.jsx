import { PolarArea } from 'react-chartjs-2'
import Chart, { plugins } from 'chart.js/auto'
export default function PolarChart(props) {
  const data = {
    labels: [
      'Карьера',
      'Семья',
      'Друзья',
      'Здоровье',
      'Хобби',
      'Деньги',
      'Отдых',
      'Саморазвитие',
    ],
    datasets: [
      {
        label: 'Оценка: ',
        data: props.data,
        backgroundColor: [
          '#a5e6aa',
          '#9be0ca',
          '#92d9e7',
          '#abc3ea',
          '#c0a9ea',
          '#d092e7',
          '#d999c9',
          '#e39fa9',
        ],
        // borderColor: [
        //   'rgba(255,99,132,1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        // borderWidth: 1,
      },
    ],
  }
  const options = {
    scales: {
      r: {
        max: 10, // Максимальное значение радиальной оси
        min: 0, // Минимальное значение (по умолчанию 0)
        ticks: {
          stepSize: 1, // Шаг между значениями
          display: false,
        },

        pointLabels: {
          display: true,
          centerPointLabels: true,
          font: {
            size: 14,
          },
        },
        angleLines: {
          display: true,
        },
      },
    },
    plugins: {
      legend: false,
    },
  }
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <PolarArea data={data} options={options} className="w-100 h-auto" />
    </div>
  )
}
