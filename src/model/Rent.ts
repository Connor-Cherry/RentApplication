class Rent{
    static readonly months = 12;
    private owedTotal: number;
    private paidTotal: number;
    private monthsPaid: number;
    private netTotal: number;

    constructor(inOwedTotal: number, inPaidtotal: number, inMonthsPaid: number, inNetTotal: number)
    {
        this.owedTotal = inOwedTotal;
        this.paidTotal = inPaidtotal;
        this.monthsPaid = inMonthsPaid;
        this.netTotal = inNetTotal;
    }

    monthsPaidNet(){

    }
}

export {Rent};