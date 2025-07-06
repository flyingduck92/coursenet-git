/* CASE 5 

  A IT Services Company works in Laptop and Gadget Services gives special services 
  with the following criteria (based on buyer status):

  if buyer is foreigners: 
    a. If foreigner stays in Indonesia less than 3 years, then no discount
    b. If foreigner stays in Indonesia between 3 to 5 years, then got discount with the following prerequisites: 
      b1. if below 21 years, got discount 10%  
      b2. if above 21 years, got discount 5%  
    c. If foreigner stays in Indonesia above 5 years, then got discount with the following prerequisites:
      c1. if below 21 years, got discount 5%  
      c2. if above 21 years, got discount 2.5%
  if buyers is native Indonesian:
    a. if native Indonesian lives in West Region, got discount 10%
    b. if native Indonesian lives in Middle Region, got discount 15%
    c. if native Indonesian lives in East Region, got discount 17.5%

  Pricing Calculation: 
  Buyer a foreigner, stays in Indonesia for 3 years and 27 years old. 
  If he total purchase is Rp 100,000.00
  Then eligible to get 5% discount. 
  Total the buyer should pay is Rp 95,000.00  
*/

let buyer_status = 'WNA'  /* WNI / WNA */
let location = 'East' /* West / Middle / East */
let age = 27 /* In years */
let staysOrLivesInYears = 3 /* In years */
let sub_total = 100000
let discount
let total_price

switch (buyer_status) {
  case 'WNA':
    if (staysOrLivesInYears < 3) {
      total_price = sub_total
    } else if (staysOrLivesInYears >= 3 && staysOrLivesInYears <= 5) {
      if (age < 21) {
        discount = 0.1 // 10% off
        total_price = sub_total - (sub_total * discount)
      } else {
        discount = 0.05 // 5% off
        total_price = sub_total - (sub_total * discount)
      }
    } else if (staysOrLivesInYears > 5) {
      if (age < 21) {
        discount = 0.05 // 5% off
        total_price = sub_total - (sub_total * discount)
      } else {
        discount = 0.025 // 2.5% off
        total_price = sub_total - (sub_total * discount)
      }
    }
    break
  case 'WNI':
    if (location === 'West') {
      // 10% off
      discount = 0.1
      total_price = sub_total - (sub_total * discount)
    } else if (location === 'Middle') {
      // 15% off
      discount = 0.15
      total_price = sub_total - (sub_total * discount)
    } else {
      // 17.5% off
      discount = 0.175
      total_price = sub_total - (sub_total * discount)
    }
    break
}

if (buyer_status === 'WNA') {
  console.log(`
    Total Purchase Rp. ${sub_total.toLocaleString()}
    with discount ${discount * 100}%
    Should pay Rp. ${total_price.toLocaleString()}
  `)
} else {
  console.log(`
    Total Purchase Rp. ${sub_total.toLocaleString()}
    with discount ${discount * 100}%
    Should pay Rp. ${total_price.toLocaleString()}
  `)
}