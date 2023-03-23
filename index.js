// Code your solution in this file!
const drivers = ['Antonia','Nuru', 'Ameri', 'Mo']


function returnFirstTwoDrivers(drivers) {
    const firstTwoDrivers = drivers.slice(0,2)
     return firstTwoDrivers;
}
function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier() { 
    return function (num){
        return num*num ;
    };
}
function fareDoubler(number){
    return number *2;
}

function fareTripler(numb){
    return numb * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);

}