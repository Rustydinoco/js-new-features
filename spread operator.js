//spread operator adalah mengubah suatu array atau object menjadi deret/nilai parameter dalam function

const genap =[2,4,6,8,10]

Math.max(genap) //output=NaN

Math.maz(...genap) //output= 2 4 6 8 10
//outputnya sama seperti nilai array tetapi dalam bentuk nlai parameter dalam fuction