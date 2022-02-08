function tickets(arr){

    if (typeof arr !== 'object' || typeof arr === 'string' || arr.length<1){
        return 'nope'
    }

    let bank = 0 ;
    for (let i=0;i<arr.length;i++){
        if (arr[i] === 25){
            bank += 25;
        }if (arr[i] === 50){
            bank += 25;
            bank -= 25;
        }if (arr[i] === 100){
            bank += 25;
            bank -= 75;
        }
        if (bank<0){
            return 'No';
        }
    }
    return 'Yes';
}



console.log(tickets([25, 25, 50]));         // => YES
console.log(tickets([25, 100]));            // => NO
console.log(tickets([25, 25, 50, 100]));    // Yes
console.log(tickets([25, 50, 100]));        // No

module.exports = tickets;