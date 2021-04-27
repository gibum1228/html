function getExtension(fileName) {
    console.log(fileName.slice(fileName.search(`[.]`)));
}

let a = [ "hello.html", "world.js", "readme.txt" ];

for(let i = 0; i < a.length; i++){
    getExtension(a[i]);
}