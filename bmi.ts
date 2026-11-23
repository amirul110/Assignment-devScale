

 export function hitungBMI(beratBadan :number, tinggiBadan :number) {
  
 
  const tinggiMeter = tinggiBadan / 100
const bmi = beratBadan / (tinggiMeter * tinggiMeter) 

return bmi

 


}


export function kategoriBMI(bmi:number){
 if (bmi < 18.5){
    return 'Anda tergolong kurus'
  } else if (bmi >= 18.5 && bmi <= 24.9 ) 
    {
      return 'Anda tergolong Normal'
    } else if(bmi >= 25 && bmi <29.9) {
      return 'Anda tergolong overweight'
    } else if (bmi > 30){
      return 'Anda tergolong Obesitas'
    }
  
  }
