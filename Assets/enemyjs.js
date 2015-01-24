#pragma strict
// stupid straight flying enemy
var z_speed:float = 5; // fly speed (m/s)

function Start () {
	rigidbody.velocity = Vector3(0,0,-z_speed);
}

function Update () {
	if(transform.position.z<Camera.mainCamera.transform.position.z){
		GameObject.Destroy(gameObject);
	}
}