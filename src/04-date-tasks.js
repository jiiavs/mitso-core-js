
function parseDataFromRfc2822(value) {
    return new Date(value);
}

function parseDataFromIso8601(value) {
    return new Date(value);
}

function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function timeSpanToString(startDate, endDate) {
    const diff = endDate - startDate; 
    const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
    const ms = (diff % 1000).toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${ms}`;
}

function angleBetweenClockHands(date) {
    const hours = date.getUTCHours() % 12;
    const minutes = date.getUTCMinutes();
    const hourAngle = 30 * hours + 0.5 * minutes;
    const minuteAngle = 6 * minutes;
    let angle = Math.abs(hourAngle - minuteAngle);
    if (angle > 180) angle = 360 - angle;
    return (angle * Math.PI) / 180; 
}

function getDay(day, isLeap) {
    const months = [
        { name: 'January', days: 31 },
        { name: 'February', days: isLeap ? 29 : 28 },
        { name: 'March', days: 31 },
        { name: 'April', days: 30 },
        { name: 'May', days: 31 },
        { name: 'June', days: 30 },
        { name: 'July', days: 31 },
        { name: 'August', days: 31 },
        { name: 'September', days: 30 },
        { name: 'October', days: 31 },
        { name: 'November', days: 30 },
        { name: 'December', days: 31 },
    ];

    let dayCount = day;
    for (const month of months) {
        if (dayCount <= month.days) return `${month.name}, ${dayCount}`;
        dayCount -= month.days;
    }
    return null; 
}

module.exports = {
    parseDataFromRfc2822,
    parseDataFromIso8601,
    isLeapYear,
    timeSpanToString,
    angleBetweenClockHands,
    getDay,
};
