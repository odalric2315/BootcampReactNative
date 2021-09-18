console.log('Tugas No 1');
console.log('LOOPING PERTAMA')
var flag = 1;
while(flag < 21) { 
  flag = flag +1;
  console.log(flag + " - I love coding"); // Menampilkan nilai flag pada iterasi tertentu
  flag++;// Mengubah nilai flag dengan menambahkan 1
}
console.log('LOOPING KEDUA')
while(flag >= 2){
  flag = flag-1
  console.log(flag + ' - I will become a mobile developer');
flag--
}
console.log('\n');

console.log('Tugas No 2');
for(var nilai = 1; nilai <21; nilai++){
    if(nilai % 2 === 0){
    console.log(nilai + " - Berkualitas");
  } else if (nilai == 3 || nilai % 3 === 0){
    console.log(nilai + " - I Love Coding");
  }else {
    console.log(nilai + " - Santai");
  }}
console.log('\n');

console.log('Tugas No 3');
var angka = "";
for (var i =1; i <= 8 * 4; i++){
  angka += "#";
  if (i % 8 === 0){
    angka += "\n";
  }
}
console.log(angka);
console.log('\n');

console.log('Tugas No 4');
var angka = "";
for (var i = 1; i <= 8; i++) {
   for (var j = 1; j < i; j++) {
     angka += "#";
    }
     angka += "\n";
 }
console.log(angka);
console.log('\n');

console.log('Tugas No 5');
var a = "";
var b = 8;
var c = 8;

for (var i =1; i <= c; i++){
  if(i % 2 === 0){
   for (var j= 1; j<= b; j++)
     {
       if(j % 2 === 0){
         a += "#";
       }else{
         a += " ";
       }
     }
  }else{
    for (var j= 1; j<=b; j++){
      if(j % 2 === 0 ){
         a += " ";
      }else{
        a += "#";
      }
    }
  }
    a += "\n";
  }
console.log(a);
