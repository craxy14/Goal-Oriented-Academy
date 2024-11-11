// 2. Dynamic Form Validation
// Objective: Implement real-time validation for a password field. The password should be at least 8 characters long. If the password is too short, display a warning message below the input field.

// Steps:
// Create an HTML form with a password input field.
// Add a <div> or <span> below the input to display validation messages.
// Attach an input event listener to the password field.
// In the event handler, check the length of the password and update the message accordingly.

const form = document.getElementById("myForm")
const btn = document.getElementById("btn")
// const outcome = document.getElementById("outcome")

// const validatePass = function(){
//     const password = form.elements.password.value

//     if(password.length < 8){
//         outcome.style.color = "red"
//         outcome.textContent = "Password is too short"
//         return;
//     }
//     outcome.textContent = ""
//     console.log("Successfully registered")
// }

// btn.onclick = validatePass;






// 3. Clear Form Fields
// Objective: Create a form with multiple input fields (e.g., name, email, and message). Add a "Clear" button that, when clicked, clears all input fields.

// Steps:
// Create an HTML form with input fields for name, email, and a textarea for the message.
// Add a "Clear" button next to the submit button.
// Attach an event listener to the "Clear" button that clears the values of all input fields when clicked.
// const clear = document.getElementById("clear-btn")

// const validateForm = function(){
//     const email = form.elements.email.value
//     const password = form.elements.password.value

//     console.log(email)
//     console.log(password)
// }
// btn.onclick = validateForm


// const clearForm = function(){
//     form.elements.email.value = ""
//     form.elements.password.value = ""
// }
// clear.onclick = clearForm





// 4. Counting Character Input
// Objective: Create a form with a textarea input. Display a character counter below the textarea that updates in real-time as the user types. The counter should show the number of characters entered out of a maximum limit (e.g., "50/200 characters").

// Steps:
// Create a form with a textarea input.
// Add a <div> or <span> below the textarea to display the character count.
// Attach an input event listener to the textarea.
// In the event handler, update the character count as the user types.
// const textarea = document.getElementById("textarea")
// const counter = document.getElementById("counter")

// let counterValue = 0
// const maxLength = 200

// textarea.addEventListener("input", function(){
//     counterValue = textarea.value.length
//     counter.textContent = `${counterValue}/${maxLength} characters`
// })





// 5. Dropdown Selection and Display
// Objective: Create a form with a dropdown menu (select element) that has options like "Red," "Blue," and "Green." When the user selects an option, display the selected color in a <div> below the form.

// Steps:
// Create an HTML form with a select element containing color options.
// Add a <div> below the form to display the selected color.
// Attach a change event listener to the select element.
// In the event handler, update the text of the <div> to show the selected color.

// const select = document.getElementById("selectMenu")
// const output = document.getElementById("result")

// select.addEventListener("change", function(){
//     output.style.backgroundColor = select.value
// })