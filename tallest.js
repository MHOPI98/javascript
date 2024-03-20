
/**
 * max number
 */

const height =[65,68,72,78,60];
function getMax(numbers)
{
    let max =  numbers[0];
   for(const num of numbers)
   {
    if(num > max )
    {
        max=num;
    }

   }
   return  max;
}

const max=getMax(height);
console.log(max);

/**
 * min number
 */
const height1 =[65,68,72,78,60];
function getMax2(numbers)
{
    let min =  numbers[0];
   for(const num of numbers)
   {
    if(num < min )
    {
        min=num;
    }

   }
   return  min;
}

const min=getMax2(height1);
console.log(min);