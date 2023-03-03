function main() {
    
    const n = parseInt(readLine().trim(), 10), baseTwo = n.toString(2), splited = baseTwo.split('0');
    let flag = 0;
    
    splited.forEach(function (v, i) {
        if(v.length > flag) flag = v.length;
    });
    
    console.log(flag);
}