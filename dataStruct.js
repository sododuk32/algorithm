class Datas {

   

    constructor(sibal,sibal2){
        this.sibal = sibal;
        this.sibal2 = sibal2;
        this.addDog = (string)=>{

            return "개"+string + sibal;
        }
    }
    fullSibal() {
        return `this is full sibal method ${this.sibal}`
    }

}


let SibalData = new Datas("시발","개시발")



