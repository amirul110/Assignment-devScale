

export  function Hitungdiskon(harga :number, persen : number) {
 const diskon = harga * persen / 100 
 return diskon
}

export function hitunngHargaAkhir(harga: number, persen : number){
  const diskon = Hitungdiskon(harga, persen)
  const hargaAkhir = harga - diskon;
  return hargaAkhir
}