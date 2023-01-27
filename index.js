//position started (0 to last)
//0,1,2,3,4,5,6




let numbers = [45, 68 , 78 , 89, 98];
//set element value
numbers[1] =77;
numbers[3] = 44; 
console.log(numbers)

//get element by index
console.log(numbers[0]);


//find index of an element 
let positionIndex = numbers.indexOf(98);
console.log(positionIndex)



//example
let top10Number = [90, 91, 92, 93,94, 95, 96, 97, 98, 99]
//set out number any porsition 
top10Number[9]=100;
console.log(top10Number); //[90, 91, 92, 93,94, 95, 96, 97, 98, 100]
//find total numbers
console.log(top10Number.length); //10
//find any number position in this array
console.log(top10Number.indexOf(94)); //position-4

//find number 
console.log(top10Number[2]); //92
