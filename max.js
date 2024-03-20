 function getMax(num1 , num2)
 {
    if(num1>num2)
    {
        return num1;
    }else{
        return num2;
    }
 }
 const  result = getMax(5,9);
 console.log(result);

 function getMax2(n1,n2,n3)
 {
    if(n1>n2 && n1>n3)
    {
        return n1;
    }
    else if (n2 > n3 && n2>n1)
    {
        return n2;
    }
    else{
        return n3;
    }
 }
 const result2= getMax2(7,4,-10);
 console.log(result2);
 const max= Math.max(12,15,0);
 console.log(max);