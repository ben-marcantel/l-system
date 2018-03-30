const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const button = document.getElementById('button');
const button1 = document.getElementById('button1');
const slider = document.getElementById('slider');






let currentString = "X";
let nextString = "";
let y = 10;
let x = y/3;
let lastPointY = [];
let lastPointX = [];



let generate = ()=>{
    for (let i = 0; i<currentString.length; i++){
        let chAt = currentString.charAt(i);
        if (chAt == "X"){
            nextString += "F[-X][X]F[-X]+FX";
        } else if (chAt == "F"){
            nextString += "FF";
        }
    } 
    currentString += nextString;
};

let interpret = ()=>{
    for (let i =0; i<currentString.length; i++){
        let decoder = currentString.charAt(i);
        
        if (decoder == "F"){ 
            c.closePath() 
            y+=1
            // console.log(slider.value)
            c.lineTo(x,y+10)
            lastPointY.push(y)
            lastPointX.push(x)
        } else if (decoder == "X"){
            
        } else if (decoder == "+"){
            c.rotate(26 * Math.PI/180)
            c.lineTo(x-y,y+10)
            lastPointY.push(y)
            lastPointX.push(x)
        } else if (decoder == "-"){
            
            c.rotate(-(24 * Math.PI/180))
            c.lineTo(x+x,y+10)
            lastPointY.push(y)
            lastPointX.push(x)
            
        } else if (decoder == "["){
           c.lineTo(lastPointX.push(x),lastPointY.push(y))
         
        } else (decoder == "]")
        c.lineTo(lastPointX.slice(),lastPointY.slice())
       
    }   
};


let draw = ()=>{
    console.log(currentString);
    c.beginPath();
    interpret();
    c.strokeStyle = "rgb(255,0,200)";
    c.stroke();
    c.translate(canvas.height/(2/3),canvas.width/(3/4));
    c.scale(1/2,1/2)
    
    
};


let magic = ()=>{
    for (let i=0; i<3;i++){
        generate(); 
        draw();
        
    };
};

magic();
const reset = ()=> {
    currentString = ''
}

const sliderVal= ()=>{    
    c.setTransform(1,0,0,1,0,0);
    reset();
    generate()
    draw()
    // c.translate(canvas.height/(2/3),canvas.width/(3/4));
    
}

slider.addEventListener("input", sliderVal());


 
