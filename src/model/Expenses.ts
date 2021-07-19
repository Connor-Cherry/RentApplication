import {Electricity} from "./Electricity";
import {Rent} from "./Rent";

class Expenses{
    private rent: Rent;
    private electricity: Electricity;

    constructor(inRent: Rent, inElectricity: Electricity)
    {
        this.rent = inRent;
        this.electricity = inElectricity;
    }
}

export {Expenses};