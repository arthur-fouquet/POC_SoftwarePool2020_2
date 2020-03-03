function doOp(nbr1, sign, nbr2) {
    switch (sign) {
        case '+':
            console.log(nbr1 + nbr2);
            break;
        case '-':
            console.log(nbr1 - nbr2);
            break;
        case '*':
            console.log(nbr1 * nbr2);
            break;
        case '/':
            if (nbr2 === 0) {
                console.log('Division by 0');
                return (84);
            }
            console.log(nbr1/nbr2);
            break;
        default:
            console.log('Bad operator');
            break;
    }
}
if (process.argv.length != 5) {
    console.log('Usage error');
    return 84;
}
let nb1 = process.argv[2];
let nb2 = process.argv[4];
let operator = process.argv[3];
if (isNaN(nb1) === true || isNaN(nb2) === true) {
    return 84;
}
doOp(nb1, operator, nb2);