let cargoHold = ['Еда', 'Вода', 'Кристаллы', 'Оружие', 'Топливо'];

cargoHold.forEach((cargo) => {
    console.log('Внимание: груз ' + cargo + ' проверен');

    if (cargo == 'Кристаллы') {
        console.log('⚠️ Внимание! Обнаружен ценный груз!');
    }
});

let removedCargo = cargoHold.pop();
console.log('Разгружен последний отсек: ' + removedCargo);

let scienceCargo = cargoHold.slice(1, 4);
console.log(scienceCargo);
console.log(cargoHold);

cargoHold.splice(1, 2);
console.log(cargoHold);

cargoHold.splice(1, 0, 'Золото', 'Детектор лжи');
console.log(cargoHold);