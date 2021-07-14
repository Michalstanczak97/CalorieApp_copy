import React from 'react';
import { Bar } from 'react-chartjs-2'


const MyChart = ({totalUsedCalories, necessaryCalories, necessaryProtein, totalUsedProtein, necessaryCarbs, totalUsedCarbs, necessaryFat, totalUsedFat }) => {
    console.log(totalUsedCalories)
    return (
        <div className="container">
            <div className="chart_container">
                 <div>
                    <Bar
                    data={{
                        labels: ['Kalorie' , 'Białko', 'Węglowodany', 'Tłuszcz'],
                        datasets: [{
                            label: 'Zjedzone',
                            data: [totalUsedCalories, totalUsedProtein, totalUsedCarbs, totalUsedFat],
                            backgroundColor: [
                                '#68BB72',
                                '#68BB72',
                            ],
                            borderColor: [
                                '#68BB72',
                                '#68BB72',
                            ],
                            borderWidth: 1
                        },
                            {
                                label: 'Zapotrzebowanie',
                                data: [necessaryCalories, necessaryProtein, necessaryCarbs, necessaryFat],
                                backgroundColor: [
                                    '#FF5757'
                                ],
                                borderColor: [
                                    '#FF5757',
                                    '#FF5757'
                                ],
                                borderWidth: 1
                            },
                        ],

                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                    }}
                   />
                 </div>
    </div>
        </div>
    )
}

export default MyChart;