var studentNameInp=document.getElementById("studentNameInp");
var studentIdInp=document.getElementById("studentIdInp");
var studentGpaInp=document.getElementById("studentGpaInp");
var studentDesInp=document.getElementById("studentDesInp");

var studentContainer;
if (localStorage.getItem("student38") == null) {
    studentContainer = [];
}
else {
    studentContainer=JSON.parse(localStorage.getItem("student38"));
    displayStudents();
}

function addStudent () {

    var student = {
        stuName: studentNameInp.value,
        stuId: studentIdInp.value,
        stuGpa: studentGpaInp.value,
        stuDes: studentDesInp.value
    }
    studentContainer.push(student);
    localStorage.setItem("student38", JSON.stringify(studentContainer));
    displayStudents();
    clearForm()
} 

function displayStudents() {
    var cartona = ``;
    for (var i = 0; i < studentContainer.length; i++) {
        cartona += `
        <tr>
            <td>${i}</td>
            <td>${studentContainer[i].stuName}</td>
            <td>${studentContainer[i].stuId}</td>
            <td>${studentContainer[i].stuGpa}</td>
            <td>${studentContainer[i].stuDes}</td>
            <td><button class="btn btn-warning">Upload</button></td>
            <td><button onclick="deleteStudent(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`
    }
    document.getElementById("myTable").innerHTML = cartona; 
}

function clearForm() {
    studentNameInp.value = '';
    studentIdInp.value = '';
    studentGpaInp.value = '';
    studentDesInp.value = '';
}

function deleteStudent(index) {
    studentContainer.splice(index, 1);
    localStorage.setItem("student38", JSON.stringify(studentContainer));
    displayStudents();
}