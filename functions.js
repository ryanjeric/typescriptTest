function getSum(n1, n2) {
    return n1 + n2;
}
//console.log(getSum(1,4));
var mySum = function (num1, num2) {
    if (typeof (num1) == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//console.log(mySum("2",5));
/* adding ? - optional */
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getName('John'));
function myVoid() {
    return;
}
