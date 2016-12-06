
///////// transaction_keypress //////////////////

$('input[type="text"]').keydown(function (event) {
    if (event.keyCode == 13) {
         event.preventDefault();
         return false;
    }
});

$('input[type="Date"]').keydown(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});

function finvoice(v1){
    if(window.event.keyCode=="40"){
        document.getElementById('cmbservice').focus();
    }
    if (window.event.keyCode == "13"){
        document.getElementById('binvnum').click();
        document.getElementById('cmbservice').focus();                                 
    }
}

function ftransactnum(v2){
    if (window.event.keyCode=="38"){
        document.getElementById('txtinvoicenum').focus();
    }
    if (window.event.keyCode=="40"){
        document.getElementById('txttrandate').focus();
    }
    if (window.event.keyCode == "13"){
        document.getElementById('txttrandate').focus();
    }
}

function ftrandate(v3){
    if (window.event.keyCode == "38"){
        document.getElementById('txttransacnum').focus();
    }
    if (window.event.keyCode == "40"){
        document.getElementById('cmbservice').focus();
    }
    if (window.event.keyCode == "13"){
        document.getElementById('cmbservice').focus();
    }
}

function fcmbservice(v4){
    if (window.event.keyCode=="38"){
        document.getElementById('txtinvoicenum').focus();
    }
    if (window.event.keyCode=="40"){
        document.getElementById('cmbtypeofserve').focus();
    }
    if (window.event.keyCode == "13"){
        document.getElementById('cmbtypeofserve').focus();
    }
}

function fcmbtypeofserve(v5){
    if (window.event.keyCode="38"){
        document.getElementById('cmbservice').focus();
    }
    if (window.event.keyCode=="40"){
        if (document.getElementById('cmbtypeofserve')["value"] == 'MAINTENANCE'){
            document.getElementById('cmbwarstat').disabled = true;
            document.getElementById('txtwarexpire').disabled = true;
            document.getElementById('txtwarexpire2').disabled = true;
            document.getElementById('mainscheddropdown').focus();
        }
        else{
            document.getElementById('cmbwarstat').disabled = false;
            document.getElementById('txtwarexpire').disbaled = false;
            document.getElementById('txtwarexpire2').disabled = false;
            document.getElementById('cmbwarstat').focus();
        }
    }
    if (window.event.keyCode == "13"){
        document.getElementById('cmbwarstat').focus();
    }
}


function fcmbwarstat(v6){
    if (window.event.keyCode == "38"){
        document.getElementById('cmbtypeofserve').focus();
    }
    if (window.event.keyCode == "40"){
        if (document.getElementById('transactionedit')["value"] == "EDITED"){
            document.getElementById('txtwarexpire2').focus();
        }
        else{
            document.getElementById('txtwarexpire').focus();
        }
    }
    if (window.event.keyCode == "13"){
        if (document.getElementById('transactionedit')["value"] == "EDITED"){
            document.getElementById('txtwarexpire2').focus();
        }
        else{
            document.getElementById('txtwarexpire').focus();
        }
    }
}

function fwarexpire(v7) {
 
    $('#txtwarexpire').keydown(function (h) {
        if (h.keyCode == 40) {
            var dateOfIncident = new Date($('#txtwarexpire').val()); // or Date.parse(...)
            var dateNow = new Date(); // or Date.now()                         
            if (dateNow > dateOfIncident) {
                alert('you are not allowed to set a past DATE in the warranty expiration');
                document.getElementById('txtwarexpire').focus();
                document.getElementById('txtwarexpire')['value'] = '';
                document.getElementById('txtwarexpire')['value'] = 'mm/dd/yyyy';
                
            } else {
                document.getElementById('txtservde').focus();
                return false;
            }
        }
    });                   

    if (window.event.keyCode=="38"){
        document.getElementById('cmbwarstat').focus();
    }
                 
    if (window.event.keyCode == 13){
        var dateOfIncident = new Date($('#txtwarexpire').val()); // or Date.parse(...)
        var dateNow = new Date(); // or Date.now()
        if (dateNow > dateOfIncident) {
            alert('you are not allowed to set a past DATE in the warranty expiration');
            document.getElementById('txtwarexpire')['value'] = 'mm/dd/yyyy';
            document.getElementById('txtwarexpire').focus();
        } else {
            document.getElementById('txtservde').focus();
        }
    }
}

function fwarexpire2(v72){
    document.getElementById('skipload')["value"] = "skip_load";
    if (window.event.keyCode == "38"){
        document.getElementById('cmbwarstat').focus();
    }
    if (window.event.keyCode == "40") {
        document.getElementById('txtservde').focus();
        //document.getElementById('mainscheddropdown').focus();                     
    }
    if (window.event.keyCode == "13") {
        document.getElementById('txtservde').focus();
        //document.getElementById('mainscheddropdown').focus();
    }
}

function ftxtmaineched(v8){
    if (window.event.keyCode=="38"){
        if (document.getElementById('transactionedit')["value"]=="EDITED"){
            document.getElementById('txtwarexpire2').focus();
        }
        else{
            document.getElementById('txtwarexpire').focus();
        }

    }
    if (window.event.keyCode=="40"){
        document.getElementById('txtmaindue').focus();
    }
    if (window.event.keyCode == "13"){
        document.getElementById('txtmaindue').focus();
    }
}

function fmaindue(v9){
    if (window.event.keyCode=="38"){
        document.getElementById('mainscheddropdown').focus();
    }
    if (window.event.keyCode == "40"){
        document.getElementById('txtsmsmess').focus();
    }
    if (window.event.keyCode == "13"){
        document.getElementById('txtsmsmess').focus();
    }
}

function fsmsmess(v10){
    if (window.event.keyCode == "38"){
        document.getElementById('txtmaindue').focus();
    }
    if (window.event.keyCode == "40"){
        document.getElementById('txtservde').focus();
    }                      
}

function transeditmssg() {                     
    alert('No transaction to be edited');
}

function transdeletemssg() {
    alert(' No transaction to be deleted');
}

function typeofserve() {
    $('#cmbtypeofserve').focus();
}
          

function servicetype(){              
    document.getElementById('buttonsms').click();
    return;
}

function servicetype2(){
    document.getElementById('cmbwarstat').disabled = true;
    document.getElementById('txtwarexpire').disabled = true;
    document.getElementById('txtwarexpire2').disabled = true;

    if (document.getElementById('txtsmsmess') != null) {              
        document.getElementById('mainscheddropdown').focus();
    }
    else {              
        document.getElementById('cmbtypeofserve').focus();}
}          

function typeofservice(){
    if (document.getElementById('cmbtypeofserve')['value'] == 'MAINTENANCE' || document.getElementById('cmbtypeofserve')['value'] == 'MAINTENANCE / WARRANTY'){
        if (document.getElementById('cmbtypeofserve')['value'] == 'MAINTENANCE'){
            document.getElementById('cmbwarstat')['value']     ="";
            document.getElementById('txtwarexpire')['value']   ="";
            document.getElementById('txtwarexpire2')['value']  ="";

            servicetype();

        }
        else {
            document.getElementById('cmbwarstat').disabled     =false;
            document.getElementById('txtwarexpire').disabled   =false;
            document.getElementById('txtwarexpire2').disabled = false;
            servicetype();
        }
        document.getElementById('mainscheddropdown').disabled =false;
        document.getElementById('txtmaindue').disabled        =false;
        document.getElementById('txtsmsmess').disabled        =false;
                  
        document.getElementById('mainscheddropdown').focus();
    }
    else{
        document.getElementById('cmbwarstat').disabled        =false;
        document.getElementById('txtwarexpire').disabled      =false;
        document.getElementById('txtwarexpire2').disabled     =false;
        document.getElementById('cmbwarstat').focus();
                  
        document.getElementById('mainscheddropdown')['value'] = "";
        document.getElementById('txtmaindue')['value'] = "";

        document.getElementById('txtsmsmess')['value']        ="";
        document.getElementById('mainscheddropdown').disabled =true;
        document.getElementById('txtmaindue').disabled        =true;
        document.getElementById('txtsmsmess').disabled        =true;
    }
}

function warrantystatus(){
    document.getElementById('txtwarexpire').focus();
}

function Func(elementRef){
    setCursorPositionToEnd('txtinvoicenum');
}

function Func2(elementRef){
    setCursorPositionToEnd('txtsearch');
}

function Func3(elementRef){
    setCursorPositionToEnd('txtsearchplatenum');
}

function Func4(elementRef){
    setCursorPositionToEnd('txtserchviewplatenum');
}         

function txtfirstfocus(){
    setCursorPositionToEnd('txtfirstname');
}

function  txtmiddlefocus() {
    setCursorPositionToEnd('txtmiddlename');
}

function txtaddressfocus() {
    setCursorPositionToEnd('txtaddress');
}

function txttelnofocus() {
    setCursorPositionToEnd('txttelno');
}          

function txtmobilenumfocus() {
    setCursorPositionToEnd('txtmobilenum');
}

function txtbirthdayfocus() {
    setCursorPositionToEnd('txtbirthday');
}

function txtbirthday2focus() {
    setCursorPositionToEnd('txtbirthday2');
}          

function Funcenginenum(elementRef) {
    setCursorPositionToEnd('txtenginenum');
    return;
}         
     
function setCursorPositionToEnd(elementId){
      var elementRef = document.getElementById(elementId);
      var cursorPosition = document.getElementById(elementId).value.length;

      if (elementRef != null){
          if (elementRef.createTextRange){
              var textRange = elementRef.createTextRange();
              textRange.move('character', cursorPosition);
              textRange.select();
          }
          else{
              if (elementRef.selectionStart){
                  elementRef.focus();
                  elementRef.setSelectionRange(cursorPosition, cursorPosition);
              }
              else{
                  elementRef.focus();
                  elementRef.setSelectionRange(cursorPosition, cursorPosition);
              }
          }
      }
}

function InvKeyCode(evt){
    var keyCode;
    if (evt.keyCode >= 48 && evt.keyCode < 58 || evt.keyCode == 45){
        keyCode = evt.keyCode;
    }
    else if (typeof (evt.charCode) != "undefined"){
        if (evt.keyCode != 13){
            keyCode = evt.charCode;
            alert("Invalid, because this is a numeric data type please re-type");
        }
    }
}
      
function mschedvalue(date, days){              
        var dateOfIncident = new Date($('#txtwarexpire').val()); // or Date.parse(...)
        var dateNow = new Date(); // or Date.now()
        if (dateNow > dateOfIncident) {
            alert('you are not allowed to set a past DATE in the warranty experition');
            document.getElementById('txtwarexpire')['value'] = 'mm/dd/yyyy';
            document.getElementById('txtwarexpire').focus();             
        }

        var nvalue = document.getElementById("mainscheddropdown").value;
        if(nvalue=="1 week"){
            vdays = 7;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById('txtmaindue').value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="2 weeks"){
            vdays = 14;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="3 weeks"){
            vdays = 21;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="4 weeks"){
            vdays = 28;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="1 month"){
            vdays = 30;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="2 months"){
            vdays = 61;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="3 months"){
            vdays = 91;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="4 months"){
            vdays = 122;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="5 months"){
            vdays = 152;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="6 months"){
            vdays = 183;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="7 months"){
            vdays = 213;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="8 months"){
            vdays = 243;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="9 months"){
            vdays = 274;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }              
        if (nvalue=="10 months"){
            vdays = 304;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="11 months"){
            vdays = 334;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
        if (nvalue=="1 year"){
            vdays = 365;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            document.getElementById("txtmaindue").value = currentDate.toLocaleDateString();
            document.getElementById('txtservde').focus();
        }
}
          
Date.prototype.addDays = function (days){
    this.setDate(this.getDate() + parseInt(days));
    return this;
};
          
function fservde(v11) {
    if (window.event.keyCode == 13) {
        document.getElementById('btntrans_save').focus();
    }                                
}          

function wclose(event){
    console.log("Nothing", 8 * 10);

    window.console.log(8 * 10); 
    console.log("Nice to be able to see what the interpreter, the computer, is working on.");

    window.open('', '_self', '');window.close();
    console.log();
    alert("console log testing");             
}        

///////// transaction_keypress //////////////////