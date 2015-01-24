#pragma strict
// stupid straight flying enemy
var z_speed:float = 5; // fly speed (m/s)

private var spawn_time:float; // time of creation
private var flight_time:float; // time expected in flight

function Start () {
	rigidbody.velocity = Vector3(0,0,-z_speed);
	spawn_time  = Time.time;
	flight_time = (transform.position.z)/z_speed;
}

function Update () {
	if(transform.position.z<Camera.main.transform.position.z){
		GameObject.Destroy(gameObject);
	}
	if((Time.time - spawn_time)>2*(flight_time)){
		GameObject.Destroy(gameObject);
	}
}