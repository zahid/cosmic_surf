#pragma strict

var Score:GUIText;
var ResourceCount:float;

function Start () {
    ResourceCount=0;

}

function Update () {
    Score.text=""+ResourceCount;

    if(Input.GetKey(KeyCode.Space)){
        ResourceCount+=2;    
    }

    if(ResourceCount<0){
        ResourceCount=0;    
    }

    if(ResourceCount>100){
        ResourceCount=100;
    }
}

function OnTriggerEnter(Other:Collider){
    if(Other.tag=="OPP"){
        ResourceCount-=20;
    }
    if(Other.tag=="Resource"){
        ResourceCount+=2;    
    }
}