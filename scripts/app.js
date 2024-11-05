// Loop while ga doir masalalar

 // 1-masala
 {
    let a = 5
    let b = 2
    while (a > b) {
        a %= b
    }
    console.log(`kesmadan bosh qismi ${a}`)
 }
// 2-masala
 {
    let a = 5
    let b = 2
    let count = 1
    while (a > b) {
        count++
        a %= b
    }
    console.log(`kesmada b dan ${count} ta`)
 }
 // 3-masala
 {
   let n = 5
   let k = 2
   let count = 0
   while (n > k) {
       count++
       n-=k
   }
   console.log(`${count} butun qism  ${n} esa qoldiq qism`)
   
 }
 // 4-masala
 {
    let n = 15
    while (n >= 3) {
        n -= 3
    }
    if(n === 0){
        console.log(`3 ning darajasi`)
    }else{
        console.log(`3 ning darajasi emas`)
    }
 }
 // 5-masala
 {
    let n = 128
    let k = 0
    while (n >= 2) {
        k++
        n /= 2
    }
    if(n === 1){
        console.log(`2 ning  ${k} darajasi`)
    }else{
        console.log(`2 ning darajasi emas`)
    }
 }
 // 6-masala
 {
    let n = 41
    let k
    while (n > 0) {
        if (n % 2 === 0) {
          k = 2;
          break;
        } else {
          k = 1;
          break;
        }
        n--;
      }
    
      console.log(`Oxirgi ko'payuvchi ${k} bo'ladi`);
 } 
 // 7-masala
 {
    let n = 3
    let k = 1
    
  while (true) {
    if (k * k > n) {
      console.log(`Kvadrati ${n} dan katta bo'ladigan eng kichik butun k soni: ${k}`);
      break;
    }
    k++;
  }
 }
 // 8-masala
 {
    let n = 10
    let k = n
    
    while (true) {
        if (k * k <= n) {
          console.log(`Kvadrati ${n} dan katta bo'lmagan eng katta butun k soni: ${k}`);
          break;
        }
        k--;
      }
 }
 // 9-masala
 {
   let n = 8
   let k = 1;
   while (true) {
     if (3 ** k > n) {
       console.log(`Shartni qanoatlantirwchi eng kichik butun k soni: ${k}`);
       break;
     }
     k++;
   }
 }
 // 10-masala
 {
    let n = 10
   let k = n;
   while (true) {
     if (3 ** k <= n) {
       console.log(`Shartni qanoatlantirwchi eng katta butun k soni: ${k}`);
       break;
     }
     k--;
   }
 }
 

 