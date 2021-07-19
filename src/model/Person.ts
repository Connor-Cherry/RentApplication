import {Expenses} from "./Expenses";

class Person{
    name: string;
    expenses: Expenses;

    constructor(inName: string, inExpenses:Expenses)
    {
        this.name = inName;
        this.expenses = inExpenses;
    }
}