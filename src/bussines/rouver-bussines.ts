export class RouverBussines{

    public async moveRouver(zone: string,rouver: string[], command: string){
        const zoneWork = zone.split(" ");
        const commandArray = command.split('');

        for(let i = 0; i < command.length; i++){
           if(commandArray[i] == "L"){

           }
        }
    }

    public setDirection(myDirection, move){
        let newDirection = "";
        if(myDirection == "N"){
            if(move == "R"){
                newDirection = "E";
            }
            if(move == "L"){
                newDirection = "W";
            }
        }

        if(myDirection == "S"){
            if(move == "R"){
                newDirection = "W";
            }
            if(move == "L"){
                newDirection = "E";
            }
        }

        if(myDirection == "E"){
            if(move == "R"){
                newDirection = "S";
            }
            if(move == "L"){
                newDirection = "N";
            }
        }

        if(myDirection == "W"){
            if(move == "R"){
                newDirection = "N";
            }
            if(move == "L"){
                newDirection = "S";
            }
        }

        return newDirection;
    }

    public async processMove(start){
        if(start[2] == "N"){
           start[1]++;
        }

        if(start[2] == "S"){
            start[1]--;
        }

        if(start[2] == "E"){
            start[0]++;
        }

        if(start[2] == "W"){
            start[1]--;
        }
        return start;
    }
}