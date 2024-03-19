/**
 * odd number average 
 */

function oddAverage(number)
{
    const odds=[];
    for(const numbers of number)
    {
        if(numbers % 2 ===0){
            // console.log(numbers);
            odds.push(numbers);
        }
    }
    // console.log(odds);
    let sum = 0;
    for (const numbers of odds)
    {
        sum = sum+ numbers;
    }
    const count =odds.length;
    console.log(sum,count);
    const avg=sum/count;
    return avg;
}
const number =[42,13,58,65,81,7,11,22,32,12];
const avg=oddAverage(number);

console.log(avg);
