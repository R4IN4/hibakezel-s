import { TestWatcher } from "@jest/core";
import { GenderGuesser } from "./GenderGuesser";
import { AttandanceList, AttendanceList } from "./AttandanceList";

describe('Teszt for GenderGuesser', () => {
    let name;
    beforeAll(() => {
        name = new GenderGuesser();
    });
    test("tim", () => {
        name.getGuess("tim").then(result => {
            expect(result).resolve;
        });
    });
    test('levente is male', () => {
        name.getGuess('levente').then(result => {
            expect(result).arrayContaining('male');
        });
    });
    test("value return", () => {
        name.getGuess('alex').then(result => {
            expect(result).not.toBe(null);
        });
    });
});


describe ('Test for AttandanceList', () => {
    let lista;
    beforeAll(()=>{
        lista = new AttendanceList();
});
    test('lista value', ()=>{
        expect(lista.add('value123')).not.toBeNull();

    });
});