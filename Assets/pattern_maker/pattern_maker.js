﻿#pragma strict

var spawn_prefab:Transform;
var tube_radius:float =5.0;

// init variables
var duration:float; // time to play the pattern
var number:int; // count
var spacing:float; // space between n
var period:float; // time between waves
var offset:float; // offset between waves
var start_position:float; // where to start
var state:String; // rando, start, empty

// transients
var start_time:float;
var last_position:float;
var last_time:float;

function Start () {
	
	/*
	// spiral test
	state = 'line';
	number = 2;
	start_position = 0;
	offset = Mathf.PI*2/16;
	period = 168/120;
	spacing = Mathf.PI*2/16;
	
	last_time = Time.time;
	last_position = start_position;
	*/
	
}

function set_pattern(
	state_:String,
	period_:float,
	number_:int,
	start_position_:float,
	offset_:float,
	spacing_:float,
	duration_:float){
	state = state_;period = period_;number = number_;offset = offset_;spacing = spacing_;duration = duration_;
	start_time = Time.time;
	last_time = Time.time-period_;
	last_position = start_position_;
}

function spawn_at_rad(rad:float){
	var spawn : Transform = Instantiate(spawn_prefab,
		transform.position + Vector3( tube_radius * Mathf.Cos(rad), tube_radius * Mathf.Sin(rad), 0),
		Quaternion.identity);
	spawn.parent = transform;
	return spawn;
}

function stop_pattern(){
	state = 'empty';
	}

function Update () {
	if((Time.time-start_time)>duration){
	//Debug.Log(Time.time-start_time);
			stop_pattern();
	}
	if(state=='rando'){
		if((Time.time-last_time)>period){
			last_time = last_time+period;
			spawn_at_rad(2*Mathf.PI*Random.value);
		}
	} else if (state=='line') {
		if((Time.time-last_time)>period){
			last_time = last_time+period;
			last_position = last_position + offset;
			var i:int;
			for(i=0;i<number;i++){
				spawn_at_rad(last_position+i*spacing);
			}
		}
	}
}