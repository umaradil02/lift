const lift = document.querySelector("#lift");
const chain = document.querySelector("#chain");
let chaintime = 1200
console.log(chain)
let floor = document.querySelectorAll(".floor");
const text = document.querySelector(".text");
const liftDoors = document.querySelector('.lift-doors');
const classes = ["ground", "first", "second", "third", "four"]
let moving = false
const liftHeights = {
    ground: 900,
    first: 750,
    second: 650,
    third: 550,
    four: 450
};

const chainHeights = {
    ground: 600,
    first: 500,
    second: 335,
    third: 235,
    four: 150
};
floor.forEach((key, index) => {
    key.addEventListener("click", () => {
        if(!moving){
            moving = true;
            let selectfloor = classes[index];
            console.log(selectfloor)
            chain.style.transition = `height ${chaintime}ms`
            chain.style.height = `${chainHeights[selectfloor]}px`
        lift.src = "liftclose.jpg";
        lift.className = '';
        lift.classList.add(selectfloor)
            key.style.color = "red";
            key.style.border = "2px solid red";
            text.textContent = index
            
        
        setTimeout(() => {
            lift.src = "liftopen.jpg"
            key.style.color = "white";
            key.style.border = "";
            moving = false;
        }, chaintime);
    }
    })
})