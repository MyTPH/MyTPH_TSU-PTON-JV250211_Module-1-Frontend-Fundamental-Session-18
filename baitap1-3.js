let student = {
    id:1,
    name:"Nguyễn Văn A",
    gender:"nam",
    age:20,
    mark:8,
};
let newStudent = {
    id:2,
    name:"Trần Thị B",
    gender:"nữ",
    age:18,
    mark:9,
}
let students = [];
students.push(student);
students.push(newStudent);
let topStudent = students[0];
for(let i = 1;i < students.length;i++){
    if(students[i].mark>topStudent.mark){
        topStudent=students[i];
    }
}
console.log(topStudent);