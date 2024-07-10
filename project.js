// project.js

// Function to create a new list item
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
  
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  
    li.onclick = function() {
      this.classList.toggle('checked');
    }
  }
  
  // Add event listeners to existing list items
  var myNodelist = document.getElementsByTagName("LI");
  for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  
    myNodelist[i].onclick = function() {
      this.classList.toggle('checked');
    }
  }
  
