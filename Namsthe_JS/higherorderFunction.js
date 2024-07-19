

const radius = [2,4,6,8];
const calcArea = () => {
    const output = [];
    for(i=0;i<radius.length;i++)
    {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output
}
console.log(calcArea(radius));

const calcDiameter = () => {
    const output = [];
    for(i=0;i<radius.length;i++)
    {
        output.push(2* radius[i]);
    }
    return output
}
console.log(calcDiameter(radius));