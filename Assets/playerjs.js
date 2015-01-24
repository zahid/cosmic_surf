#pragma strict

var rad : float = 0.0; // current radial position (radians)
var alpha : float = 0.0; // angular velocity (radians/s)
var radius : float = 5.0; // radius of warp tunnel (meters)

var alpha_max : float = 0.05; // max angular vel (m/s)
var input_scale : float = 0.01; // max change to alpha from input (alpha/sec)

function Start () {

}

function Update () {
	alpha = Mathf.Clamp(alpha +(Input.GetAxis("Horizontal")*input_scale*Time.deltaTime),-alpha_max,alpha_max);
	rad = rad+alpha*Time.time;
	transform.position = Vector3(radius*Mathf.Cos(rad),radius*Mathf.Sin(rad),0);
	transform.rotation = Quaternion.AngleAxis((-Input.GetAxis ("Horizontal")*30)+360*rad/(2*Mathf.PI),Vector3.forward);
}