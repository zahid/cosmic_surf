using UnityEngine;
using System.Collections;

public class song_control : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyUp (KeyCode.M)){
			//how to mute? if(audioSource.mute){audioSource.mute = false;}else{audioSource.mute=true;}
		}
	}
}
