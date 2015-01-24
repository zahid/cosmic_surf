#pragma strict

var controller_num : String = "1";
var surfer_prefab : Transform;
var state : String = "standby";
private var recovery_start_time : float;
private var surfer_instance : Transform;

var button_prefab:Transform;

function Start () {
}

function Update () {
	// Debug.Log(Input.GetAxis("horiz"+controller_num));
	if(state == "standby"){
		if(Input.GetButtonUp('start1')){
			state = "recovery";
			surfer_instance = Instantiate(surfer_prefab,Vector3(0,-5,0),Quaternion.identity);
			var player_instance : playerjs = surfer_instance.GetComponent('playerjs');
			player_instance.horiz_axis='horiz'+controller_num;
			player_instance.vert_axis ='vert' +controller_num;
			recovery_start_time = Time.time;
		}
	} else if(state=="recovery") {
		if(Input.GetButtonUp('select1')){
			GameObject.Destroy(surfer_instance.gameObject);
			state = "standby";
		}	
	}
}