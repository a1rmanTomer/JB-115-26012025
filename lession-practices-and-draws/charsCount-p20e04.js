function charCount(num){

    let count = 0;

    if(num<0)
        num = Math.abs(num);

    while (num > 0) {
        count++;
        num = parseInt(num / 10);
    }

    return count;
}