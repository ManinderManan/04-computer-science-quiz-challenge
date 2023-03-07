function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event.code)
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.getElementById('key').textContent = event.key;
  document.querySelector("#code").textContent = event.keyCode;
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown",keydownAction);
