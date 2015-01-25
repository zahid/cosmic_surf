#pragma strict

function Start () { }

function Update () {

    animation.CrossFade("Idle");
    if(Input.GetAxis ("Horizontal")){
    	animation.CrossFade("Idle");
    }
}