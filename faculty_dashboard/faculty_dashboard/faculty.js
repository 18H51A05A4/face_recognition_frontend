
var select_date = document.getElementById('select-date')
var dateVal = new Date()
var datekey = `${dateVal.getFullYear()}-${dateVal.getMonth()}-${dateVal.getDate()}`

// console.log(typeof datekey)

select_date.defaultValue = datekey.toString()
const students=[];
students[0]={
    id:1,
    studentName:"venkatesh"
}
students[1]={
    id:2,
    studentName:"Sreejan"
}
let select= document.createElement('select');
let label=document.getElementById('label')
let option=`<option disabled selected>default</option>`;
for (let index = 0; index < students.length; index++) {
option=option+`<option value=`+students[index].id+`><label><h1>hsghdgs</h1> <input type="checkbox">`+students[index].studentName+`<label></option>`;
}
select.innerHTML=option
label.append(select)


