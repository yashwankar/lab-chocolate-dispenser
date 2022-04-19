var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolat, color, count)
{
    if(count<=0)
        return 'Number cannot be zero/negative';
    for(var i=0;i<count;i++)
        chocolat.unshift(color);
    chocolates = chocolat; //updating the original list
    return chocolat;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolat, number){
    var removed=[];
    if(number<=0)
        return 'Number cannot be zero/negative';
    else if(number>chocolat.length)
        return 'Insufficient chocolates in the dispenser';
    else{
        for(var i=0;i<number;i++)
            removed[i]=chocolat.shift();
    }
    chocolates = chocolat; //updating the original list
    return removed;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolat,number){
    var dispensed=[];
    if(number<=0)
        return 'Number cannot be zero/negative';
    else if(number>chocolat.length)
        return 'Insufficient chocolates in the dispenser';
    else{
        for(var i=0;i<number;i++)
            dispensed[i] = chocolat.pop();
    }
    chocolates = chocolat; //updating the original list
    return dispensed;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolat,number, color){
    var dispensed=[],count=0;
    if(number<=0)
        return 'Number cannot be zero/negative';
    else if(number>chocolat.length)
        return 'Insufficient chocolates in the dispenser';
    else{
        for(var i=(chocolat.length-1);i>=0;i--){
            if(count<number && color==chocolat[i]){
                dispensed[count]=chocolat.pop();
                count++;
            }
        }
    }
    chocolates = chocolat; //updating the original list
    return dispensed;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates)
{
    let count=[],j=0, obj={};
    for(let i of chocolates){
        if(!obj[i]){
            obj[i]=1;
        }else{
            obj[i]++;
        }
    }
    for(let i in obj){
        count[j]=obj[i];
        j++;  
     }
    return count;
  }

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolat) {
    let colors = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    let count = noOfChocolates(chocolat);
    let obj = [];
    for(let i=0; i<count.length; i++){
        let pair = {}
        pair.name = colors[i];
        pair.value = count[i];
        obj.push(pair)
    }

    obj.sort((a, b) => {
        if(a.value > b.value) return -1;
        if(a.value < b.value) return 1;
        if(a.name > b.name) return 1;
        return -1;
    });
    let moco = [];
    for(let m=0; m<obj.length; m++){
        for(let n=0; n<obj[m].value; n++)
            moco.push(obj[m].name);
    }
    chocolates = moco;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolat,number, color, finalColor)
 {
    if (chocolat.length === 0) {
        return [];
    }
    if (number <= 0)
        return "Number cannot be zero/negative";
    var count = 0;
    while (count < number) {
        let pos = chocolat.indexOf(color);
        if (pos == -1) return chocolat;
        if (color === finalColor) {
            return "Can't replace the same color chocolates";
        }
        chocolat.splice(pos, 1, finalColor);
        count++;
    }
    chocolates = chocolat; //updating the original list
    return chocolat;
}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolat, color, finalcolor) {
    if (chocolat.length === 0) {
        return [0, []];
    }
    var count = 0;
    if (color == finalcolor) {
        return "Can't replace the same chocolates";
    }
    for (let i = 0; i < chocolat.length; i++) {
        if (chocolat[i] === color) {
            chocolat[i] = finalcolor;
        }
    }
    for (let j = 0; j < chocolat.length; j++) {
        if (chocolat[j] === finalcolor)
            count += 1;
    }
    chocolates = chocolat; //updating the original list
    return [count, chocolat];
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolat, color){
    for(let item=0; item<chocolat.length; item++){
        if(chocolat[item] === color)
            return chocolat.splice(item, 1);
    }
    chocolates = chocolat; //updating the original list
    return color + " color NOT FOUND!";
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolat, number){
    if(number > chocolat.length) 
        return "zero! these number of candy are not available, you'll get tooth ache";
    if(number <= 0)
        return "We need candy to make beautiful rainbow candy";
    let colors = ["green", "silver", "blue", "crimson", "purple", "red", "pink", "rainbow"];
    // let count = noOfChocolates(chocolat);
    let obj = [];
    for(let i=0; i<colors.length; i++){
        let pair = {}
        pair.name = colors[i];
        // pair.value = count[i];
        pair.currentCount = 0;
        obj.push(pair)
    }
    let rainbowCandy = 0;
    let index = 0;

    for(let i=0; i<number; i++){
        if(chocolat[i] === 'rainbow') continue;
        index = colors.indexOf(chocolat[i]);
        if(obj[index].currentCount < 3){
            obj[index].currentCount++;
        }
        if(obj[index].currentCount >= 3){
            obj[index].currentCount = 0;
            rainbowCandy++;
            chocolat.splice(i+1, 0, "rainbow");
            number++; //due to addition of rainbow candy
        }
    }
    chocolates = chocolat; //updating the original list
    return rainbowCandy;
}