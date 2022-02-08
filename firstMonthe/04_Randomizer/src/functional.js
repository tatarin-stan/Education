let arr = [];
/*document.getElementById('reset').hidden = true;*/


function validation(minInput, maxInput){

    if (isNaN(minInput) || isNaN(maxInput)){
        /*document.querySelector('.answer').innerText = 'Enter numbers';*/
        return false;
    }if (minInput>maxInput){
        /*document.querySelector('.answer').innerText = 'Enter the first number less than the second';*/
        return false;
    }if (minInput === 0 || maxInput === 0){
        /*document.querySelector('.answer').innerText = 'The minimum number must be greater than 0';*/
        return false;
    }

    return true;
}


function GenerateTest(){
    document.getElementById('reset').hidden = false;

    const minInput = document.getElementById('minValue').value;
    const maxInput = document.getElementById('maxValue').value;

    if (validation(minInput, maxInput) === false){
        return;
    }

    const countRange = ((+maxInput - +minInput) + 1);

    const randNumb =  Math.round(Math.random() * (+maxInput - +minInput) + +minInput);
    console.log(randNumb)

   if (arr.length === countRange){
       document.querySelector('.answer').innerText = 'Attempts ended';
       document.getElementById('start').hidden = true;
       return ;
    }if(arr.includes(randNumb) === true){
       GenerateTest()
   }else {
        arr.push(randNumb);
        document.querySelector('.answer').innerText = arr;
    }

}

function reset(){
    document.querySelector('.answer').innerText = '';
    arr = [];
    document.location.reload();
}


module.exports = {validation};

console.log(validation(12,15))


