let calculate =(a,b,operation)=>{
    let result="";
    if(operation=="sum"){
        result=a+b;
    }
    if(operation=="mul"){
        result=a*b;
    }
    return result;
};
let c1 = calculate(10,20,"sum");
console.log(c1);
let c2 = calculate(10,20,"mul");
console.log(c2);


