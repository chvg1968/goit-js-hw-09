// Descrito en la documentación
import flatpickr from "flatpickr";
// Importación adicional de estilos
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

//Se implementa una constante llamada "options" que utiliza flatpickr el cual es un seleccionador 
//de fechas y hora en el elemento con un ID de "#datetime-picker".
const options = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

//Se crea una constante llamada "startButton" que obtiene un elemento con un 
//atributo de datos de "data-start".
const startButton = document.querySelector("[data-start]");
startButton.addEventListener("click", () => {
  const selectedDate = options.selectedDates[0];
  const now = new Date();
  if (selectedDate < now) {
    Notiflix.Notify.failure("Please choose a date in the future");
    return;
  }
  const countDownDate = new Date(selectedDate).getTime();

  const countDown = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(countDown);
      Notiflix.Notify.success("Countdown finished!");
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.querySelector("[data-days]").textContent = `${days.toString().padStart(2, "0")}`;
      document.querySelector("[data-hours]").textContent = `${hours.toString().padStart(2, "0")}`;
      document.querySelector("[data-minutes]").textContent = `${minutes.toString().padStart(2, "0")}`;
      document.querySelector("[data-seconds]").textContent = `${seconds.toString().padStart(2, "0")}`;
    }
  }, 1000);
});
