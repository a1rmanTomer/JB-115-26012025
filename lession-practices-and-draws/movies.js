function movieMinutes(minutes){
    const hours = parseInt(minutes / 60)
    let rest = minutes % 60

    if (rest < 10){
        rest = '0' + rest;
    }

    return(hours + ":" + rest)
}