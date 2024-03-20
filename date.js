const today= new Date();
console.log(today.toLocaleString('en-GB'));

for(var i=0; i<5; i++){
    setTimeout(function()
    {
        console.log(i);
    },100);
}