import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {
                labels: ['Indoor Garden', 'Kitchen + Bath', 'Appliances', 'Paint', 'Plumbing'],
                datasets: [{
                    label: 'Dollars (millions)',
                    data: [
                        9204,
                        7184,
                        7362,
                        7666,
                        6985
                    ],
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]

                }]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text: 'Products sold in Millions year 2016'
                        },
                        legend: {
                            display:true,
                            position:'right',
                            fontSize:25
                        }
                    }}
                /> 
            </div>
        );
    }
}

export default Chart;