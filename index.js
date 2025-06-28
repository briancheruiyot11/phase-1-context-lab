/* Your Code Here */

// 1. Create employee record 
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

// 2. Create employee records
function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(createEmployeeRecord);
}

// 3. Time In event to an employee's record
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}

// TimeOut event to an employee's record
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}

// Calculates hours worked on a given date
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date);
    const timeOut = this.timeOutEvents.find(e => e.date === date);
    return (timeOut.hour - timeIn.hour) / 100; // Converts 24-hr format (e.g., 1700 - 900 = 8 hrs)
}

// Calculates wages earned on a given date
function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}

// Finds an employee by first name
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(emp => emp.firstName === firstName);
}

// Calculates total payroll for all employees
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, emp) => total + allWagesFor.call(emp), 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

