let elDistanceForm = document.querySelector('.distance-form');
let elDistanceInput = elDistanceForm.querySelector('.distance-input');

let elWalkTime = document.querySelector('.walk-time');
let elBikeTime = document.querySelector('.bike-time');
let elCarTime = document.querySelector('.car-time');
let elPlaneTime = document.querySelector('.plane-time');

let elErrorMessage = document.querySelector('.error-message');


let walkSpeed = 3.60;
let bikeSpeed = 20.10;
let carSpeed = 70.00;
let planeSpeed = 800.00;

let distance = '';
let message = 'Notori kiritish.';



elDistanceForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  distance = parseFloat(elDistanceInput.value.trim(), 10);


  if (distance > 0) {
    let walkTime = distance / walkSpeed;
    walkHour = parseInt(walkTime, 10);
    walkMinute = Math.round((parseFloat(walkTime.toFixed(2), 10) - walkHour) * 60);
    let bikeTime = distance / bikeSpeed;
    bikeHour = parseInt(bikeTime, 10);
    bikeMinute = Math.round((parseFloat(bikeTime.toFixed(2), 10) - bikeHour) * 60);
    let carTime = distance / carSpeed;
    carHour = parseInt(carTime, 10);
    carMinute = Math.round((parseFloat(carTime.toFixed(2), 10) - carHour) * 60);
    let planeTime = distance / planeSpeed;
    planeHour = parseInt(planeTime, 10);
    planeMinute = Math.round((parseFloat(planeTime.toFixed(2), 10) - planeHour) * 60);

    elErrorMessage.classList.add('d-none');

    elWalkTime.textContent = `${walkHour} soat, ${walkMinute} minut`;
    elBikeTime.textContent = `${bikeHour} soat, ${bikeMinute} minut`;
    elCarTime.textContent = `${carHour} soat, ${carMinute} minut`;
    elPlaneTime.textContent = `${planeHour} soat, ${planeMinute} minut`;
  } else {
    elErrorMessage.textContent = message;
    elErrorMessage.classList.add('alert-danger');
  }
});


let celcy = '';
let farengey = '';
let elTempForm = document.querySelector('.temp-form');
let elCelcyInput = elTempForm.querySelector('.celcy-input');
let elFarengeyInput = elTempForm.querySelector('.farengey-input');
let elResult = document.querySelector('.reslut');

elTempForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  celcy = parseFloat(elCelcyInput.value.trim(), 10);
  celcy = parseFloat(celcy.toFixed(1), 10);
  farengey = parseFloat((celcy * 9 / 5) + 32, 10);
  farengey = parseFloat(farengey.toFixed(1), 10);

  elFarengeyInput.value = `${farengey}`;
});