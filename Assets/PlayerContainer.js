#pragma strict

var controller_num : String = "1";
var surfer_prefab : Transform;
var state : String = "standby";
var last_rad : float = 0.0;
private var recovery_start_time : float;
private var dying_start_time : float;
private var surfer_instance : Transform;

var button_prefab:Transform;

function Start () {
	last_rad = 2*Mathf.PI*Random.value;
}

function Update () {
    var player_instance :playerjs;
	// Debug.Log(Input.GetAxis("horiz"+controller_num));
	if(state == "dead"){
		if(Input.GetButtonUp('start'+controller_num)){
			state = "recovery";
			surfer_instance = Instantiate(surfer_prefab,Vector3(0,-5,0),Quaternion.identity);
			surfer_instance.name = "surfer"+controller_num;
			//surfer_instance.GetComponentInChildren(Material).color = Color.red;
			player_instance = surfer_instance.GetComponent('playerjs');
			player_instance.rad = last_rad;
			player_instance.horiz_axis='horiz'+controller_num;
			player_instance.vert_axis ='vert' +controller_num;
			recovery_start_time = Time.time;
		}
	} else if(state=="recovery") {
		if((Time.time-recovery_start_time)>2){
			state = "active";
		}
		if(Input.GetButtonUp('select'+controller_num)){
			player_instance = surfer_instance.GetComponent('playerjs');
			last_rad = player_instance.rad;
			GameObject.Destroy(surfer_instance.gameObject);
			state = "dying";
			dying_start_time = Time.time;
		}	
	} else if(state=="active"){
		if(Input.GetButtonUp('select'+controller_num)){
			player_instance = surfer_instance.GetComponent('playerjs');
			last_rad = player_instance.rad;
			GameObject.Destroy(surfer_instance.gameObject);
			state = "dying";
			dying_start_time = Time.time;
		}	
	} else if(state=="dying"){
		if((Time.time-dying_start_time)>1){
			state = "dead";
		}
	}
}