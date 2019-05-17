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
	Contact.contacts.push(this);
	addContact(this);
}

Contact.contacts = [];

// const a = new Contact("alice", "alison", 20, 12345678901, "alice1@mail.com", "1 Something Street");
// const b = new Contact("bob", "bobson", 21, 23456789012, "bob2@mail.com", "2 Something Street");

// Page Display
function addContact(contact) {
	let tableBody = document.getElementById("contacts-table").getElementsByTagName("tbody")[0];
	let newRow = tableBody.insertRow(-1);

	let cellFirstName = newRow.insertCell(0);
	let cellFirstNameText = document.createTextNode(contact.firstname);
	cellFirstName.appendChild(cellFirstNameText);

	let cellSurname = newRow.insertCell(1);
	let cellSurnameText = document.createTextNode(contact.surname);
	cellSurname.appendChild(cellSurnameText);


	let cellAge = newRow.insertCell(2);
	let cellAgeText = document.createTextNode(contact.age);
	cellAge.appendChild(cellAgeText);


	let cellNumber = newRow.insertCell(3);
	let cellNumberText = document.createTextNode(contact.number);
	cellNumber.appendChild(cellNumberText);


	let cellEmail = newRow.insertCell(4);
	let cellEmailText = document.createTextNode(contact.email);
	cellEmail.appendChild(cellEmailText);


	let cellAddress = newRow.insertCell(5);
	let cellAddressText = document.createTextNode(contact.address);
	cellAddress.appendChild(cellAddressText);
}

// Form Validation
const form = document.getElementById("form-field");
form.addEventListener("submit", function(event) {
	event.preventDefault();

	let fe = document.getElementById("form-error");
	if (fe) {
		fe.parentElement.removeChild(fe);
	}
	let errorContainer = document.createElement("div");
	errorContainer.id = "form-error";

	const fn = this.children[0].children[1].value;
	const sn = this.children[1].children[1].value;
	const ag = this.children[2].children[1].value;
	const n = this.children[3].children[1].value;
	const e = this.children[4].children[1].value;
	const ad = this.children[5].children[1].value;

	errorContainer.appendChild(validateFirstName(fn));
	errorContainer.appendChild(validateSurname(sn));
	errorContainer.appendChild(validateAge(ag));
	errorContainer.appendChild(validateNumber(n));
	errorContainer.appendChild(validateEmail(e));
	errorContainer.appendChild(validateAddress(ad));

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

	this.reset();

	new Contact(fn, sn, ag, n, e, ad);
});

function validateFirstName(fn) {
	let error = document.createElement("p");

	if (fn.trim() == "") {
		error.textContent = "First name should not be empty";
	} else if (/\s/.test(fn)) {
		error.textContent = "First name should not contain white space";
	} else if (fn.trim().length < 3) {
		error.textContent = "First name should be at least 3 characters";
	} else if (/[^a-zA-Z-]/.test(fn)) {
		error.textContent = "First name should only include latin letters or hyphens";
	}

	return error;
}

function validateSurname(s) {
	let error = document.createElement("p");

	if (s.trim() == "") {
		error.textContent = "Surname should not be empty";
	} else if (/\s/.test(s)) {
		error.textContent = "Surname should not contain white space";
	} else if (s.trim().length < 3) {
		error.textContent = "Surname should be at least 3 characters";
	} else if (/[^a-zA-Z-]/.test(s)) {
		error.textContent = "Surname should only include latin letters or hyphens";
	}

	return error;
}

function validateAge(a) {
	let error = document.createElement("p");

	if (a.trim() == "") {
		error.textContent = "Age should not be empty";
	} else if (/\s/.test(a)) {
		error.textContent = "Age should not contain white space";
	} else if (/[^\d]/.test(a)) {
		error.textContent = "Age should only contain numbers";
	} else if (Number(a) > 199) {
		error.textContent = "Age should be less than 200";
	}

	return error;
}

function validateNumber(n) {
	let error = document.createElement("p");

	if (n.trim() == "") {
		error.textContent = "Number should not be empty";
	} else if (/\s/.test(n)) {
		error.textContent = "Number should not contain white space";
	} else if (/\D/.test(n)) {
		error.textContent = "Number should only contain numbers";
	} else if (n.trim().length < 10) {
		error.textContent = "Number should not be less than 10 digits";
	} else if (n.trim().length > 15) {
		error.textContent = "Number should not be more than 15 digits";
	}

	return error;
}

function validateEmail(e) {
	let error = document.createElement("p");

	if (e.trim() == "") {
		error.textContent = "Email should not be empty";
	} else if (/\s/.test(e)) {
		error.textContent = "Email should not contain white space";
	} else if (0) { // Create email validation
		error.textContent = "Email is not valid";
	}

	return error;
}

function validateAddress(a) {
	let error = document.createElement("p");

	if (a.trim() == "") {
		error.textContent = "Address should not be empty"
	} else if (/[^\a-zA-Z0-9\s]/.test(a)) {
		error.textContent = "Address should only contain letters and numbers";
	} else if (!/[a-zA-Z]/.test(a) && !/[0-9]/.test(a)) {
		error.textConent = "Address should contain at least one letter and one number";
	} else if (a.trim().length > 20) {
		error.textContent = "Address should be less than 20 characters";
	}

	return error;
}