#pragma strict

var flot_prefab : Transform; // used to instantiate enemies
var last_flot : float; // time of the last spawn of a flotsam (s)
var spawn_period : float = .5; // period between spawns, (s)

function Start () {
	last_flot = Time.time; // init the time
}

function spawn_flot(){
	var flot0 : Transform;
	var rad : float = Mathf.PI*2*Random.value; // spawn location in radians
	flot0 = Instantiate(flot_prefab,transform.position+Vector3(5*Mathf.Cos(rad),5*Mathf.Sin(rad),0),Quaternion.identity);
	flot0.parent = transform;
}

function Update () {
	if((Time.time-last_flot)>(spawn_period)){
		spawn_flot();
		last_flot = last_flot+spawn_period;
	}
}