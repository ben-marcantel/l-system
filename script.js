const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const button = document.getElementById('button');

let currentString = "X";
let nextString = "";





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
        
        let x = 0;
        let y = 100;
        let newX = x;
        let newY = y;
        let currentX = "";
        let currentY = "";
        
        if (decoder == "F"){ 
            // F means "draw forward
            c.restore(); 
            c.lineTo(newX,newY);
            c.save();

            // c.closePath();
            
        } else if (decoder == "X"){
            // X does not correspond to any drawing action and is used to control the evolution of the curve. 
            
            c.rotate((i * Math.PI)/ 180);
            c.closePath();

        } else if (decoder == "+"){
            // − means "turn left 25°"
            newX = x;
            newY = y + (y/2);
            c.lineTo(newX,newY);
            c.closePath();
            c.rotate(-(45 * Math.PI / 180));
            
        } else if (decoder == "-"){
            // + means "turn right 25°"
           
            newX = x;
            newY = y + (y/2);
            c.lineTo(newX,newY);
            c.closePath();
            c.rotate(45 * Math.PI / 180);
            
            
        } else if (decoder == "["){
            // The square bracket "[" corresponds to saving the current values for position and angle,
            // c.save();
        
        } else (decoder == "]")
        // which are restored when the corresponding "]" is executed
            c.restore(); 
            
    }   
};


let draw = ()=>{
    console.log(currentString);
    c.beginPath();
    // c.lineTo(canvas.width/2,canvas.height/2);
    c.translate(canvas.width/2,canvas.height/2);   
    interpret();
    c.strokeStyle = "rgb(255,0,200)";
    c.stroke();
};


let magic = ()=>{
    for (let i=0; i<1;i++){
        generate(); 
        draw();
    };
};


button.addEventListener("click", magic);

 
