// Animation
const items = document.querySelectorAll(".testimonial");

const isInViewport = (el) => {
	const rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	);
};

const run = () =>
	items.forEach((item) => {
		if (isInViewport(item)) {
			item.classList.add("show");
		}
	});

// Events
window.addEventListener("load", run);
window.addEventListener("scroll", run);

// Left-Right Slide
let card = document.getElementsByClassName("card");
let slider = document.getElementById("slider");
let buttonLeft = document.getElementById("prev-btn");
let buttonRight = document.getElementById("next-btn");

// Left Slide
buttonLeft.addEventListener("click", () => {
	slider.scrollLeft -= 125;
});

// Right Slide
buttonRight.addEventListener("click", () => {
	slider.scrollLeft += 125;
});

// AutoPlay Slider
const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
	if (slider.scrollLeft > maxScrollLeft - 1) {
		slider.scrollLeft -= maxScrollLeft;
	} else {
		slider.scrollLeft += 1;
	}
}

let play = setInterval(autoPlay, 20);

// Pause the slider on hover
for (let i = 0; i < card.length; i++) {
	card[i].addEventListener("mouseover", () => {
		clearInterval(play);
	});
	card[i].addEventListener("mouseout", () => {
		return (play = setInterval(autoPlay, 20));
	});
}

// Order
function order() {
	alert("Thank you for ordering. Happy shopping.");
}

// Form Validation
function validate() {
	let name = document.forms["form"]["name"].value;
	let email = document.forms["form"]["email"].value;
	let message = document.forms["form"]["message"].value;

	if (name === "" || email === "" || message === "") {
		alert("Please fill every field.");
	} else {
		alert(
			`Thank you for sending message ${name.toUpperCase()}. We will reply you soon.`
		);
	}
}
