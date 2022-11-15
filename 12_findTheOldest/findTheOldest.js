const findTheOldest = function(people) {
    const ages = [];
    const currentYear = new Date().getFullYear();
    let len = 0;
    for (let i = 0; i < people.length; i++) {
        len = Object.keys(people[i]).length;
        if (Object.keys(people[i]).length == 2) {
            ages.push(currentYear - people[i].yearOfBirth);
        }
        else {
            ages.push(people[i].yearOfDeath - people[i].yearOfBirth);
        }
    }
    let maxIndex = ages.indexOf(Math.max(...ages));
    return people[maxIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
