





var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(); // Display the current tab

function showTab() {
  // This function will display the specified tab of the form...

  var x = document.getElementsByClassName("tab");


  var roundedBtn = document.getElementsByClassName

    ('rounded-btn');
  console.log(x);
  console.log(x[0]);





  let tab1 = document.getElementById('tab1');
  let tab2 = document.getElementById('tab2');
  let tab3 = document.getElementById('tab3');



  tab1.addEventListener("click", show = () => {

   

    tab2.disabled=false;

  });

  tab2.addEventListener("click", show = () => {
    console.log('hi sovan button2 clicked');

 

    tab3.disabled=false;




  });


tab3.addEventListener("click", show = () => {
  console.log('hi sovan button3 clicked');
  roundedBtn[0].style.backgroundColor = "red";
  roundedBtn[1].style.backgroundColor = 'rgb(0, 136, 255)';
  roundedBtn[2].style.backgroundColor = 'rgb(224, 170, 6)'
});






function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

}