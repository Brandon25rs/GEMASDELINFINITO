
let btnQuote = document.getElementById("btnQuote");
    btnQuote.addEventListener ("click", function (e){
    e.preventDefault ();
let btnPrint =document.getElementById("btnPrint");    
   
    let hours = parseInt (document.getElementById("inputHours").value);
    let rate = parseFloat (document.getElementById("inputRate").value);
    let cardText = document.getElementById("cardText");
    let cardCost = document.getElementById("cardCost");
    let iva = document.getElementById("checkIVA").checked;
    let email =document.getElementById("inputEmail").value;
    let name = document.getElementById("inputName").value;
    let extras = document.getElementById("inputExtras");
    let changes = parseInt(document.getElementById("inputChanges").value);
    let fixedCost = parseFloat (document.getElementById("inputCosts").value);
    let flag = true
   
    
    if (isNaN(hours)) {
        console.log("Hours not a number");
        console.log(document.getElementById("inputHours").style.borderColor);
        document.getElementById("inputHours").style.borderColor = "#00FF00";
        flag=false;
        
    } else {
        document.getElementById("inputHours").value = hours;
        document.getElementById("inputHours").style.borderColor = "#00FF00";
    } //IF 

    if (isNaN(rate)) {
        
        document.getElementById("inputRate").style.borderColor = "#00FF00";
        flag=false;
    }
    else {
        document.getElementById("inputRate").value = rate;
        document.getElementById("inputRate").style.borderColor = "#00FF00";
    }

    if (isNaN(rate)) {
        

    }//if 

    if (flag) {
        cardText.innerHTML = `Email: ${email}, <br/> Name: ${name}, <br/>
        Esta es su cotización: <br/> ${getRequirements(extras)}`;
        cardCost.innerHTML = "$ " +  quote(hours, rate, iva, extras, changes, fixedCost).toFixed(2);
         
    } // if flag
});

btnPrint.addEventListener ("click", function (e){
    e.preventDefault ();
    window.print();

});

const getRequirements = (ex) => {

    let str =`<ul class="list-group-item">`;
    
        for (let i = 0; i < ex.options.length; i++) { //for inicio; condición; incremento/decremento
            console.log (ex.options[i].selected);
         if (ex.options[i].selected) {
            str += `<li class="list-group-item-action">  ${ex.options[i].text}; </li>`; 
            } //if
        } //for i

        return str;
};




//función para cotizar un do while 
function quote (h,r,vat,ex, p, fc) { //ex=extras
    //  if (vat==true) {
       p  /= 100; // p=p/100  change management 
      let result = (h*r) * (1+p) ;
      let i=0; //inicio 
      ex.options.length

        do {
            console.log (ex.options[i].selected);
         if (ex.options[i].selected) {
            result += parseFloat(ex.options[i].value);
            } //if
            i ++; //incremento/decremento
        }   while (i< ex.options.length);  //condición)
     
        result += fc; //fixed costs
        if (vat) {
            result *= 1.16;
        }
        
        return result;

                                      } //quote
