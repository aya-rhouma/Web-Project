function confirmation() {
    var msg = document.getElementById("confirm");
    var btn = document.getElementById("pay");
    btn.style.transition = "opacity 0.5s";
    btn.style.opacity = "0";
    msg.style.visibility = "visible";
    msg.style.opacity = "0";
    msg.style.opacity = "1"
}

function confirm(id) {
    let name = document.getElementById(id);
    if (name.value === "") {
        name.style.backgroundColor = "#FF0000";
    } else {
        name.style.backgroundColor = "#008000";
    }
}

