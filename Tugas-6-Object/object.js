console.log("Tugas No 1");
function arrayToObject(arr) {

    for (var i = 0; i < arr.length; i++) {
        var objPeople = {};
        var now = new Date()
        var thisYear = now.getFullYear()
        for (var j = 0; j < arr[i].length + 1; j++) {
          
          if (j === 0) {
                console.log(i + 1 + '. ' + arr[i][j] + ' ' + arr[i][j + 1] + ':');
                objPeople.firstName = arr[i][j];
            } else if (j === 1) {
                objPeople.lastName = arr[i][j];
            } else if (j === 2) {
                objPeople.gender = arr[i][j];
            } else if (j === 3) {
                if (arr[i][j] !== undefined && arr[i][j] <= thisYear) {
                    objPeople.age = 2021 - arr[i][j];
                } else if (arr[i][j] !== thisYear || arr[i][j] > thisYear) {
                    objPeople.age = 'Invalid birth year';
                }
            } 
        }
      console.log(objPeople);
    }
}
var people = [ ["Bruce", "Banner", "male", 1975], 
              ["Natasha", "Romanoff", "female"] ]
arrayToObject(people);
console.log("\n");

console.log("Tugas No 2");
function makeObj(memberID, money) {
    this.memberID = memberID;
    this.money = money;
    this.listPurchased = [];
    this.changeMoney = 0;
}

function shoppingTime(memberId, money) {
    if (memberId === '' || (memberId === undefined && money === undefined)) {
        return "Mohon Maaf, toko X hanya berlaku untuk member saja";
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    } else {
        shoppingObj = new makeObj(memberId, money);
        shoppingObj.memberID = memberId;
        shoppingObj.money = money;
        var Purchased = true;
        while (money > 0 && Purchased) {
            if (money >= 1500000) {
                shoppingObj.listPurchased.push('Sepatu brand Stacattu');
                money -= 1500000;
                Purchased = true;
            }
            if (money >= 500000) {
                shoppingObj.listPurchased.push('Baju brand Zoro');
                money -= 500000;
                Purchased = true;
            }
            if (money >= 250000) {
                shoppingObj.listPurchased.push('Baju brand H&N');
                money -= 250000;
                Purchased = true;
            }
            if (money >= 175000) {
                shoppingObj.listPurchased.push('Sweater brand Uniklooh');
                money -= 175000;
                Purchased = true;
            }
            if (money >= 50000) {
                shoppingObj.listPurchased.push('Casing Handphone');
                money -= 50000;
                Purchased = true;
            }
            Purchased = false;
        }
        shoppingObj.changeMoney = money;
        return shoppingObj;

    }
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log("\n");

console.log("Tugas No 3");
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    var tempat = [];

    for(var i = 0; i < arrPenumpang.length; i++) {
      
      for(var j = 0; j < rute.length; j++) {
        if(arrPenumpang[i][1] === rute[j]) {
          var naikDari = j;
        }else if(arrPenumpang[i][2] === rute[j]) {
          var tujuan = j;
        }
      }

      var object = {};
      object.penumpang = arrPenumpang[i][0];
      object.naikDari = arrPenumpang[i][1];
      object.tujuan = arrPenumpang[i][2];
      object.bayar = (tujuan - naikDari) * 2000;

      tempat.push(object);

    }

    return tempat;

  }
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));