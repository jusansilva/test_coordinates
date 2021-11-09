
export class RouverBussines {

    public async moveRouver(zone: string, rouver: object[]): Promise<object> {
        const zoneWork = zone.split(" ");
        const output = Promise.all(rouver.map(async (cord, index) => {
            let command = cord["command"].split('');

            let rv = cord["rouver"].split(' ')

            for (let i = 0; i < command.length; i++) {
                if (command[i] === "L" || command[i] === "R") {
                    let direction = await this.setDirection(rv[2], command[i]);
                    rv = [`${rv[0]}`,`${rv[1]}`,`${direction}`];
                }
                if (command[i] === "M") {
                    rv = await this.processMove(rv, zoneWork);
                }
            }

            return rv;
        }))

        return output
    }

    public setDirection(myDirection, move) {
        if (myDirection == "N") {
            if (move == "R") {
                return "E";
            }
            if (move == "L") {
                return "W";
            }
        }

        if (myDirection == "S") {
            if (move == "R") {
                return "W";
            }
            if (move == "L") {
                return "E";
            }
        }

        if (myDirection == "E") {
            if (move == "R") {
                return "S";
            }
            if (move == "L") {
                return "N";
            }
        }

        if (myDirection == "W") {
            if (move == "R") {
                return "N";
            }
            if (move == "L") {
                return "S";
            }
        }
    }

    public async processMove(start, max) {
        if (start[2] == "N") {
            if (!(Number(start[1]) + 1 > max[1])) {
                start[1] = `${Number(start[1]) + 1}`;
                return [`${start[0]}`, `${start[1]}`, `${start[2]}`];
            }
        }

        if (start[2] == "S") {
            if (!(Number(start[1]) - 1 < 0)) {
                start[1] = `${Number(start[1]) - 1}`;
                return [`${start[0]}`, `${start[1]}`, `${start[2]}`];
            }
        }

        if (start[2] == "E") {
            if (!(Number(start[0]) + 1 > max[0])) {
                start[0] = `${Number(start[0]) + 1}`;
                return [`${start[0]}`, `${start[1]}`, `${start[2]}`];
            }
        }

        if (start[2] == "W") {
            if (!(Number(start[0]) - 1 < 0)) {
                start[0] = `${Number(start[0]) - 1}`;
                return [`${start[0]}`, `${start[1]}`, `${start[2]}`];
            }
        }
        return [`${start[0]}` , `${start[1]}`, `${start[2]}`];
    }
}