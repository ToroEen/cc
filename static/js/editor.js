function editor_start() {
  const input = document.getElementById('input');
  const line_counter = document.getElementById('line-counter');

  input.addEventListener('scroll', () => {
    line_counter.scrollTop = input.scrollTop;
    line_counter.scrollLeft = input.scrollLeft;
  });
  
  const information = document.getElementById('information');

  input.addEventListener('input', updateValue);
  
  function updateValue(e) {
    let text = input.value.split("\n");
    const total_lines = text.length;
    let stop_counting = false;

    line_counter.innerHTML = "";

    while (information.firstChild) {
      information.removeChild(information.lastChild);
    }

    text.forEach(function(entry) {
      let new_line = document.createElement("div");

      new_line.innerHTML = "[: " + (entry.split('[').length - 1).toString() + " &emsp; " + "\]: " + (entry.split("]").length - 1).toString();
      
      information.appendChild(new_line);

      if (!stop_counting) {
        for (var x = 1; x < total_lines; x++) {
          line_counter.innerHTML += x.toString() + "<br>";
          if (x === total_lines - 1) {
            stop_counting = true
          }
        } 
      }
    });
  }
}