const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = 1080;
canvas.height = 720;


let currentString = "X";
let nextString = "";

let generate = ()=>{
    for (let i = 0; i<currentString.length; i++){
        let chAt = currentString.charAt(i);
        if (chAt == "X"){
            nextString += "F---[-X][X]+F--++F[-X]+FX";
        } else if (chAt == "F"){
            nextString += "FF";
        }
    } 
    currentString += nextString;
};

c.translate(canvas.height/2,canvas.width/2);
let interpret = ()=>{
    for (let i =0; i<currentString.length; i++){
        let decoder = currentString.charAt(i);
        if (decoder == "F"){  
            c.beginPath();
            c.moveTo(0,1);
            c.lineTo(0,40/6);
            c.strokeStyle = "rgb(0,20,240)";            
            c.stroke();
            c.translate(0,40/6)
        } else if (decoder == "X"){
            //nothing here only effects growth over time
        } else if (decoder == "+"){
            c.rotate(26 * Math.PI/180)   
            c.strokeStyle = "rgb(40,40,250)";            
            c.stroke();         
        } else if (decoder == "-"){
            c.rotate(-26 * Math.PI/180)    
            c.strokeStyle = "rgb(40,60,220)";            
            c.stroke();        
        } else if (decoder == "["){
            c.save();
             
        } else (decoder == "]")
            c.restore();
            
    }   
};

let draw = ()=>{
    console.log(currentString);
    c.beginPath();
    interpret();
};

let magic = ()=>{
    for (let i=0; i<5;i++){
        generate(); 
        draw();
        
    };
};

magic();



 
