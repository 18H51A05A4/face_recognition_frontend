
var select_date = document.getElementById('select-date')
var dateVal = new Date()
var datekey = `${dateVal.getFullYear()}-${dateVal.getMonth()}-${dateVal.getDate()}`

// console.log(typeof datekey)

select_date.defaultValue = datekey.toString()

