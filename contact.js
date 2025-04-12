function sendMessage(){
    var msg = document.getElementById("send");
    var btn = document.getElementById("submit");
    btn.style.transition = "opacity 0.5s";
    btn.style.opacity = "0";
    msg.style.visibility = "visible";
    msg.style.transition = "opacity 0.5s";
	msg.style.opacity = "1";
}