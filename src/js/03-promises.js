import Notiflix from 'notiflix';
//Función que construye la promesa. Si el número aleatorio es > 0.3 se acepta la promesa si es < o = se rechaza
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms.`);
      } else {
        reject({ position, delay });
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms.`);
      }
    }, delay);
  });
}

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const delay = parseInt(form.delay.value);
  const step = parseInt(form.step.value);
  const amount = parseInt(form.amount.value);

  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createPromise(i + 1, delay + i * step);
    }, delay + i * step);
  }
});
