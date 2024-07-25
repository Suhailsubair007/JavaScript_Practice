const list = [2,3,4,1,1,4,6,7,8,9,1,2,3,4,1];
const toFind = 1;
let count =0;
let i;

for(let i = 0; i<list.length; i++)
{
    if(list[i]==toFind)
    {
        count++;
    }
}
console.log(`${toFind} was repeated ${count} times`);






// using filter methode

// const list = [2, 3, 4, 1, 1, 4, 6, 7, 8, 9, 1, 2, 3, 4, 1];
// const toFind = 1;

// const count = list.filter((item) =>{
//     return item===toFind;
// }).length;

// console.log(`${toFind} was repeated ${count} times`);

