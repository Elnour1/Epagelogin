  let higher = document.getElementById('content-higher');
  let text = document.getElementById('higher-text');
  let isMoved = false;
  function moveRight(){ 
            if (isMoved) {
            higher.style.marginLeft = '53%'; // يرجع مكانه
            text.innerHTML = `<h1> Hello, friends! </h1>
                <p> enter your personal details <br> and start journey with us . </p>`;
          } else {
              higher.style.marginLeft = '0'; // يتحرك لليسار
               text.innerHTML = `<h1> Welcome Back! </h1>
                <p> to keep connected with us please <br> login with your personal info </p>`;
            }
            isMoved = !isMoved;
            }        