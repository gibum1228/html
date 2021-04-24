let a = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"]

// 파일 확장자 출력
console.log("===== 파일 확장자 =====")
for(let i = 0; i < a.length; i++){
    console.log(a[i].slice(a[i].indexOf('.')))
}

// 파일명 출력
console.log("\n===== 파일명 =====")
for(let i = 0; i < a.length; i++){
    console.log(a[i].slice(a[i].search(/([^/]+)([.])/)))
}

// 파일 이름 부분만 출력
console.log("\n===== 파일 이름 부분 =====")
for(let i = 0; i < a.length; i++){
    console.log(a[i].slice(a[i].search(/([^/]+)([.])/)).split(".")[0])
}