import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', handlerSubmit);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    
     }
  })
  
}

function handlerSubmit(evt) {
  evt.preventDefault();
  const firstDelay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);
  let delay = firstDelay;
//  console.log(delay)
  for (let i = 1; i <= amount; i += 1){
    createPromise(i, delay) 
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  }

  
}
