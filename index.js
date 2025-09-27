let point_1 = 0
let point_2 = 0

let hEl = document.getElementById("h")
let gEl = document.getElementById("g")

function increment1h() {
    point_1 += 1
    hEl.textContent = point_1
}

function increment2h() {
    point_1 += 2
    hEl.textContent = point_1
}

function increment3h() {
    point_1 += 3
    hEl.textContent = point_1
}

function increment1g() {
    point_2 += 1
    gEl.textContent = point_2
}

function increment2g() {
    point_2 += 2
    gEl.textContent = point_2
}

function increment3g() {
    point_2 += 3
    gEl.textContent = point_2
}