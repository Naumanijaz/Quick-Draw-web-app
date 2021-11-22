function setup() {
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth=window.speechSynthesis;
    }
    function draw(){
    strokeWeight(14)
    stroke("blue")
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
    }
    function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
    }
    function clearcanvas(){
        background("white")
    }
    function classifycanvas(){
        classifier.classify(canvas,gotresults)
    } 
    function gotresults(error,results){
        if (error){
            console.error(error)
        }
        console.log(results);
        document.getElementById("label").innerHTML='label '+results[0].label
        document.getElementById("confidence").innerHTML='confidence '+results[0].confidence
    }
    Array[
        "rain","pen","cloud","cookie","dog","cow","mouse","phone","watch","clock"
    ]
    random_no = Math.floor((Math.random()*array_1.length)+1)
    Element_of_array = array_1[random_no]