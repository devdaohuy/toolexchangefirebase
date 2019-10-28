function newNumericalPersonsInNextMonth(initArrayPerson, lasPersonLastMonth) {
    let whereLastPerson = initArrayPerson.findIndex(arr => arr.name === lasPersonLastMonth ) || 0;
    let array0toLastPerson = initArrayPerson.splice(0, whereLastPerson);
    let newArrayAfterConvert = initArrayPerson.concat(array0toLastPerson);
    return newArrayAfterConvert;
};

function dutiesInNextMonth(NumericalPersons,monthNumber) {
    let newDutyArray = [];
    for ( let i = 1; i <= monthNumber.length; i++ ) {
        if ( i <= NumericalPersons.length ) {
            newDutyArray.push({
                name : NumericalPersons[i - 1].name,
                ...monthNumber[i-1]
            })
        };
        if ( i > NumericalPersons.length ) {
            newDutyArray.push({
                name : NumericalPersons[i - 1 - NumericalPersons.length].name,
                ...monthNumber[i-1]
            })
        }
    };
    return newDutyArray;
};

function liveHospital(month, numericalDuties) {
    let monthArr = dayOfWeekInMonth(month.firstDate, month.daties);
    let newLiveHospital = [];
    for ( let i = 1; i <= month.daties; i++ ) {
        if ( i <= numericalDuties.length ) {
            newLiveHospital.push({
                name : numericalDuties[i-1].name,
                ...monthArr[i-1]
            });
        };
        if ( i > numericalDuties.length ) {
            newLiveHospital.push({
                name : numericalDuties[i -1 -numericalDuties.length].name,
                ...monthArr[i-1]
            })
        }

    };
    return newLiveHospital;
};

function dayOfWeekInMonth(firstDate, totalMonth) {
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let monthArr = [firstDate];
    for (let i = 1; i <= totalMonth; i++) {
        if ( i === 1 && monthArr[i-1] === 'Sunday' ) {
            monthArr.push('Monday');
        };
        let dayOfWeekIndex = days.findIndex(day => day === monthArr[i - 1] );
        if ( dayOfWeekIndex < 6 ) {
            monthArr.push(days[dayOfWeekIndex + 1]);
            if ( monthArr[monthArr.length - 1] === 'Sunday' ) {
                monthArr.push(days[0])
            };
        };
    };
    //console.log(monthArr);
    let finalMonth = [];
    for ( let i = 1; i <= totalMonth; i++ ) {
        finalMonth.push({
            date : i,
            dayOfWeek : monthArr[i-1]
        })
    }
    return finalMonth;
};

function checkSatSun(dayOfWeek) {
    if ( dayOfWeek === 'Sunday' || dayOfWeek === 'Saturday' ) {
        return true;
    } else {
        return false
    }
};

function slicePersonToLineOf4(pureArr) {
    let newArr = [],
        isPureArrLength = pureArr.length || 0;
    for ( let index = 0 ; index <= isPureArrLength ; index += 4 ) {
        if ( index + 4 >= pureArr.length ) {
            let arrChild = pureArr.slice(index, pureArr.length);
            newArr.push(arrChild);
        } else {
            let arrChild = pureArr.slice(index, index + 4);
            newArr.push(arrChild);
        }
    };
    return newArr;
};

export {dayOfWeekInMonth, checkSatSun, slicePersonToLineOf4, newNumericalPersonsInNextMonth, dutiesInNextMonth, liveHospital};