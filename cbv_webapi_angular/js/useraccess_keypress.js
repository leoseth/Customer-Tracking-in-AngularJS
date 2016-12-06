
/////// this is for user access keypress /////////

$('input[type="text"]').keydown(function (event) {
    if (window.event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) {                              
        document.getElementById('Label2').style.display = "inherit";
        document.getElementById('Label3').style.display = "inherit";
        document.getElementById('txtuserid').style.display = "inherit";
        document.getElementById('Label4').style.display = "inherit";
        document.getElementById('txtusername').style.display = "inherit";
        document.getElementById('Label5').style.display = "inherit";
        document.getElementById('cmbaccess').style.display = "inherit";

        document.getElementById('lbltopuserid').style.display = "none";
        document.getElementById('lbltopusername').style.display = "none"
        document.getElementById('lbledit').style.display = "none";

        if (document.getElementById('Listedit').style.display = "inherit") {
            document.getElementById('Listedit').style.display = "none";
        }
        else {

        }
    }
});

function GetKeyCode(evt) {
    var keyCode;
    if (evt.keyCode >= 49 && evt.keyCode < 58 || evt.keyCode == 45) {
        keyCode = evt.keyCode;
    }
    else if (typeof (evt.charCode) != "undefined") {
        if (evt.keyCode != 13) {
            keyCode = evt.charCode;
            alert("Invalid data type, please re-type");
        }
    }
}

$(document).keydown(function (event) {
    if (window.event.keyCode == 27) {                               
        document.getElementById('Listedit').style.display = "none";
        document.getElementById('lbledit').style.display = "none";
        document.getElementById('lbltopuserid').style.display = "none";
        document.getElementById('lbltopusername').style.display = "none";                                
        document.getElementById('Label2').style.display = "inherit";
        document.getElementById('Label2').style.display = "inherit";
        document.getElementById('Label3').style.display = "inherit";
        document.getElementById('txtuserid').style.display = "inherit";
        document.getElementById('Label4').style.display = "inherit";
        document.getElementById('txtusername').style.display = "inherit";
        document.getElementById('Label5').style.display = "inherit";
        document.getElementById('cmbaccess').style.display = "inherit";                               
    }
});
                                             
function getkeypressed(evt) {
    var keyCode;
    if (evt.keyCode >= 65 && evt.keyCode < 123 || evt.keyCode == 46) {
        keyCode = evt.keyCode;
    }
    else if (typeof (evt.charCode) != "undefined") {
        if (evt.keyCode != 13) {
            keyCode = evt.charCode;
            alert("Invalid data type, please re-type");
        }
    }
}
                 
function txtOnKeyPress(txt1) {
    if (txt1 != 'undefined') {
        if (window.event.keyCode == "38") {
            document.getElementById('cmbaccess').focus();
        }

        $('input[type="text"]').keydown(function (event) {
             if (window.event.keyCode == 13) {
                 document.getElementById('Button2').click();
                 return true;
             }
        });
    }
}

function txtOnKeyPress2(txt3) {
    if (txt3 != 'undefined') {
        if (window.event.keyCode == "38") {
            txt4 = document.getElementById('cmbaccess').focus();
        }
        if (window.event.keyCode == "40") {
            txt4 = document.getElementById('txtposition').focus();
        }
    }
}

function txtOnKeyPress3(txt4) {
    if (txt4 != 'undefined') {
        if (window.event.keyCode == "38") {
            txt5 = document.getElementById('txtpassword').focus();
        }
        if (window.event.keyCode == "40") {
            document.getElementById('txtposition').focus();
        }
        if (window.event.keyCode == "13") {
            document.getElementById('txtposition').focus();
        }
    }
}

function txtOnKeyPress4(txt6) {
    if (txt6 != 'undefined') {
        if (window.event.keyCode == "38") {
            txt7 = document.getElementById('txtuserid').focus();
        }
        if (window.event.keyCode == "40") {
            txt7 = document.getElementById('txtfullname').focus();
        }

        if (window.event.keyCode == "13") {
            document.getElementById('txtfullname').focus();
        }
    }
}

function txtkeyfull(txtfull) {
    if (txtfull != 'undefined') {
        if (window.event.keyCode == "38") {
            txt7 = document.getElementById('txtusername').focus();
        }
        if (window.event.keyCode == "40") {
            txt7 = document.getElementById('txtpassword').focus();
        }

        if (window.event.keyCode == "13") {
            document.getElementById('txtpassword').focus();
        }
    }
}

function txtonkeypresspass(txtpass) {
    if (window.event.keyCode == "38") {
        document.getElementById('txtfullname').focus();
    }
    if (window.event.keyCode == "40") {
        document.getElementById('cmbaccess').focus();
    }
    if (window.event.keyCode == "13") {
        document.getElementById('cmbaccess').focus();
    }
}

function txtOnKeyPress5(txt8) {
    if (window.event.keyCode == "40") {
        txt9 = document.getElementById('txtusername').focus();
    }
    if (window.event.keyCode == "13") {
        document.getElementById('txtusername').focus();
    }
}

function Submit() {
    var iview = document.getElementById('varview')['value'];
    if (iview == "") {
        var edit = document.getElementById('edit')['value'];
        var confirmation = window.confirm("Are you sure you want to " + edit + " this record?");
        document.getElementById("HiddenField1")["value"] = confirmation;
        return true;
    } else { return true;}
}

function rightsaccess() {
    document.getElementById('txtposition').focus();
}

/////// this is for user access keypress /////////