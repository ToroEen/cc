function editor_start() {
  const input = document.getElementById('input');
  const information = document.getElementById('information');

  input.addEventListener('input', updateValue);
  
  function updateValue(e) {
    const square_left = document.getElementById("square_left");
    
    let text = input.value.split("\n")

    while (information.firstChild) {
      information.removeChild(information.lastChild);
    }

    text.forEach(function(entry) {
      let myElm = document.createElement("div");

      myElm.innerHTML = "[: " + (entry.split('[').length - 1).toString() + " &emsp; " + "\]: " + (entry.split("]").length - 1).toString();
      
      information.appendChild(myElm);
    });
  }
}