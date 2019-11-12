
  

  function generateBill() 
  {
  var planeDosaPrice=40;
  var chickenMasalaPrice=180;
  var paneerMasalaPrice=140;
  var masalaDosaPrice=60;
  var butterPaneerPrice=145;
  var chickenKashaPrice=160;
  var vat= 5
  var discount=30;
  var total=0;
  var items=document.getElementById('foodItems').value;
  var quantity=document.getElementById('qty').value;
  var vat=document.getElementById('tip').value;
  quantity=Number(quantity);
  if(items=="planeDosa")
  {
    planeDosaPrice*=quantity ;
      console.log(planeDosaPrice);
     
      return planeDosaPrice; 
      total=total+planeDosaPrice+vat;
      console.log(total);
      return total;
      
  }
  else if(items=="chickenMasala")
  {
    chickenMasalaPrice*=quantity;
    console.log(chickenMasalaPrice);
    return chickenMasalaPrice;
  }
  else if(items=="paneerMasala")
  {
    paneerMasalaPrice*=quantity;
    console.log(paneerMasalaPrice);
    return  paneerMasalaPrice;
  }

else if(items=="masalaDosa")
{
    masalaDosaPrice*=quantity;
    console.log(masalaDosaPrice);
    return masalaDosaPrice;
}
else if(items=="butterPaneer") {
    butterPaneerPrice*=quantity;
    console.log(butterPaneerPrice);
    return butterPaneerPrice;

}
else {
    chickenKashaPrice*=quantity;
}


  }


  function displayitems()
  {
   
      if(items=="planeDosa")
      
      {
         var x= document.getElementById('bill');
          var node = document.createElement('p');   
          var t = document.querySelector('result');
          t.appendChild(node);                                         
 
  
           
      }
  }