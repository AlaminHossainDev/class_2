let currencyName = prompt('Please Input Your currency Name:');
let currencyAmount = prompt('Please Input Your currency Amount:')

if( currencyName == "dollar" ) {
    console.log(`${currencyAmount}-${currencyName} = ${currencyAmount * 96}BDT `)
}
else if( currencyName == "pound" ) {
    console.log(`${currencyAmount}-${currencyName} = ${currencyAmount * 115}BDT `)
}
if( currencyName == "euro" ) {
    console.log(`${currencyAmount}-${currencyName} = ${currencyAmount * 98}BDT `)
}


