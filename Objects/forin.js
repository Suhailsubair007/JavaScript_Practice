let list = {
    name:"suhail",
    age:22,
    place:"Kottayam",
    Education:{
        collage:"CUSAT",
        course:"B Tech",
        specialization:"IT"
    }
};

for(let key in list.Education){ 
    console.log(key,list.Education[key]);
}