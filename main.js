Prediction1="";
Prediction2="";
Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function captureimg(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="img" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/94SE68g9-/model.json',Modelloaded);
function Modelloaded(){
    console.log("Your Model Is Successfully Loaded");
}
function speak(){
    var Synth=window.SpeechSynthesis;
    Speak_1="The First Prediction Is"+Prediction1;
    Speak_2="The Second Prediction Is"+Prediction2;
    var utterthis=new SpeechSynthesisUtterance(Speak_1+Speak_2);
    Synth.speak(utterthis);
}