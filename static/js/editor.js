function editor_start() {
  const input = document.getElementById('input');

  input.addEventListener('input', updateValue);
  
  function updateValue(e) {
    const square_left = document.getElementById("square_left");
    
    text = input.value
    
    square_left.innerText = text.split("[").length - 1;
  }
}