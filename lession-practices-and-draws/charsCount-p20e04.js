function charCount(num){

    let count = 0;

    while (num > 0) {
        count++;
        num = parseInt(num / 10);
    }

    return count;
}