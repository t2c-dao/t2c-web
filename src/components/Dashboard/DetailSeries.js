/* eslint-disable */
// @ts-nocheck

import {
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// import { timeSeriesData, timeSeriesOptions } from '../../../../config/detailViewData';
import { timeSeriesData, timeSeriesOptions } from '@/config/detailData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    Filler
);

function DetailSeriesChart() {
    return (
        <div className="w-full h-full m-2">
            <Line
                data={timeSeriesData}
                options={timeSeriesOptions}
                className="w-full h-full text-white"
            />
        </div>
    );
}

export default DetailSeriesChart;
