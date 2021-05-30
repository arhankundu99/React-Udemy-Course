import Chart from '../Chart/Chart';
const ExpensesChart = (props) => {
    //console.log(props.amountArr);
    const chartDataPoints = [
        {label: 'Jan', value: props.amountArr[0], maxValue: props.max},
        {label: 'Feb', value: props.amountArr[1], maxValue: props.max},
        {label: 'Mar', value: props.amountArr[2], maxValue: props.max},
        {label: 'Apr', value: props.amountArr[3], maxValue: props.max},
        {label: 'May', value: props.amountArr[4], maxValue: props.max},
        {label: 'Jun', value: props.amountArr[5], maxValue: props.max},
        {label: 'Jul', value: props.amountArr[6], maxValue: props.max},
        {label: 'Aug', value: props.amountArr[7], maxValue: props.max},
        {label: 'Sep', value: props.amountArr[8], maxValue: props.max},
        {label: 'Oct', value: props.amountArr[9], maxValue: props.max},
        {label: 'Nov', value: props.amountArr[10], maxValue: props.max},
        {label: 'Dec', value: props.amountArr[11], maxValue: props.max}
    ]
    return (
        <Chart dataPoints = {chartDataPoints}/>
    )
}
export default ExpensesChart;