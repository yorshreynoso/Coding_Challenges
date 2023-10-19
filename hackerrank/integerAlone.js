
let integerNumbers = [1, 1, 2,3,3];
let checking = {};
let value = 0;

for(let number of integerNumbers) {
    if(checking[number]) {
        //segun yo existe
        console.log('existe');
        // checking[number] += 1
        // checking[number]++;
        checking[number] = checking[number] +1
    } else {
        console.log('np');
        checking[number] = 1;
    }
}

    for(let number in checking){
        if(checking[number] === 1) {
            console.log(number);
        }
    }