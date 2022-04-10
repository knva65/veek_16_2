let car = document.querySelector('#select_op');
usluga = document.querySelector('#user-box1');
age = document.querySelector('#user-box2');
car_a = document.querySelector('#a');
car_b = document.querySelector('#b');
car_c = document.querySelector('#c');
btn = document.querySelector('#btn');
sum = document.querySelector('#sum');

car.onchange = function () {
    car_a.value === car.value;
    car_a.innerHTML += car_a.value;
}

usluga.onclick = function () {
    if (usluga.value=="1") {car_b.value = (car_a.value) * 2;}
    else {car_b.value = (car_a.value) * 1.5;}
    car_b.innerHTML += car_b.value;
}

age.onclick = function () {
    if (age.value=="3") {car_c.value = 6000;}
    else {car_c.value = 3500;}
    car_c.innerHTML += car_c.value;
}

btn.onclick = function () {
    let sum = car_a.value + car_b.value + car_c.value;
    sum.innerHTML = sum;
    
}