//month 
const monthx = document.getElementById('month')
//day
const day = document.getElementById('day')
//day-number
const dayNum = document.getElementById('day-number')

//year
const year = document.getElementById('year')

const date = new Date()
const month = date.getMonth()

monthx.innerHTML=date.toLocaleDateString('en', {month : 'long',})

dayNum.innerHTML=date.getDate()

year.innerHTML=date.getFullYear()



day.innerHTML=date.toLocaleDateString('en' ,{
    weekday:"long",
})
