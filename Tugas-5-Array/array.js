console.log("Tugas No 1");
function range(startNum,finishNum){
    var a =[];
    if(!startNum || !finishNum){
      return -1;
    }else if (finishNum <= startNum){
      a = Array(startNum-finishNum+1).fill().map(()=>startNum--);
    }else{
       for(var i = startNum ; i<= finishNum; i++){
         if(finishNum > startNum)
         {a.push(i);}
         }
        }
    return a;
  }
  
  console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(1)) // -1
  console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
  console.log(range(54, 50)) // [54, 53, 52, 51, 50]
  console.log(range())
  console.log("\n");

  console.log("Tugas No 2");
  function rangeWithStep(startNum, finishNum, step) {
    if (typeof finishNum == 'undefined') {
        finishNum = startNum;
        startNum = 0;
    }
    if (typeof step == 'undefined') {
        step = 1;
    }
    if ((step > 0 && startNum >= finishNum) || (step < 0 && startNum <= finishNum)) {
        return [];
    }
   
    var result = [];
    if(startNum >= finishNum){
        result = Array(startNum-finishNum+step).fill().map(()=> startNum-step);
      }else{
    for (var i = startNum; step > 0 ? i <= finishNum : i >= finishNum; i += step) {
        result.push(i);
    }
}
    return result;
 }
    console.log(rangeWithStep(1, 10, 2)) ;
    // [1, 3, 5, 7, 9]
    console.log(rangeWithStep(11, 23, 3)) ;
    // [11, 14, 17, 20, 23]
    console.log(rangeWithStep(5, 2, 1)) ;
    // [5, 4, 3, 2]
    console.log(rangeWithStep(29, 2, 4));
    // [29, 25, 21, 17, 13, 9, 5] 
    console.log("\n");

    console.log("Tugas No 3");
    function sum(startNum, finishNum, step) {
        var x = [];
        if (startNum == null) {
        return (0);
        }
        if (step >= 0) {
        for (var y = startNum; y <= finishNum; y += step) {
        x.push(y)
        }
        } else {
        for (var z = startNum; z >= finishNum; z += step) {
        x.push(z)
        }
        }
        return x.reduce ((x, y) => x + y, 0);
        }

console.log(sum(1,10)); 
// 55
console.log(sum(5, 50, 2)) ;
// 621
console.log(sum(15,10)) ;
// 75
console.log(sum(20, 10, -2));
// 90
console.log(sum(1)) ;
// 1
console.log(sum()) ;
// 0
console.log("\n");

    console.log("Tugas No 4");
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]

function dataHandling(arr){
    var array = arr.length;
    var data = "";

    for(var i = 0; i < array; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(j === 0){
                data += "Nomor ID:  " + arr[i][j] + "\n";  
            }
            else if( j === 1){
                data += "Nama Lengkap:  " + arr[i][j] + "\n";
            }
            else if(j === 2){
                data += "TTL:  " + arr[i][j] + " " + arr[i][j+1] + "\n";
                j++;
            }
            else{
                data += "Hobi:  " + arr[i][j] + "\n";
            }
        }
        data+= "\n";
    }

    return data;
}

var hasil = dataHandling(input);
console.log(hasil)
console.log("\n");


console.log("Tugas No 5");
function balikKata(word){

        var len = word.length;
        var reversed_word = "";

        for(var i = (len-1); i >= 0 ; i--){
            reversed_word += word[i];
        }
        return reversed_word;
    }
   console.log(balikKata('Kasur Rusak'));
   console.log(balikKata("SanberCode"));
   console.log(balikKata("Haji Ijah")); 
   console.log(balikKata("racecar")) ;
   console.log(balikKata("I am Sanbers"));
   console.log("\n");


console.log("Tugas No 6");
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr){
    var array = arr.length;
    var data = "";

    for(var i = 0; i < array; i++){
            if(i === 0){
                data += "Nomor ID:  " + arr[i];  
            }
            else if( i === 1){
                data += "Nama Lengkap:  " + arr[i];
            }
            else if(i === 2){
                data += "TTL:  " + arr[i];
            }else if (i === 3){
                data += arr[i];
            }else{
                data += "Hobi:  " + arr[i];
            }
        
        data+= "\n";
    }

    return data;
}

var hasil = dataHandling2(input);
console.log(hasil)
input.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung",
            "Pria", "SMA Internasional Metro")
console.log(input)

var tanggal = "21/05/1989"
var bulan = tanggal.split("/")
console.log(bulan)

var bulan = 05;
switch(bulan) {
    case 1: bulan = 'Januari'; break;
    case 2: bulan = 'Februari'; break;
    case 3: bulan = 'Maret'; break;
    case 4: bulan = 'April'; break;
    case 5: bulan = 'Mei'; break;
    case 6: bulan = 'Juni'; break;
    case 7: bulan = 'Juli'; break;
    case 8: bulan = 'Agustus'; break;
    case 9: bulan = 'September'; break;
    case 10: bulan = 'Oktober'; break;
    case 11: bulan = 'November'; break;
    case 12: bulan = 'Desember'; break;
}
var hasil = bulan;
console.log(hasil);

var tanggal = "21/05/1989"
var bulan = tanggal.split("/")
console.log(bulan)

var join = bulan.join("-")
console.log(join) 

var nama = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
var irisan = nama.slice(1,2)
console.log(irisan); 
