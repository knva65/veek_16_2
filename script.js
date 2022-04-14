let car = document.querySelector('#select_op');
pop = document.querySelector('#user-box1');
pop2 = document.querySelector('#user-box2');
usluga = document.querySelector('input[name="usluga"]');
age = document.querySelector('input[name="age"]');
car_a = document.querySelector('#am');
car_b = document.querySelector('#bm');
car_c = document.querySelector('#cm');
btn = document.querySelector('#btn');
sum = document.querySelector('#sum');


car.onchange = function () {
    if (car.value == "6000") {car_a.value = 6000}
    if (car.value == "9000") {car_a.value = 9000}
    if (car.value == "7500") {car_a.value = 7500}
    car_a.innerHTML = ""; 
    car_a.innerHTML += car_a.value;
}

pop.onclick = function () {
    if (usluga.value == "1") {car_b.value = car_a.value*2;}
    else {car_b.value = car_a.value*1.5;}
    car_b.innerHTML = "";
    car_b.innerHTML += car_b.value;
}

pop2.onclick = function () {
    if (age.value=="3") {car_c.value = 6000;
    } else {car_c.value = 3500;}
    car_c.innerHTML = "";
    car_c.innerHTML += car_c.value;
}

btn.onclick = function () {
    let sum = car_a.value + car_b.value + car_c.value;

    sum.innerHTML = sum;   
    
}
