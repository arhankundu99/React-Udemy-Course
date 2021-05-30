import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props){
    
    return (
        <div className = "chart">
            {props.dataPoints.map((dataPoint) => {
                return(
                    <ChartBar 
                        key = {dataPoint.label}
                        value = {dataPoint.value}
                        label = {dataPoint.label}
                        maxValue = {dataPoint.maxValue} />
                    )
            })};
        </div>
    );
}
 
export default Chart;