// let color ="red";
// console.log(color);


var year = 2020;
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log("This is a leap year");
}
else{
    console.log("This is not a leap year");
}