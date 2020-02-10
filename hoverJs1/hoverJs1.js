document.body.style.cursor = "none";

var cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

var follow = document.createElement("div");
follow.classList.add("follow");
document.body.appendChild(follow);

function move (obj, event) {
    obj.style = "";
    obj.style.top = event.clientY + "px";
    obj.style.left = event.clientX + "px";
}

if (cursor) {
    window.addEventListener("mousemove", (event) => {
        var e = event;
        var target = e.target;
        
        if (target.tagName == "A") {
            cursor.style.background = "transparent";

            follow.style.top = target.offsetTop + "px";
            follow.style.left = target.offsetLeft + "px";
            follow.style.width = target.clientWidth + "px";
            follow.style.height = target.clientHeight + "px";

            follow.classList.add("on-focus");
        } else {
            move(cursor, e);
            move(follow, e);
            follow.classList.remove("on-focus");
        }
    });
}