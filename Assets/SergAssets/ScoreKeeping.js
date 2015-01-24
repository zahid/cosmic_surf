#pragma strict

var Score:GUIText;
var ResourceCount:float;

function Start () {
    ResourceCount=4.6;

}

function Update () {
    Score.text=""+Mathf.Round(ResourceCount);

    if(Input.GetKey(KeyCode.Space)){
        ResourceCount+=2;    
    }

    if(ResourceCount<1){
        ResourceCount=0;    
    }

    if(ResourceCount>100){
        ResourceCount=100;
    }
}

function OnTriggerEnter(Other:Collider){
    if(Other.tag=="OPP"){
        ResourceCount-=ResourceCount/2;
    }
    if(Other.tag=="Resource"){
        ResourceCount+=2;    
    }
}