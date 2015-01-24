#pragma strict

function Start () {
	var s : String;
	for( s in Input.GetJoystickNames()){
		Debug.Log(s);
	};

}

function Update () {

}