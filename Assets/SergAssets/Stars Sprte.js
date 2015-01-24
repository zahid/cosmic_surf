#pragma strict

var scrollSpeed : float = 0.5;
private var offset :float = 0.0;
function Update () {
    offset = offset+Time.deltaTime * scrollSpeed;
    renderer.material.SetTextureOffset ("_MainTex", Vector2(0,offset));
}