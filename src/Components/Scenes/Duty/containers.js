const MonthOfYear2019 = [
    {
        name : 'Tháng 1',
        daties : 31,
        color : 'red',
        firstDate : ''
    },
    {
        name : 'Tháng 2',
        daties : 28,
        color : 'orange',
        firstDate : ''
    },
    {
        name : 'Tháng 3',
        daties : 31,
        color : 'yellow',
        firstDate : ''
    },
    {
        name : 'Tháng 4',
        daties : 30,
        color : 'olive',
        firstDate : ''
    },
    {
        name : 'Tháng 5',
        daties : 31,
        color : 'green',
        firstDate : ''
    },
    {
        name : 'Tháng 6',
        daties : 30,
        color : 'teal',
        firstDate : ''
    },
    {
        name : 'Tháng 7',
        daties : 31,
        color : 'blue',
        firstDate : ''
    },
    {
        name : 'Tháng 8',
        daties : 31,
        color : 'violet',
        firstDate : ''
    },
    {
        name : 'Tháng 9',
        daties : 30,
        color : 'purple',
        firstDate : ''
    },
    {
        name : 'Tháng 10',
        daties : 31,
        color : 'pink',
        firstDate : ''
    },
    {
        name : 'Tháng 11',
        daties : 30,
        color : 'grey',
        firstDate : 'Monday'
    },
    {
        name : 'Tháng 12',
        daties : 31,
        color : 'black',
        firstDate : 'Sunday'
    },
];

const MonthOfYear2020 = [
    {
        name : 'Tháng 1',
        daties : 31,
        color : 'red',
        firstDate : 'Wednesday'
    },
    {
        name : 'Tháng 2',
        daties : 28,
        color : 'orange',
        firstDate : 'Saturday'
    },
    {
        name : 'Tháng 3',
        daties : 31,
        color : 'yellow',
        firstDate : 'Sunday'
    },
    {
        name : 'Tháng 4',
        daties : 30,
        color : 'olive',
        firstDate : ''
    },
    {
        name : 'Tháng 5',
        daties : 31,
        color : 'green',
        firstDate : ''
    },
    {
        name : 'Tháng 6',
        daties : 30,
        color : 'teal',
        firstDate : ''
    },
    {
        name : 'Tháng 7',
        daties : 31,
        color : 'blue',
        firstDate : ''
    },
    {
        name : 'Tháng 8',
        daties : 31,
        color : 'violet',
        firstDate : ''
    },
    {
        name : 'Tháng 9',
        daties : 30,
        color : 'purple',
        firstDate : ''
    },
    {
        name : 'Tháng 10',
        daties : 31,
        color : 'pink',
        firstDate : ''
    },
    {
        name : 'Tháng 11',
        daties : 30,
        color : 'grey',
        firstDate : 'Monday'
    },
    {
        name : 'Tháng 12',
        daties : 31,
        color : 'black',
        firstDate : 'Sunday'
    },
];

const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
];

function Livehospital(month, livehospitalArr, listpersons) {
    this.year = '2020';
    this.tittle = `Live Hospital ${month.name} 2019`;
    this.name = month.name;
    this.firstDate = month.firstDate;
    this.color = month.color;
    this.livehospital = livehospitalArr;
    this.listpersons = listpersons;
};

export {MonthOfYear2019,MonthOfYear2020, colors, Livehospital};