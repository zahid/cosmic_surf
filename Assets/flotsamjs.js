#pragma strict

var flot_prefab : Transform; // used to instantiate enemies
var last_flot : float; // time of the last spawn of a flotsam (s)
var spawn_period : float = 2; // period between spawns, (s)

var flot_sand_dollar : Transform;
var last_sand_dollar : float;
var sand_dollar_spawn_period : float = 5;

function Start () {
	last_flot = Time.time; // init the time
	last_sand_dollar = Time.time; // init the time
}

function spawn_flot() {
	var flot0 : Transform;
	var rad : float = Mathf.PI * 2 * Random.value; // spawn location in radians
	flot0 = Instantiate( flot_prefab , transform.position + Vector3( 5 * Mathf.Cos(rad), 5 * Mathf.Sin(rad), 0), Quaternion.identity);
	flot0.parent = transform;
}

function spawn_sand_dollar() {
	var sand0 : Transform;
	var rad : float = Mathf.PI * 2 * Random.value; // spawn location in radians
	sand0 = Instantiate( flot_sand_dollar , transform.position + Vector3( 5 * Mathf.Cos(rad), 5 * Mathf.Sin(rad), 0), Quaternion.identity);
//	sand0.gameObject.tag = "Resourceee";
	sand0.parent = transform;
}

function Update () {
	if((Time.time-last_flot)>(spawn_period)){
		spawn_flot();
		last_flot = last_flot+spawn_period;
	}
	
	if ( (Time.time - last_sand_dollar) > (sand_dollar_spawn_period) ) {
		spawn_sand_dollar();
		last_sand_dollar = last_sand_dollar + sand_dollar_spawn_period;
	}
}