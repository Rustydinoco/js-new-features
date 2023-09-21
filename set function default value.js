//default value adalah nilai yang digunakan saat fungsi dipanggil taanpa memberikan nilai pada argumen

function angka (a, b){    //no default value
    return a*b
}

////////////////////////////////////////////////////////////

function angka2 (a, b =2){  //with default value
    return a*b
}


function kata (nama = 'budi',hobby= 'makan'){
    console.log(`${nama} ${hobby}`) 
}