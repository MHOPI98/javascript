function inchToFeet(inch)
{
    const feet= inch/12;
    return feet;
}

function inchToFeet2(inch)
{
    const feetFraction =inch/12;
    const feetNumber= parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result=feetNumber+ ' ft ' + inchRemaining + ' inch';
    return result;

}
const opiHeight = inchToFeet(66);
console.log(opiHeight);
const hm = inchToFeet2(66);
console.log(hm);

function  mileToKillometer(mile)
{
    const killo= mile* 1.60934;
    return killo;
}
const  km=mileToKillometer(5);
console.log(km);