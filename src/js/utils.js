function getDateLabels(offset) {
    let dateLabels = [];
    let rightmostDate;
    for (let i = 7; i >= 0; i--) {
        rightmostDate = new Date();
        rightmostDate.setDate(rightmostDate.getDate() - offset - i);
        dateLabels.push(
            rightmostDate.getDate().toString().padStart(2, '0') + '.' +
            (rightmostDate.getMonth() + 1).toString().padStart(2, '0')
        );
    }

    return dateLabels;
}

function getPreviousDates(offset) {
    let dates = [];
    let rightmostDate;
    for (let i = 7; i >= 0; i--) {
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