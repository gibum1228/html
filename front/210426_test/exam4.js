function deepCopy(persons) { 
    return persons.reduce((arr, obj, i) => {
        arr[i] = {};

        arr[i].name = obj.name;
        arr[i].age = obj.age;

        return arr;
    }, [])
} 

let persons1 = [ 
    { name: "홍길동", age: 16 }, 
    { name: "임꺽정", age: 18 } 
]; 
let persons2 = deepCopy(persons1); 

persons1[0].age = 20; 
console.log(persons2);