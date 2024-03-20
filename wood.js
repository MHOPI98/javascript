/**
 * chair -----3cft
 * table------10cft
 * bed--------50cft
 */

function wood(chair,table,bed)
{
    const perChair=3;
    const perTable=10;
    const perBed=50;
    const allChair=chair*perChair;
    const allTable=table*perTable;
    const allBed=bed*perBed;
    const total=allChair+allTable+allBed;
    return total;
}

const  result = wood(3,2,4);
console.log(result);