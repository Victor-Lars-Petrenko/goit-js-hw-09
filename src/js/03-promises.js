import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay })
    } else {
      rejected({ position, delay })
    }
    }, delay)
  })
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);
  createPromise(1, delay)
  .then(({ position, delay }) => {
    Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  for (let i = 2; i <= amount; i += 1) {
    delay += step;
    createPromise(i, delay)
    .then(({ position, delay }) => {
      Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
})