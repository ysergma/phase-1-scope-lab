// Write your solution in this file!
var customerName='bob';
function upperCaseCustomerName(){
        return customerName=customerName.toUpperCase();
         ;
}

function setBestCustomer(){
    window.bestCustomer= 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){

    window.bestCustomer ="maybe bob";
    return bestCustomer;
}

const leastFavoriteCustomer="dd";
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer ="cc";
    
}