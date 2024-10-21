// let emailInput;
let emailMessage = document.getElementById('emailMessage')
// let numberInput;
// let numberMessage;
// let continueButton;

emailInput.addEventListener('input', ( ) => {
  let emailValue = emailInput.value
  if(emailValue.endsWith('@gmail.com')){
    emailMessage.innerHTML = '<i class="ri-check-double-line"></i> valid email'
    emailMessage.style.color = 'green'
     emailAddress.style.color = 'black'
     phoneNumber.style.color = 'black'
  } else {
     emailMessage.innerHTML = 'Please enter a valid work email'
     emailMessage.style.color = 'red'
     
  }
})

numberInput.addEventListener('input', ( ) => {
   let numberValue =   numberInput.value
   if(numberValue.toString().length == 10){
     numberMessage.innerHTML = '<i class="ri-check-double-line"></i> valid phone number'
     numberMessage.style.color = 'green'
        phoneNumber.style.color = 'black'
   }  else {
    numberMessage.innerHTML = 'Please enter a valid contact number'
    numberMessage.style.color = 'red'
 }
    
})

continueButton.addEventListener('click', function(){
  let emailValue = emailInput.value
  let numberValue =   numberInput.value
   
  if(emailValue.endsWith('@gmail.com') &&numberValue.toString().length == 10){
     alert('iii')
  
  } else if(emailInput.value && numberInput.value == ''){
       numberMessage.innerHTML = 'Please enter valid contact number'
       numberMessage.style.color = 'red'
       phoneNumber.style.color = 'red'
  } else if(numberInput.value && emailInput.value == ''){
       emailMessage.innerHTML = 'Please enter your email'
       emailMessage.style.color = 'red'
       emailAddress.style.color = 'red'
  } else if(numberValue == '' &&  emailValue == ''){
    numberMessage.innerHTML = 'Please enter valid contact number'
    numberMessage.style.color = 'red'
    phoneNumber.style.color = 'red'
    emailMessage.innerHTML = 'Please enter your email'
    emailMessage.style.color = 'red'
    emailAddress.style.color = 'red'
  }
  
})
