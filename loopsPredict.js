for(var num = 0; num < 15; num++){
    console.log(num);
}
// I predicted correct and result is 01234567891011121314

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
// I predict correct and result is 3 and 9


for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

//I predicted and got it little wrong but understood why answer was different from computer. final result is 145810111416