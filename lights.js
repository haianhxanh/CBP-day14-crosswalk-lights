"use strict";

const press = () => {
  
  let counter = Math.floor((Math.random()*6) + 1);

  const waitingTimerID = setInterval(() => {
  
    counter -= 1;
    const elementWaitingTime = document.querySelector('#time');
    elementWaitingTime.textContent = counter;
    if (counter == 0) {
      clearInterval(waitingTimerID);
    }
  }, 1000);

  setTimeout(() => {
    const elementTimeOut = document.querySelector('#time');
    elementTimeOut.textContent = "You have 10 seconds to cross";

    const stopOff = document.querySelector('#stop');
    stopOff.className = 'stop-off light';

    const walkOn = document.querySelector('#walk');
    walkOn.className = 'walk-on light';

    // crossing time
    let counter = 10;
    const waitingTimerID = setInterval(() => {
  
    counter -= 1;
    const elementWaitingTime = document.querySelector('#time');
    elementWaitingTime.textContent = counter;
    
    if (counter == 0) {
      clearInterval(waitingTimerID);
      const stopOff = document.querySelector('#stop');
      stopOff.className = 'stop-on light';

      const walkOn = document.querySelector('#walk');
      walkOn.className = 'walk-off light';

      elementTimeOut.textContent = "Press to cross";
    }

   }, 1000);


  }, 6000);

}

const clickBtn = document.querySelector('#press');
clickBtn.addEventListener('click', press);

// const waitingTimerID = setInterval(() => {
//   let counter = 6;
//   counter -= 1;
//   const elementWaitingTime = document.querySelector('#time');
//   elementWaitingTime.textContent = counter;
//   if (counter == 0) {
//     clearInterval(waitingTimerID);
//   }
// }, 1000);


// const timerID = setTimeout(() => {
//   const elementTime = document.querySelector('#time');
//   elementTime.textContent = "You can go now";
// }, 6000);






