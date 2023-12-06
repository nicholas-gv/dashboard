export const chartLabels = [
    {
        mainLabel: "Performance",
        labels:['2017', '2018', '2019', '2020', '2021', '2022', '2023'], 
        disallowedFor: ["doughnut"]
    },
    {
        mainLabel: "Price",
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        disallowedFor: ["doughnut"]
    },
    {
        mainLabel: "Avg. of samples",
        labels:['1970 - 1979', '1980 - 1989', '1990 - 1999', '2000 - 2009', '2010 - 2019'],
        disallowedFor: ["doughnut", "line"]
    },
    {
        mainLabel: "Performance",
        labels:['Q1', 'Q2', 'Q3', 'Q4'],
    },
    {
        mainLabel: "Mkt. Cap",
        labels:['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'], 
        disallowedFor: ["bar", "line"]
    },
    {
        mainLabel: "Question",
        labels:['Yes', 'No'], 
        disallowedFor: ["bar","line"]
    },
]