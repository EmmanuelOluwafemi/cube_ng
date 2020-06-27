const toggle = document.querySelector(".toggle");
const navContent = document.querySelector(".nav-content");

function toggleMenu(){
	console.log("clicked !!!!!!");
	if(navContent.classList.contains("active")){
		navContent.classList.remove("active");
	}
	else{
		navContent.classList.add("active");
	}
}

toggle.addEventListener("click", toggleMenu, false);