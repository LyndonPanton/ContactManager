document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

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