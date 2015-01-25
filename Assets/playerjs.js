#pragma strict

var horiz_axis : String;
var vert_axis : String;

var rad : float = 0.0; // current radial position (radians)
var alpha : float = 0.0; // angular velocity (radians/s)
var radius : float = 5.0; // radius of warp tunnel (meters)

var alpha_max : float = 0.05; // max angular vel (m/s)
var input_scale : float = 0.01; // max change to alpha from input (alpha/sec)

var z_level : float = 0.0; // z location of surfer
var z_vel : float = 0.0; // speed in the z axis
var z_damping : float = 5.0; // damping (m/s/s)
var z_input_scale:float = 5.0; // scale the input

function Start () {

}

function OnTriggerEnter(collision:Collider){
	Debug.Log(collider);
}

function Update () {
	//  angular updates
	alpha = Mathf.Clamp(alpha +(Input.GetAxis(horiz_axis)*input_scale*Time.deltaTime),-alpha_max,alpha_max);
	rad = rad+alpha*Time.deltaTime;
	// z updates
	z_vel = z_input_scale * Input.GetAxis(vert_axis);
	// position updates
	transform.position = Vector3(
		radius*Mathf.Cos(rad),
		radius*Mathf.Sin(rad),
		Mathf.Clamp(
			transform.position.z+z_vel*Time.deltaTime,
			0,
			3
		)
	);
	transform.rotation = Quaternion.AngleAxis((-Input.GetAxis (horiz_axis)*30)+360*rad/(2*Mathf.PI),Vector3.forward);
}