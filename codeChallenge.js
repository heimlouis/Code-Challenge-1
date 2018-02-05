var buttonClicks = 0;

console.log('js');
$(document).ready( function(){
  console.log('jq is ready');
  $('#buttonClick').on( 'click', function(){
    console.log('in buttonClick function');
    createDiv();
    displayButtonClicksFunction();
    // toggleColors();
  });
});

function createDiv(){
  var divCreaterOne = $('#divSectionListener');
  // divCreaterOne.empty();
  var divStringOne = '<div>';
  divStringOne += '<p id="pTagListenerOne">';
  divStringOne += '</p>';
  divStringOne += '<button id="swapButtonID">Swap</button>';
  divStringOne += '<button id="deleteButtonID">Delete</button>';
  divStringOne += '</div><br>';
  divCreaterOne.append(divStringOne);
  }

function displayButtonClicksFunction(){
  var pTagListenerVar = $('#pTagListenerOne');
  pTagListenerVar.empty();
  buttonClicks ++;
  pTagListenerVar.append(buttonClicks);
}

// function toggleColors(){
//   if
//
// }
