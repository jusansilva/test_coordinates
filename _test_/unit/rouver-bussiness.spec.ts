import Container from "typedi";
import { RouverBussines } from "../../src/bussines";
const bussines = Container.get(RouverBussines);

describe('testing RouverBussines functions', () => {
    test('Move Rouver function', async() => {
        const zone = "5 5";
        const rouvers = [
            {
                "rouver": "1 2 N",
                "command": "LMLMLMLMM"
            },
            {
                "rouver": "3 3 E",
                "command": "MMRMMRMRRM"
            }
        ];
        expect(await bussines.moveRouver(zone, rouvers)).toEqual([["1","3","N"],["5","1","E"]]);
    });

    test('Set Direction function', async() => {
        const myDirection = "N";
        const turnSide = "L"
        expect(await bussines.setDirection(myDirection, turnSide)).toEqual("W");
    });

    test('Process Move function', async() => {
        const start = ["1","2","N"];
        const max =  ["5","5"];
        expect(await bussines.processMove(start, max)).toEqual(["1","3","N"]);
    });
});