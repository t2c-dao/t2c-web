export const panelOptions = [
    {
        title: 'RPM',
        value: '2,107',
    },
    {
        title: 'Latency p90 (millis)',
        value: '58.1',
    },
    {
        title: 'Latency avg (millis)',
        value: '31.4',
    },
    {
        title: 'Error %',
        value: 'NA',
    },
];

export const panelData = [
    {
        id: 1,
        title: 'Organization 1',
        value: '10.0',
    },
    {
        id: 2,
        title: 'Organization 2',
        value: '2',
    },
];

export const slowRequests = [
    {
        traceId: '92de7b39b6a7c8a0069bdd114e15fd2',
        startTime: '2023-03-16 10:12:23',
        apiName: 'api-client /v1/client/user/session/initiate',
        duration: '259 ms',
    },
    {
        traceId: '92de7b39b6a7c8a0069bdd114ere5fd2',
        startTime: '2023-03-16 10:12:23',
        apiName: 'api-client /v1/client/user/session/initiate',
        duration: '259 ms',
    },
    {
        traceId: 'asdde7b39b6a7c8a0069bdd114e15fd2',
        startTime: '2023-03-16 10:12:23',
        apiName: 'api-client /v1/client/user/session/initiate',
        duration: '259 ms',
    },
    {
        traceId: 'rtye7b39b6a7c8a0069bdd114e15fd2',
        startTime: '2023-03-16 10:12:23',
        apiName: 'api-client /v1/client/user/session/initiate',
        duration: '259 ms',
    },
    {
        traceId: 'qwerty39b6a7c8a0069bdd114e15fd2',
        startTime: '2023-03-16 10:12:23',
        apiName: 'api-client /v1/client/user/session/initiate',
        duration: '259 ms',
    },
];

export const timeSeriesData = {
    labels: [
        '14:25',
        '14:30',
        '14:35',
        '14:40',
        '14:45',
        '14:50',
        '14:55',
        '15:00',
        '15:05',
        '15:10',
        '15:15',
        '15:20',
        '15:25',
        '15:30',
        '15:35',
        '15:40',
    ],
    datasets: [
        {
            label: 'Organization 1',
            data: [10, 5, 14, 5, 5, 14, 3, 6, 7, 11, 15, 23, 1, 6, 8, 5],
            borderColor: '#8a7c19',
            backgroundColor: '#8a7c1950',
            pointBorderColor: 'yellow',
            tension: 0.4,
            fill: true,
            // order: 2,
        },
        {
            label: 'Organization 1',
            data: [33, 13, 6, 17, 2, 17, 2, 15, 14, 5, 3, 14, 3, 13, 2, 14],
            borderColor: '#8ab8ff',
            backgroundColor: '#8ab8ff50',
            pointBorderColor: 'white',
            tension: 0.4,
            fill: true,
            // order: 1,
        },
        {
            label: 'Total',
            data: [13, 2, 14, 5, 13, 9, 3, 6, 7, 11, 10, 17, 11, 6, 8, 5],
            borderColor: '#73bf69',
            backgroundColor: '#73bf6950',
            pointBorderColor: 'yellow',
            tension: 0.4,
            fill: true,
            borderWidth: 1,
            borderDash: [5, 10],
            // order: 3,
        },
    ],
};

export const timeSeriesOptions = {
    plugins: {
        legend: {
            posiion: 'left',
        },
        tooltip: {
            enabled: true,
        },
    },
    fill: true,
    title: {
        display: true,
        text: 'Time series chart',
    },
    responsive: true,
    scales: {
        y: {
            min: 0,
            max: 70,
            stacked: true,
            grid: {
                color: '#292d30',
            },
        },
        x: {
            grid: {
                color: '#292d30',
            },
        },
    },
};
