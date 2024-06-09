const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.getElementById('contact').onsubmit = function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;


  document.getElementById('formData').innerText = `Do you want to proceed with the following information?
  \n\nName: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nmessage: ${message}`;

  document.getElementById('customModal').style.display = 'block';
};

document.getElementById('closeModal').onclick = function() {
  document.getElementById('customModal').style.display = 'none';
};

document.getElementById('confirmButton').onclick = function() {
  alert('Form submitted successfully!');
  document.getElementById('customModal').style.display = 'none';
  document.getElementById('contact').submit();
};

document.getElementById('cancelButton').onclick = function() {
  alert('Form submission cancelled.');
  document.getElementById('customModal').style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == document.getElementById('customModal')) {
      document.getElementById('customModal').style.display = 'none';
  }
};
