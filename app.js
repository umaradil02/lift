const lift = document.querySelector("#lift");
let floor = document.querySelectorAll(".floor");
const text = document.querySelector(".text");
const liftDoors = document.querySelector('.lift-doors');
const classes = ["ground", "first", "second", "third", "four"]
let moving = false
floor.forEach((key, index) => {
    key.addEventListener("click", () => {
        if(!moving){
            moving = true
        lift.src = "liftclose.jpg";
        lift.className = '';
        lift.classList.add(classes[index])
            key.style.color = "red";
            key.style.border = "2px solid red";
            text.textContent = index
            
        
        setTimeout(() => {
            lift.src = "liftopen.jpg"
            key.style.color = "white";
            key.style.border = "";
        }, 3000);
        moving = false
    }
    })
})