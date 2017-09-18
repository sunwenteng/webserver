var arr = [1,2,3];

function a(p) {
    p.length = p.length - 1;
}

console.log(arr.slice(0, arr.length - 1));
console.log(arr);