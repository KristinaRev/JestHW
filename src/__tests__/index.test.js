import { getPercents } from "../index";

describe("test getPercents", ()=> {
    it('getPercents 100/100*30 to equal 30', () => {
        const result = getPercents(30, 100);
        expect(result).toBe(30);
    })
    it('getPercents 70/100*12 to equal 8.4', () => {
        const result = getPercents(12, 70);
        expect(result).toBe(8.4);
    })
    it('getPercents 10/100*30 to equal 3', () => {
        const result = getPercents(30, 10);
        expect(result).toBe(3);
    })
}
)