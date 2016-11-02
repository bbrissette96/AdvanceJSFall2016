'use strict';

function getDollarAmount(str) {
    if (typeof str !== 'string')
        return str;
    var arrayOfStrings = str.split(".");
    //calling index 0 represents the first half of the split string
    var dollars = arrayOfStrings[0];
    if ((dollars[0] === "0") && (dollars.length === 2)) {
        dollars = dollars[1];
        return dollars;
    } else if (dollars.length === 1) {
        return dollars;
    } else {
        return dollars;
    }

}

function getCentAmount(str) {
    if (typeof str !== 'string')
        return str;
    var arrayOfStrings = str.split(".");
    //calling index 1 represents the second half of the split string
    var cents = arrayOfStrings[1];
    if ((cents.length === 3)) {
        cents = "00";
    }
    if ((cents.length === 2) && (cents[0] === "0") && (cents[1] !== "0")) {
        cents = cents[0] + cents[1];
    }
    if (cents.length === 2 && (cents[0] !== "0")) {
        cents = cents[0] + cents[1];
    }
    if (cents.length === 1) {
        var centNum = (cents[0] * 10);
        cents = centNum.toString();
    }
    if (cents.length === 1 && (cents[0] === "0")) {
        cents = "00";
    }
    return cents;

}