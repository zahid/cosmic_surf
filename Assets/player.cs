using UnityEngine;
using System.Collections;

public class player : MonoBehaviour {

	float rad = 0.0f;
	float rem = 0.0f;
	float radius = 5.0f;

	void Start () {
	
	}

	void Update () {
		rem = Mathf.Clamp (rem +(Input.GetAxis ("Horizontal")/200),-0.05f,0.05f);
		rad = rad+ rem;
		transform.position = new Vector3(radius*Mathf.Cos (rad),radius*Mathf.Sin (rad),0);
		transform.rotation = Quaternion.AngleAxis((-Input.GetAxis ("Horizontal")*30)+360*rad/(2*Mathf.PI),Vector3.forward);
	}
}
