let d = document.querySelector("body");

d.innerHTML = "lalae dl";

function test(...a) {
    console.log(...a);
    return a[0];
}

d.innerHTML += test(1,2,3,4);