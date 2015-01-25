#pragma strict

var asteroid_maker : pattern_maker;
var sanddollar_maker: pattern_maker;

var active_duration:float;
var level : int;
var next_level_time : float;

/* set_pattern args
state_:String,
period_:float,
number_:int,
start_position_:float,
offset_:float,
spacing_:float,
duration_:float
*/

function n_player_spiral(players:int,offset:float,period:float){
	var start_rad : float = Mathf.PI*2*Random.value;
	sanddollar_maker.set_pattern('line',period,players,  start_rad,offset,2*Mathf.PI/players,active_duration-1);
}

function n_player_spiral_just_ast(players:int,offset:float,period:float){
	var start_rad : float = Mathf.PI*2*Random.value;
	asteroid_maker.set_pattern('line',period,players,  start_rad,offset,2*Mathf.PI/players,active_duration-1);
}

function n_player_spiral_with_ast(players:int,offset:float,period:float){
	var start_rad : float = Mathf.PI*2*Random.value;
	sanddollar_maker.set_pattern('line',period,players,  start_rad,offset,2*Mathf.PI/players,active_duration-1);
	asteroid_maker.set_pattern('line',period,players,  (Mathf.PI/players)+start_rad,offset,2*Mathf.PI/players,active_duration);
}

function arc(players:int,offset:float,period:float){
	var start_rad : float = Mathf.PI*2*Random.value;
	sanddollar_maker.set_pattern('line',period,players,start_rad,offset,Mathf.PI/8,active_duration-1);
}

function arc_ast(players:int,offset:float,period:float){
	var start_rad : float = Mathf.PI*2*Random.value;
	asteroid_maker.set_pattern('line',period,players,start_rad,offset,Mathf.PI/8,active_duration-1);
}

function rings(period:float,count:float){
	sanddollar_maker.set_pattern('line',period,count,0.0,0.0,(Mathf.PI*2)/count,active_duration-1);
}

function random_sand(period:float){
	sanddollar_maker.set_pattern('rando',period,1,0.0,0.0,0.0,active_duration-1);
}

function random_asteroid(period:float){
	asteroid_maker.set_pattern('rando',period,1,0.0,0.0,0.0,active_duration-1);
}

function Start () {
	active_duration = 45.714286/4;
	level = 0;
	next_level_time = Time.time+active_duration/2;
	//n_player_spiral_with_ast(4,Mathf.PI/8,168/120);
	//rings(active_duration/3,16);
}

function Update () {
	if(Time.time>next_level_time){
		level = level+1;
		Debug.Log('Level '+level);
		if(0==level%5){
			next_level_time = next_level_time+active_duration/2;
		}else{
			next_level_time = next_level_time+active_duration;
		}
		// GET PLAYER COUNT HERE
		var player_count = Mathf.Max(1,GameObject.FindGameObjectsWithTag('Player').Length);
		if(level == 1){
			n_player_spiral(player_count,0.0,160/60);
		} else if(level ==2){
			n_player_spiral_just_ast(1,0.0,160/60);
		} else if(level ==3){
			rings(2*160/60,16);
		} else if(level ==4){
			n_player_spiral(player_count,Mathf.PI/8,160/60);
		} else if(level ==5){
			// rest
		} else if(level ==6){
			random_sand(160/60);
		} else if(level ==7){
			random_asteroid(160/60);
		} else if(level ==8){
			n_player_spiral(player_count,Mathf.PI/8,160/60);
		} else if(level ==9){
			n_player_spiral_with_ast(player_count,Mathf.PI/8,160/60);
		} else if(level ==10){
			// rest
		} else if(0==level%5){
			// always reset on mod five
		} else {
			random_asteroid(160/(120+Mathf.Min(level,30)));
			random_sand(160/(120+Mathf.Min(level,30)));
			if(level==15){
				level=0;
			}
		}
	}
}