const lift = document.querySelector("#lift");
let floor = document.querySelectorAll(".floor");
const classes = ["ground", "first", "second", "third", "four"]
floor.forEach((key, index) => {
    key.addEventListener("click", () => {
        lift.src = "liftclose.jpg";
        lift.className = '';
        lift.classList.add(classes[index])
        setTimeout(() => {
            lift.src = "liftopen.jpg"
        }, 1000);

    })
})