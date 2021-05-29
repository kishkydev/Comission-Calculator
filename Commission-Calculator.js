function commissionCharges(X) {
    if (X === null || X === undefined){
        console.log ("Please enter a valid amount");
    }
    else if (X < 0){
        console.log ("Please enter a valid amount in number");
        }
    else if (isNaN(X)){
            console.log ("Incorrect input,please enter a valid positive amount");
            }
    else {

        if(X <= 5000) {
        console.log ("#10.00");
    }
    else if(X >=5001 && X <= 50000) {
        console.log ("#25.00");
    
    }
    else {
        console.log ("#50.00");
    }
}
}
commissionCharges(3000)
commissionCharges(10000)
commissionCharges(300000)
commissionCharges()
commissionCharges(-6567)
commissionCharges("abcd34")


