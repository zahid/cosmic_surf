#pragma strict

var Score : GUIText;
var ResourceCount : float;

function Start () {
    ResourceCount = 0;
}

function Update () {
    Score.text= "$ " + Mathf.Round(ResourceCount);

    if(Input.GetKey(KeyCode.Space)){
        ResourceCount += 1;    
    }

    if(ResourceCount < 1){
        ResourceCount = 0;    
    }

    if(ResourceCount > 100){
        ResourceCount = 100;
    }
}

function Scored(){
	ResourceCount+=1;
	return ResourceCount;
}

/*function OnTriggerEnter(Other:Collider){
    if (Other.tag.Equals("OPP")) {
        ResourceCount = ResourceCount / 2;
    }
    if (Other.tag.Equals("Resource")) {
    	Debug.Log("+1");
    	GameObject.Destroy(Other.gameObject);
        ResourceCount += 1;    
    }
}*/