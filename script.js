class Person {
    constructor(name, mobile) {
        this.name = name;
        this.mobile = mobile;
    }

    displayDetails() {
        return `Name: ${this.name}, Mobile: ${this.mobile}`;
    }
}


function validateForm() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;
    const price = document.getElementById('price').value;
    const address = document.getElementById('address').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    
    const errorElement = document.getElementById('error-message');
    errorElement.innerText = '';

    if (name.length > 30) {
        errorElement.innerText = 'Name must be within 30 characters.';
        return false;
    }

    if (!/^\d{10}$/.test(mobile)) {
        errorElement.innerText = 'Mobile number must be exactly 10 digits long and only contain numbers.';
        return false;
    }

    if (message.length > 50) {
        errorElement.innerText = 'Message must not exceed 50 characters.';
        return false;
    }

    if (address.trim() === '') {
        errorElement.innerText = 'Delivery address cannot be empty.';
        return false;
    }

    if (!size || !color) {
        errorElement.innerText = 'Please select a size and color.';
        return false;
    }
}

function processOrder() {
    if (!validateForm()) {
        return;
    }

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    const address = document.getElementById('address').value;
    const price = document.getElementById('price').value;

    const person = new Person(name, mobile);
    console.log(person.displayDetails());

    const receiptDate = new Date().toLocaleDateString();
    const receiptContent = `
        <strong>Order Received:</strong><br>
        Date: ${receiptDate}<br>
        Name: ${name}<br>
        Mobile: ${mobile}<br>
        Message: ${message}<br>
        Size: ${size}<br>
        Color: ${color}<br>
        Price: $${price}<br>
        Address: ${address}<br>
    `;
    
    document.getElementById('receipt-content').innerHTML = receiptContent;
    document.getElementById('receipt').style.display = 'block';

    document.getElementById('tshirtOrderForm').reset();
    document.getElementById('price').value = ''; // Clear price field after reset
}
