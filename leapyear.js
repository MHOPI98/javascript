function isLeapYear(year)
{
    if(year % 4===0)
    {
        return true;
    }
    else{
        return false;
    }
}
// const tt=isLeapYear(2000);
// console.log("Is the year 2000 a leap year? "+tt);

function isLeapYear2(year)
{
    if(year%100!==0 && year % 4===0)
    {
        return true;
    }
    if(year%100===0 && year %400===0)
    {
        return true;
    }
    else{
        return false;
    }
}
const mm=isLeapYear2(2052);
console.log(mm);