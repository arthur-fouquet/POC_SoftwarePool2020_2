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

function doOp(nb1, nb2)
{

}

function errorHandler(nb1, nb2, operator, fct)
{
    if (isNaN(nb1) === true || isNaN(nb2) === true) {
        return 84;
    }
    if (operator === '/' && nb2 === 0) {
        return (84);
    }
    switch (operator) {
        case '+':
            fct(nb1, operator, nb2);
            break;
        case '-':
            fct(nb1, operator, nb2);
            break;
        case '*':
            fct(nb1, operator, nb2);
            break;
        case '/':
            fct(nb1, operator, nb2);
            break; 
        default:
            break;
    }
}



errorHandler(nb1, nb2, operator, doOp);

function oui(nbr, fct)
{
    fct(nbr, 2);
}
oui(1, doOp)