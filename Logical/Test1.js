const array = [
    {p1: 2, a1: 3},
    {p1: 4, a1: 4},
    {p1: 5, a1: 6},
    {p1: 7, a1: 8},
    {p1: 9, a1: 10}
];

const even = array.reduce((sum,elements)=>{
    Object.values(elements).forEach(elements=>{
        if(elements%2 === 0)
        {
            sum += elements;
        }
    })
    return sum;
},0);
console.log(even);
