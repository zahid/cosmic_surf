#pragma strict

function Start () {

}

function OnTriggerEnter (other:Collider) {
    if(other.tag=="Player"){
        Destroy(gameObject);
    }

    DeSpawn();
}

    function DeSpawn(){
        yield WaitForSeconds(20);
        Destroy(gameObject);
    }