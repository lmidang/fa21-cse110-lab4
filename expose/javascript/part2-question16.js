let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (var name in statistics) {
    if ((name[0] == 'r') || (statistics[name] % 2 != 0)) {
        console.log(statistics[name]);
    }
}