using UnityEngine;
using System.Collections;

public class flotsam : MonoBehaviour {

	public Transform piece_prefab;
	float last_flot;

	void create_flotsam(){
		Transform yo;
		float rad = Mathf.PI*2*Random.value;
		yo = Instantiate (piece_prefab,transform.position+new Vector3(5*Mathf.Cos (rad),5*Mathf.Sin (rad),0f),transform.rotation) as Transform;
	}
	
	void Start () {
		last_flot = Time.time;
	}
	
	// Update is called once per frame
	void Update () {
		if((Time.time - last_flot)>(100/60)){
			last_flot = (last_flot+100/60);
			create_flotsam ();
		}
	
	}
}
