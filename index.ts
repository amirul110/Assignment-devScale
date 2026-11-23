import {input, select } from "@inquirer/prompts";
import { hitungBMI, kategoriBMI } from "./bmi";
import {  LuasPersegiPanjang } from "./3.geometry";
import { Hitungdiskon, hitunngHargaAkhir } from "./diskon";



async function main() {
  const pilihan = await select({
    message: "Pilih Program:",
    choices: ["Kalkulasi BMI", "Diskon kalkulator", "geometry", "keluar"]
  })

  if(pilihan === "Kalkulasi BMI"){
    const berat = Number(await input({ message: "masukkan berat badan (kg):"}))
    const tinggi = Number(await input({message: "masukan tinggi badan"}))
    const bmi = hitungBMI(berat , tinggi)
    console.log("BMI kamu: " + bmi.toFixed(2))
  } else if (pilihan === "Diskon kalkulator"){
    const harga = Number(await input({ message : "masukan harga"}))
    const persen =Number(await input({message: "masukan diskon"}))
    console.log("jumlah diskon: " + Hitungdiskon(harga, persen))
    console.log("harga akhir:" + hitunngHargaAkhir(harga, persen))
  } else if (pilihan === "geometry"){
    const panjang = Number(await input({ message: "masukan panjang"}))
    const lebar = Number(await input({ message: "masukan lebar"}))
  console.log("luas persegi panjang: " + LuasPersegiPanjang(panjang, lebar))
  } else{
    console.log("terrima kasih, sampai jumpa")
  }
}

main()

