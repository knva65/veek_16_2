let car = document.querySelector('#select_op');
pop = document.querySelector('#user-box1');
pop2 = document.querySelector('#user-box2');
pop3 = document.querySelector('#user-box3');
usluga = document.querySelector('input[name="usluga"]');
age = document.querySelector('input[name="age"]');
car_a = document.querySelector('#am');
car_b = document.querySelector('#bm');
car_c = document.querySelector('#cm');
car_d = document.querySelector('#dm');
btn = document.querySelector('#btn');
sum1 = document.querySelector('#sum1');
error = document.querySelector('#errorMessage');
power = document.querySelector('#range');
cost = 450;


car.onchange = function () {
    if (car.value == "6000") {car_a.value = 6000}
    if (car.value == "9000") {car_a.value = 9000}
    if (car.value == "7500") {car_a.value = 7500}
    car_a.innerHTML = ""; 
    car_a.innerHTML += car_a.value+ ' $';
}

pop.onclick = function () {
    if (document.getElementById('radio_1').checked) {
        car_b.value = car_a.value*2;
    } else {
        car_b.value = car_a.value*1.5;
    }
    car_b.innerHTML = "";
    car_b.innerHTML += car_b.value+ ' $';
}

pop2.onclick = function () {
    if (document.getElementById('radio_3').checked) {
        car_c.value = 6000;
    } else {
        car_c.value = 3500;
    }
    car_c.innerHTML = "";
    car_c.innerHTML += car_c.value+ ' $';
}

pop3.onclick = function () {
    if (document.getElementById('radio_5').checked) {
        car_d.value = car_a.value*0.5;
    } else {
        car_d.value = car_a.value*0.95;
    }
    car_d.innerHTML = "";
    car_d.innerHTML += car_d.value + ' $';
}

power.onchange = function(){
    let moshnost = document.querySelector('.moshnost').innerHTML = power.value;
}


btn.onclick = function () {
   if (car_a.value != " " || car_b.value != " " || car_c.value != " ") 
   {let sum = car_a.value + car_b.value + car_c.value + car_d.value + (power.value*cost);
    sum1.innerHTML = 'Стоимость вашего автомобиля составляет :  ' + sum + ' $';}
    else {error.innerHTML += "Введите все значения!" }
    
}

document.getElementById('forma').onsubmit = function(){return false};
