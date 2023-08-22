function numberToString(n: number){
    if(n < 10){
        return "0" + n;
    }
    return n;
}

function timeToString(time: Date){
    const hh = time.getHours();
    const mm = time.getMinutes();
    const amOrPm = hh < 12 ? "AM" : "PM";
    return `${numberToString(hh)}:${numberToString(mm)} ${amOrPm}`;
};

export { timeToString }