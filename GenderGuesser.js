import axios from "axios";

export class GenderGuesser {
    getGuess(name){
        let gend = axios.get('https://api.genderize.io/?name=' + name);

        return gend;
    }
}