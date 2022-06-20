function editor_start() {
  const input = document.getElementById('input');
  const line_counter = document.getElementsByClassName('line-counter');
  
  const information = document.getElementById('information');
  const total = document.getElementById("total");

  input.addEventListener('input', updateValue);
  
  function updateValue() {
    let text = input.value.split("\n");
    
    const filter_1 = document.getElementById("filter_input").value.replace("sb", "[").replace("cb", "{").replace("rb", "(").replace("ab", "<");
    const filter_2 = document.getElementById("filter_input").value.replace("sb", "]").replace("cb", "}").replace("rb", ")").replace("ab", ">");

    const total_lines = text.length + 1;

    let stop_counting = false;

    for(var i = 0; i < line_counter.length; i++)
    {
      line_counter[i].innerHTML = "";
    }

    while (information.firstChild) {
      information.removeChild(information.lastChild);
    }

    text.forEach(function(entry) {
      let new_line = document.createElement("div");

      const value_1 = entry.split(filter_1).length - 1;
      const value_2 = entry.split(filter_2).length - 1;

      total.innerHTML = filter_1 + ": " + (input.value.split(filter_1).length - 1).toString() + "&emsp;" + filter_2 + ": " + (input.value.split(filter_2).length - 1).toString();

      if (input.value.split(filter_1).length - 1 !== input.value.split(filter_2).length - 1) {
        total.classList.add("warning");
      } else if (total.classList.contains("warning")) {
        total.classList.remove("warning");
      }

      new_line.innerHTML = filter_1 + ": " + value_1.toString() + " &emsp; " + filter_2 + ": " + value_2.toString();
      
      if (value_1 !== value_2) {
        new_line.classList.add("warning")
      } else if (new_line.classList.contains("warning")) {
        new_line.classList.remove("warning")
      }

      information.appendChild(new_line);

      if (!stop_counting) {
        for (var x = 1; x < total_lines; x++) {
          for(var i = 0; i < line_counter.length; i++)
          {
            line_counter[i].innerHTML += x.toString() + "<br>";
          }
      
          if (x === total_lines - 1) {
            stop_counting = true
          }
        } 
      }
    });
  }
}

function change_filter(new_value) {
  const ids = ["sb", "cb", "rb", "ab"];

  document.getElementById("filter_input").value = new_value;

  ids.forEach(function(id) {
    if (document.getElementById(id).classList.contains("clicked")) {
      document.getElementById(id).classList.remove("clicked")
    }
  });

  document.getElementById(new_value).classList.add("clicked");
}