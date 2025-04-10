document.addEventListener("DOMContentLoaded", function () {
    const name = "Melinda Morkeh";
    const target = document.getElementById("typed-name");
    let index = 0;
  
    function typeLetter() {
      if (index < name.length) {
        target.textContent += name.charAt(index);
        index++;
        setTimeout(typeLetter, 150); // typing speed
      }
    }
  
    typeLetter();
  });
  