function toggleMenu(){

const menu = document.getElementById("navMenu")

if(menu.style.display === "flex")
menu.style.display="none"
else
menu.style.display="flex"

}

function scrollToAppointment(){
window.scrollTo({
top:document.querySelector(".appointment").offsetTop,
behavior:"smooth"
})
}

async function submitReview(){

const name=document.getElementById("name").value
const review=document.getElementById("review").value

await fetch("/api/reviews",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,review,rating:5})
})

loadReviews()
}

async function loadReviews(){

const res=await fetch("/api/reviews")
const data=await res.json()

const reviewList=document.getElementById("reviewList")

reviewList.innerHTML=""

data.forEach(r=>{
reviewList.innerHTML+=`<p><b>${r.name}</b>: ${r.review}</p>`
})

}

async function bookAppointment(){

const name=document.getElementById("patientName").value
const phone=document.getElementById("phone").value
const date=document.getElementById("date").value
const message=document.getElementById("message").value

await fetch("/api/appointments",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,phone,date,message})
})

alert("Appointment Booked")
}

loadReviews()