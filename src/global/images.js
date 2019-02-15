import house_one from '../statics/house_one.jpg';
import house_two from '../statics/house_two.jpg';
import house_three from '../statics/house_three.jpg';

const IMAGES = {
    houseOne: house_one,
    houseTwo: house_two,
    houseThree: house_three,
};

export function getImage(name) {
    console.log(name);
    if (IMAGES.hasOwnProperty(name)){
        return IMAGES[name];
    }
    return IMAGES[house_one]
}

