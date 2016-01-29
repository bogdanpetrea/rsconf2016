window.samples.push({

    layoutEngine: 'EXTRACT',
    data: rawData,
    spec: {
        dimensions: {
            priority: {
                type: 'category',
                value: 'key'
            },
            severity: {
                type: 'order',
                order: ['Must Have', 'Nice to have']
            },
            project: {type: 'category'},
            team: {type: 'category'},
            cycleTime: {type: 'measure'},
            effort: {type: 'measure'}
        },
        unit: {
            type: 'COORDS.RECT',
            x: 'project',
            y: 'severity',
            unit: [
                {
                    type: 'COORDS.RECT',
                    guide: {
                        x: {tickLabel: 'val'},
                    },
                    x: 'priority',
                    y: 'effort',
                    unit: [
                        {
                            type: 'ELEMENT.POINT'
                        }
                    ]
                }
            ]
        }
    },
    plugins: [
        tauCharts.api.plugins.get('tooltip')({fields: ['team', 'project', 'cycleTime', 'effort', 'priorityName', 'severity']})
    ]

});