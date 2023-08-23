let AddBtn = document.querySelector("#addbtn");
let SaveBtn = document.querySelector("#savebtn");
let p = document.querySelector("p");
let SavedValue = document.querySelector("#savevalue");
let ResetBtn = document.querySelector("#ResetBtn")

AddBtn.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
    SaveBtn.classList.remove("button2-disabled");
})

SaveBtn.addEventListener("click", () => {
    if (p.innerHTML == 0) {
        SaveBtn.classList.add("button2-disabled")
    }
    else {
        if (SavedValue.innerHTML == 0) {
            SavedValue.innerHTML = p.innerHTML;
        }

        else {
            SavedValue.innerHTML = SavedValue.innerHTML + ', ' + p.innerHTML;
        }
        p.innerHTML = 0;
    }
})
ResetBtn.addEventListener("click", function () {
    p.innerHTML = 0;
    SavedValue.innerHTML = 0;
})