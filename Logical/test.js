// let string = "how are you";
// let reversedWords = string.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// console.log(reversedWords); // Output: "woh era uoy"

//Unique Elemets 

// const elements =[1,2,3,4,5,6,2,3,8,9];
// const unique = [];


// for( let i=0; i<elements.length; i++){
//     let count = 0;
//     for(let j=0;j<elements.length; j++)
//     {
//         if(i!==j && elements[i]===elements[j])
//         {
//             count++;
//         }
//     }
//     if(count===0)
//     {
//         unique.push(elements[i]);
//     }
// }

// console.log(unique);


//Duplicate count and print Duplicate elemets 

// const list = [1,2,3,4,5,6,7,8,1,2,3,4];
// const isDuplicate = []
// let count=0;
// for(let i=0; i<list.length; i++)
// {
//     for(let j = i+1; j<list.length; j++)
//     {
//         if(list[i] === list[j])
//         {
//             isDuplicate.push(list[i]);
//             count++;
//         }
        
//     }
// }

// console.log(count);
// console.log(isDuplicate);

//sum using reduce 

// const arr =[1,2,3,4,5]
// const out = arr.reduce((acc,curr)=>{
//     return acc+=curr
// },0);
// console.log(out);

//Sum using ForEach

// const arr = [1,2,3,4,5];
// let sum = 0;
//  arr.forEach((num)=>{
//     return sum+=num;
// })
// console.log(sum);

//Product 

// const arr = [1,2,3,4,5,6]
// let product = 1;

// arr.forEach((num)=>{
//     product*=num;
// })
// console.log(product);


// for(let i=100;i>=1; i--){
//     console.log(i);
// }

// const fruits = ["Apple","Mango","Grapes"];
// fruits.forEach((element,index)=>{
//     console.log(`Element : ${element}  Index :${index}` );
// })


//replace even by 0 and odd by 1

// const arr =[1,2,3,4,5,6,7,8,9];

// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i] % 2 === 0)
//     {
//         arr[i] = 1;
//     }else 
//     {
//         arr[i] = 0;
//     }
// }

// console.log(arr);


//secondlarget OR larget
// // 
// const arr = [2,5,7,8,9,1,12,45,67,32,19,65,42,86,49];
// let largest = arr[0];
// let secondLarget = arr[0];
// let thirdLarget = arr[0];

// for(let i=0; i<arr.length; i++){
//     if(arr[i]>largest)
//     {
//         thirdLarget = secondLarget;
//         secondLarget=largest;
//         largest=arr[i];
//     }else if(arr[i]>secondLarget)
//     {
//         thirdLarget = largest;
//         secondLarget=arr[i];
//     }else if(arr[i]>thirdLarget)
//     {
//         thirdLarget=arr[i];
//     }
// }
// console.log(largest);
// console.log(secondLarget);
// console.log(thirdLarget);
// const array =[1,5,23,87,32,12,88,45,39];
// let a = array.sort()
// let secondlarget = array.length;

// console.log(array[secondlarget-2]);



//MAP EXAMPLES

// const arr = [1,2,3,4,5];
// const newArry = arr.map((elements)=>{
//     return elements*2;
// })
// console.log(newArry);






// const fruits = ['apple','orange','mango']
// const out = fruits.map((fruit)=>{
//    return fruit.charAt(0).toUpperCase() + fruit.slice(1)
// })
// console.log(out);





// const people = [
//     {name:'suhail',age:'25'},
//     {name:'riswana',age:'28'},
//     {name:'akku',age:'22'},
// ];

// const names = people.map((person)=>{
//    return person.name.charAt(0).toLocaleUpperCase()  + person.name.slice(1);
// })
// console.log(names);





// const arr = [10,20,30,40,50];
// const newArry = arr.map((elements,index)=>{
//     return elements*index;

// })
// console.log(newArry);






// const array = [2,4,5,3,7,8,9,1];
// const doubleEven = array.filter((num)=> num%2===0).map((element)=>{
//    return element*2
// })
// console.log(doubleEven);





// const arry = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// const square = arry.map((row)=>{
//     return row.map((Element)=>{
//       return Element ** 2
//     });
// })

// console.log(square);


// const string = ['suhail','akku','aravind','riswana','shiyas','jan'];
// const soeted = string.filter((names)=>names.length>=5).map((x)=>{
//     return x.charAt(0).toUpperCase()+ x.slice(1);
// })

// console.log(soeted);







// const numbers =[1,2,3,4,5,6,7,8,9];
// const result = numbers.map((num)=>num%2===0 ? 'even' : 'odd');
// console.log(result);



// const words =['hello','world','javasacipt'];

// const result = words.map((word)=>{
//     return `${word.toUpperCase()} =LENGTH: ${word.length}`
// })
// console.log(result);


// const product = [
//     {name:'suhail', price:30},
//     {name:'anu', price:50},
//     {name:'varma', price:55},
//     {name:'yadhu', price:32}
// ];

// const findProduct = product.filter((x)=>x.price >= 50)
// console.log(findProduct);







// const numbers = [100,200,300,400,500,600,700,800,900,1000];
// const newNum = numbers.filter((num)=>{
//     return num >= 300 && num <=900
// })
// console.log(newNum);





//Unique

// const dupli = [1,3,4,6,8,7,8,9,1,12,43,76,43];
// const unique = [...new Set(dupli)];
// console.log(unique);




