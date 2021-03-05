var jmlAngkot = 10;
var angkotBeroperasi = 6;



// while (noAngkot <= angkotBeroperasi) {
//     console.log(`Angkot No.${noAngkot} beroperasi dengan baik.`);

// noAngkot++;
// }

// for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');

// }

for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {

if ( noAngkot <= 6 && noAngkot !== 5 ) {
    console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.');    
}else if ( noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log('Angkot No. ' + noAngkot + ' Sedang lembur.');
}else {
    console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi.');
}

}