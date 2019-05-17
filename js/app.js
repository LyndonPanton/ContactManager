// General
document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

// Contact Manager
function Contact(firstname, surname, age, number, email, address) {
	this.firstname = firstname; // string
	this.surname = surname; // string
	this.age = age; // number
	this.number = number; // number
	this.email = email; // string
	this.address = address; // string
}

const a = new Contact("alice", "alison", 20, 12345678901, "alice1@mail.com", "1 Something Street");
const b = new Contact("bob", "bobson", 21, 23456789012, "bob2@mail.com", "2 Something Street");

// Page Display

// Form Validation
const form = document.getElementById("form-field");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	let errorContainer = document.createElement("div");

	// errorContainer.appendChild(validateFirstName(this.children[0].children[1]));
	// errorContainer.appendChild(validatesurname(this.children[1].children[1]));
	// errorContainer.appendChild(validateAge(this.children[2].children[1]));
	// errorContainer.appendChild(validateNumber(this.children[3].children[1]));
	// errorContainer.appendChild(validateEmail(this.children[4].children[1]));
	// errorContainer.appendChild(validateAddress(this.children[5].children[1]));

	if (errorContainer.textContent) {
		// Add error container
		this.parentElement.appendChild(errorContainer);
		// Cancel submission
		return false;
	} else {
		// Create an element
		let successMessage = document.createElement("p");
		// Add a success messge
		successMessage.textContent = "Contact Created";
		// Add that element to error container
		errorContainer.appendChild(successMessage);
		// Add error container
		this.parentElement.appendChild(errorContainer);
	}
});

function validateFirstName(fName) {
	// if (fName )
}

function validateSurname(sName) {

}

function validateAge(age) {

}

function validateNumber(number) {

}

function validateEmail(email) {

}

function validateAddress(address) {

}