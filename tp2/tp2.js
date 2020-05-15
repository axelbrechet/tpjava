function celciusToFahrenheit(celcius){
    let Fahrenheit = celcius*1.8 +32 ;
    return Fahrenheit ;
}
function limit(x, inf, sup){
    if (x<=inf){
        return inf;
    }
    if(x>=sup){
        return sup;
    }
    return x;
}

function toByte(x, unit){
    let result = x 
    switch(unit){
        case T:
            x=x*1024;
        case G:
            x=x*1024;
        case M:
            x=x*1024;
        case K:
            x=x*1024;
            break;
        default:return;
    }
    return x;
}

function main(){
    let result = celciusToFahrenheit(22);
    console.log(result);
}
main();