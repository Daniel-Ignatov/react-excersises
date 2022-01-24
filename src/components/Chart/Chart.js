import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = (props) => {
    const dataPoints_values = props.dataPoints.map(dataPoints => dataPoints.value);
    const getMaximumValue = Math.max(...dataPoints_values);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoints =>
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={getMaximumValue}
                    label={dataPoints.label} />
            ))}
        </div>
    );
};

export default Chart;