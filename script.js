let istatus = document.querySelector("h5");
let btn = document.querySelector("#add");
// let removeFriend = document.querySelector("#remove");

let click = 0;
btn.addEventListener("click", function () {
    if (click === 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "red";
        click = 1;
    }
    else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "green";
        click = 0
    }
});

// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red";
// });