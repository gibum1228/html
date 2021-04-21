/*
1) 모음 위치

"When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
위 문자열에서 모음(aeiou)들의 위치를 출력하는 코드를 구현하시오.
*/

let str1 = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."

for(let i = 0; i < str1.length; i++){
    // switch(str1[i]){
    //     case 'a':
    //     case 'e':
    //     case 'i':
    //     case 'o':
    //     case 'u':
    //         console.log(str1[i] + " >> " + i)
    //         break
    // }
    if(str1[i].search(/[aeiou]/i) == 0){
        console.log(str1[i] + " >> " + i)
    }
}