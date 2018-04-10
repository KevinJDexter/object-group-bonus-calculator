const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

class Employee {
    constructor (name, bonusPercentage, totalCompensation, totalBonus){
        this.name = name;
        this.bonusPercentage = bonusPercentage;
        this.totalCompensation = totalCompensation;
        this.totalBonus = totalBonus;
    }
    lookNiceString() {
        let stringToReturn = this.name + ' has a bonus of ' + this.bonusPercentage;
        stringToReturn += '%, for a total bonus of $' + this.totalBonus;
        stringToReturn += ' and a total compensation of $' + this.totalCompensation + '. <div id="face">';
        if (this.bonusPercentage == 0) {
            stringToReturn += ' :(';
        }
        else {
            stringToReturn += ' :)'
        }
        stringToReturn += "</div>"
        return stringToReturn;
    }
}

function employeeToEmployee(employee){
    let bonusPercent = 0; 
    if(employee.reviewRating == 3){
        bonusPercent += 4;
    }
    else if (employee.reviewRating == 4){
        bonusPercent += 6;
    }
    else if(employee.reviewRating == 5){
        bonusPercent += 10;
    }
    if (employee.employeeNumber.length == 4) { //four digit number
        bonusPercent += 5;
    }
    if (employee.annualSalary > 65000) {
        bonusPercent -= 1;
    }
    if (bonusPercent > 13) {
        bonusPercent = 13;
    }
    if (employee.reviewRating <= 2) {
        bonusPercent = 0; //the only way the bonusPercent would be <0 is if they had a rating of 2 or less, don't need extra code line for that
    } 
    let bonusAmount = employee.annualSalary * bonusPercent * .01;
    bonusAmount = Math.round(bonusAmount);
    let totalCompensation = parseInt(employee.annualSalary) + bonusAmount;
    let newEmployeeRecord = new Employee (employee.name, bonusPercent, totalCompensation, bonusAmount);
    return newEmployeeRecord;
}

// let newAtticus = employeeToEmployee(atticus);
// console.log(newAtticus);

$(document).ready (function () {
    
    $('#submitButton').click(function() {
        for (let employee of employees) {
            let output = $('#employeeOutput');
            
            let newGuy = employeeToEmployee(employee);
            output.append( '<li>' + newGuy.lookNiceString() + '</li>' )
            console.log(newGuy);
        }    
    });
});
