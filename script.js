// dropDowns
let toggleButton = document.getElementById('toggleButton')
toggleButton.addEventListener('click', function() {
    
  const section = document.getElementById('toggleSection');
  if (section.classList.contains('hidden')) {
      section.classList.remove('hidden');
  } else {
      section.classList.add('hidden');
  }
});

document.getElementById('js-login').addEventListener('click',function(){
    const loginSection = document.getElementById('loginSection');
    if (loginSection.classList.contains('hidden')) {
        loginSection.classList.remove('hidden');
    } else {
        loginSection.classList.add('hidden');
    }
})

//button 

const expertButton = document.querySelector('#expert-button');
expertButton.addEventListener('click', function(){
     window.location = 'customer.html'
})

//customer page
 
 
 