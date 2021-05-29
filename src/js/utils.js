function getDateLabels(offset) {
    let dateLabels = [];
    let rightmostDate;
    const days = [
        'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT',
    ]
    for (let i = 6; i >= 0; i--) {
        rightmostDate = new Date();
        rightmostDate.setDate(rightmostDate.getDate() - offset - i);
        const paddedMonth = (rightmostDate.getMonth() + 1).toString().padStart(2, '0');
        const paddedDay = rightmostDate.getDate().toString().padStart(2, '0');
        const formattedDate = paddedDay + '.' + paddedMonth;
        const day = rightmostDate.getDay();
        const dow = days[day];
        const isHoliday = day === 0 || day === 6;
        dateLabels.push({
            formatted: formattedDate,
            day: paddedDay,
            dow: dow,
            isHoliday: isHoliday,
        });
    }

    return dateLabels;
}

function getPreviousDates(offset) {
    let dates = [];
    let rightmostDate;
    for (let i = 6; i >= 0; i--) {
        rightmostDate = new Date();
        rightmostDate.setDate(rightmostDate.getDate() - offset - i);
        dates.push(
            rightmostDate.getFullYear().toString() + '-' +
            (rightmostDate.getMonth() + 1).toString().padStart(2, '0') + '-' +
            rightmostDate.getDate().toString().padStart(2, '0')
        );
    }

    return dates;
}

function offsetToDate(offset) {
    let d = new Date();
    d.setDate(d.getDate() - offset);

    return d.getFullYear().toString() + '-' +
        (d.getMonth() + 1).toString().padStart(2, '0') + '-' +
        d.getDate().toString().padStart(2, '0')
}

export {getDateLabels, getPreviousDates, offsetToDate};