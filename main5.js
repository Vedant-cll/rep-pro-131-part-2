var status="";

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}

    
    function preload(){
        img=loadImage("LEGO-Ideas-Ship-in-a-Bottle-21313-rear.webp");
    }
    function modelLoaded(){
        console.log("modelLoaded");
    status = true ;
    objectDetector.detect(img, gotResult);
    }    
    function gotResult(error, results){
        if(error){
            console.log(error);
        }
            
        console.log(results);
    }

    function draw(){
        image(img,0,0,600,600);
        }

