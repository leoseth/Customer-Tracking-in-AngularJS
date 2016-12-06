
//////// this is for a customer module ////////////
function msgfunc() {
    document.getElementById('confirmdiv').style.display = "none";
    document.getElementById('carrefdropdownlist').innerText = "";
    var vsconfirm = window.confirm("This RFID code doesn't exist in our Database. Do you want to register this new RFID code?");    
    if (vsconfirm == true) {
        document.getElementById('skipload')["value"] = "";
        document.getElementById('hiddenfieldrfid')['value'] = "executed";

        document.getElementById('confirmdiv').style.display = "inherit";

        document.getElementById('customtype').focus();
        return;
    }
    else {
        document.getElementById('txtrfid')["value"] = "";
        document.getElementById('txtcustid').disabled = true;
        document.getElementById('txtcustid')['value'] = "";
        document.getElementById('customtype').disabled = true;
        document.getElementById('txtcompname').disabled = true;
        document.getElementById('txtlastname').disabled = true;
        document.getElementById('txtfirstname').disabled = true;
        document.getElementById('txtmiddlename').disabled = true;
        document.getElementById('txtaddress').disabled = true;
        document.getElementById('txttelno').disabled = true;
        document.getElementById('txtmobilenum').disabled = true;
        document.getElementById('txtemailadd').disabled = true;
        document.getElementById('txtbirthday').disabled = true;
        document.getElementById('txtbirthplace').disabled = true;
        document.getElementById('txtnationality').disabled = true;
        document.getElementById('sidtype').disabled = true;
        document.getElementById('txtidnumber').disabled = true;
   
        document.getElementById('txtrfid2').focus();
        return;
    }
}
//////// this is for a customer search ////////////
  
//////// this is for a customer saving /////////
//function mousecancel() {
//           document.getElementById('no_option').value = "selected";
//           vgranted = "";
//           var vclick3 = document.getElementById('Button2');
//           vclick3.click();            

//           return;                                                             
//}

//function savingrec() {
//    $(document).keydown(function (e) {        
//        if (e.keyCode == 13) {
//           if (vconfirmed != "no") {                
//               document.getElementById('confirmed')['value'] = "yes";
//               document.getElementById('no_option').value = "";
//               save();

//               return;
//           } else {
//               document.getElementById('no_option').value = "selected";
//               vgranted = "";
//               var vclick3 = document.getElementById('Button2');
//               vclick3.click();
//               return;
//           }
//        }
//        if (e.keyCode == 37) {
//               vconfirmed = 'yes';
//               document.getElementById('no_option').value = "";
//               document.getElementById('confirmed')['value'] = "yes";
//               document.getElementById('id_true').focus();                                        
//        }
//        if (e.keyCode == 39) {
//               vconfirmed = 'no';
//               document.getElementById('no_option').value = "selected";
//               document.getElementById('confirmed')['value'] = "";
//               document.getElementById('id_false').focus();                                        
//        }
//        return;
//    });
//}                    

//function save() {
//    if (document.getElementById('txtidnumber')['value'] != "") {
//        var vclick3 = document.getElementById('Button2');
//        vclick3.click();
//        return;
//    } else { alert('all fields are required'); }
//}
//////// this is for a customer saving /////////          

//////// this is for a car saving /////////////

function savingdivcar(option) {
    $(document).keyup(function (carelement) {
        if (carelement.keyCode == 13) {
            document.getElementById('btncarsave').focus();
            vcarsaving == "yes";
            $(document).keyup(function (a) {
                if (a.keyCode == 13) {
                    if (vcarsaving == "save" || vcarsaving == "") {
                        document.getElementById('v_carsave')['value'] = "yes";
                        var venginelick = document.getElementById('btnenginenum');
                        venginelick.click();
                    }
                    if (vcarsaving == "cancel") {
                        document.getElementById('v_carsave')['value'] = "no";
                        var venginelick = document.getElementById('btnenginenum');
                        venginelick.click();
                    }
                    execScript;
                }
                v_counter = v_counter + 1;
            });
        }

        if (carelement.keyCode == 37) {
            document.getElementById('btncarsave').focus();
            vcarsaving = "save";
            execScript;
        }
        if (carelement.keyCode == 39) {
            document.getElementById('btncarcancel').focus();
            vcarsaving = "cancel";

            $(document).keyup(function (carelement_cancel) {
                if (carelement_cancel.keyCode == 13) {

                    if (vcarsaving == "save") {
                        document.getElementById('v_carsave')['value'] = "yes";
                        var venginelick = document.getElementById('btnenginenum');
                        venginelick.click();
                    }

                    if (vcarsaving == "cancel") {                        
                        document.getElementById('txtplatenumber').focus();

                        document.getElementById('v_carsave')['value'] = "no";

                        var venginelick = document.getElementById('btnenginenum');
                        venginelick.click();

                        execScript;
                    }
                }
            });
            execScript;
        }
        return;
    });
};

function mousecarsave() {
    document.getElementById('v_carsave')['value'] = "yes";
    var venginelick = document.getElementById('btnenginenum');
    venginelick.click();
    return;
}

function mousecarcancel() {
    document.getElementById('v_carsave')['value'] = "no";
    var venginelick = document.getElementById('btnenginenum');
    venginelick.click();
    return;
}
//////// this is for a car saving /////////////

//////// ths is for a transaction saving //////
function mousetransave() {
    document.getElementById('skipload')["value"] = "skip_load";
    document.getElementById('transact_save')['value'] = "yes";
    var varbtnservede = document.getElementById('btnservede');
    varbtnservede.click();
    return;
}

function mousetrancancel() {
    document.getElementById('skipload')["value"] = "skip_load";
    document.getElementById('transact_save')['value'] = "no";
    var varbtnservede = document.getElementById('btnservede');
    varbtnservede.click();
    return;
}

function savingtrans() { 
    $(document).keyup(function (h) {        
        if (h.keyCode == 13) {
            if (vconfirmed != "no") {
                document.getElementById('skipload')["value"] = "skip_load";
                document.getElementById('transact_save')['value'] = "yes";
                var varbtnservede = document.getElementById('btnservede');
                varbtnservede.click();
                return;
            } else {
                document.getElementById('skipload')["value"] = "skip_load";
                document.getElementById('transact_save')['value'] = "no";
                var varbtnservede = document.getElementById('btnservede');
                varbtnservede.click();
                return;
            }
        }
        if (h.keyCode == 37) {
            vconfirmed = 'yes';
            document.getElementById('skipload')["value"] = "skip_load";
            document.getElementById('transact_save')['value'] = "yes";
            document.getElementById('btntrans_save').focus();
            return;
        }
        if (h.keyCode == 39) {       
            vconfirmed = 'no';
            document.getElementById('skipload')["value"] = "skip_load";
            document.getElementById('transact_save')['value'] = "no";           
            document.getElementById('btntrans_cancel').focus();
            return;
        }
    });
}

function extract() {
    if (window.event.keyCode == 13) {

        var x = document.getElementById("transactionlistbox").selectedIndex;
        var y = document.getElementById("transactionlistbox").options;

        transactstr = y[x].text;
        document.getElementById('transact_value')['value'] = transactstr.substring(14, 31);
    }

    vtranslistcnt = 0;
    document.getElementById('skipload')["value"] = "";

    vedit = document.getElementById('Hiddencar_edit')["value"];

    var vextract = window.confirm("are you sure you want to '" + vedit + "' this Transaction ");
    if (document.getElementById('Hiddenfield_car')["value"] == "EXTRACT") {
        document.getElementById("dataextract")["value"] = vextract;
        return true;
    }
    if (vextract == true) {
        document.getElementById('deloption')['value'] = "DELETE";
    }
    if (vextract == false) {
        document.getElementById('deloption')['value'] = "";
    }
}

function mainwar() {
    document.getElementById('cmbwarstat').disabled        = true;
    document.getElementById('txtwarexpire').disabled      = true;
    document.getElementById('txtwarexpire2').disabled     = true;

    document.getElementById('mainscheddropdown').disabled = false;
    document.getElementById('txtmaindue').disabled        = false;
}

function war() {  
    document.getElementById('cmbwarstat').disabled        = false;
    document.getElementById('txtwarexpire').disabled      = false;
    document.getElementById('txtwarexpire2').disabled     = false;

    document.getElementById('mainscheddropdown').disabled = true;
    document.getElementById('txtmaindue')['value']        = "";
    document.getElementById('txtmaindue').disabled        = true;
    document.getElementById('txtsmsmess').disabled        = true;
}


//////// ths is for a transaction saving //////
