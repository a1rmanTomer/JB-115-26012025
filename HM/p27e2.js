function fullInRange(num1,num2){

    let small,big;

    if(num1>num2){
        big = num1;
        small = num2;
    }
    else{
        big = num2;
        small = num1;
    }

    while(small<=big){
        console.log(small);
        small++;
    }
}