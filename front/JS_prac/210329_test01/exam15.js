function remove(a, value) {
    while(true){
        if(a.indexOf(value) > -1){
            a.splice(a.indexOf(value), 1)
        }else{
            break
        }
    }
}

let a = [1, 3, 5, 5, 3, 6];

remove(a, 3);
console.log(a);

remove(a, 5);
console.log(a);