#pragma strict

var scrollSpeed : float = 0.5;

var elapsedTime: float;
var elapsedBeats: float;

var secondsPerCycle:float;

var currentSecond:float;
var currentBeat:float;

var beatsPerCycle:float;

var MaxVel:float;
var MinVel:float;
var sysVelocity:float;
var Delta:float;
var starSpeed:float;

var offset : float=0;

function Start() {
    sysVelocity=0;
    MinVel=-2;
    MaxVel=5;
    starSpeed = 10;
}

function Update () {
    offset = offset+ Time.deltaTime* sysVelocity;
    renderer.material.SetTextureOffset ("_MainTex", Vector2(0,offset)); 
    CalculateSysVel();
}

function CalculateSysVel(){

    beatsPerCycle = 144;

    elapsedTime = Time.time;
    elapsedBeats = beatsPerCycle / 60.0 * elapsedTime;

    secondsPerCycle= 144 / 168.0 * 60;



    currentBeat = elapsedTime % secondsPerCycle;


    if(currentBeat<=10&&currentBeat>0){
        // rest
        sysVelocity=0;
            
    }else if(currentBeat<=16&&currentBeat>10){
        //Pullback
        Delta=MinVel-0;
        sysVelocity=Delta*(currentBeat-10)/6.0;
    }else if(currentBeat<=19&&currentBeat>16){
        //surge
        Delta=MaxVel-MinVel;
        sysVelocity=MinVel+Delta*(currentBeat-16)/3.0;
    }else if(currentBeat<=141&&currentBeat>19){
        //Ride
        sysVelocity=MaxVel;
    }else if(currentBeat<=144&&currentBeat>141){
        //Crash
        Delta=0-MaxVel;
        sysVelocity=MaxVel+Delta*(currentBeat-141)/3.0;
        elapsedBeats=0;
    }
    return sysVelocity;

}
