const number =[1,4,5,2,1,4,5,4,4,3,3,5,5];
function duplicate(array)
{
    const unique=[];
    for(const item of array)
    {
        if(unique.includes(item) === false)
        {
            unique.push(item);
        }
    }
    return unique;
}
const st=duplicate(number);
console.log(st);