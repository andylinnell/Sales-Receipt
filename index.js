// Create a sales receipt summary given subtotal and taxRate

function calculateSalesTax (subtotal, taxRate) {
    const taxTotal = subtotal * taxRate;
    return taxTotal;
}

const TAX_RATE = 0.07 // for palm beach county, fl, US ----- screaming snake case  --> (TAX_RATE)
const customerSubtotal = 17.25

// calculate all the stuffs:
const customerTaxTotal = calculateSalesTax(customerSubtotal, TAX_RATE);
const customerTotal = customerSubtotal + customerTaxTotal;

// output all the stuffs:
console.log(`Subtotal          $${customerSubtotal.toFixed(2)}`);
console.log(`Tax               $ ${customerTaxTotal.toFixed(2)}`);
console.log('--------------------------');
console.log(`TOTAL             $${customerTotal.toFixed(2)}`);


