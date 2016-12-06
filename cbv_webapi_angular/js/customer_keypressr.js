   
//// this is for customer keypress  /////

// there is no route happened in this customer_keypress.js file //
var app = angular.module('myapp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {       
        controller        : 'customercontroller',
        templatecontroller: '/index.html'
    })
    .otherwise({
        redirectTo: '/'      
    });    
});
// there is no route happened in this customer_keypress.js file //
//debugger;  this is serve as breakpoint
// $rootScope is a parent object of all $scope angular objects created in a web page //
// $scope is created with ng-controller while $rootscope is created with ng-app //
app.controller('customercontroller', function ($scope, $http, $rootScope) {

    // this is $rootScope parameter to communicate with the carcontroller //
    $rootScope.$on('communication', function (event, data) {      
        $http({ method: 'GET', url: "/customer/retrieve" }).success(function (response) {
              dataresponse = [];
              dataresponse = response;
              currentstate = "connected";
              datapopulate();
        });        
    });
    // this is $rootScope parameter to communicate with the carcontroller //    

    $scope.showcustomersearch     = false;
    $scope.showcustomertypeseacrh = false;
    //$scope.showcustomerlist     = false;
    //$scope.showlistboxview      = false;
    $scope.showbirthday           = true;

    // this is to re-load the css styling and change the style of the these specific controls for customer//
    document.getElementById("Listedit").style.display      = "inherit";
    document.getElementById("ListBoxview").style.display   = "inherit";

    document.getElementById("lbledit").style.display       = "inherit";
    document.getElementById("lbleditcustid").style.display = "inherit";
    document.getElementById("lblname").style.display       = "inherit";
    document.getElementById("lblfirst").style.display      = "inherit";
    document.getElementById("lblcomp").style.display       = "inherit";
    document.getElementById("lbltelname").style.display    = "inherit";
    document.getElementById("lblsearch").style.display     = "inherit";
    document.getElementById("customertype").style.display  = "inherit";
    document.getElementById("txtsearch").style.display     = "inherit";

    document.getElementById("confirmdiv").style.display    = "inherit";    
    // this is to re-load the css styling and change the style of the these specific controls for customer//

    $http({ method: 'GET', url: "/customer/retrieve", cache: true }).success(function (response) {
        $scope.val   = response.data;
        dataresponse = response;
        alert("connected");                    

        disabledcustomertext();

        angular.element('#txtrfid2').focus();
    });

    $scope.addcustomer = function (addcustomer) {            

        document.getElementById('nosearch')["value"] = "yes";

        alert('add cutomer');
        emptycustomertext();
        disabledcustomertext();
               
        $("#txtrfid2").focus();
        return;
    }                                                                                         

    $scope.editcustomer = function (editcustomer) {
        $scope.showlistboxview = false;
        $scope.showlbltelname  = false;
        currentstate = "edit";
        accesstype   = "editcust";

        edit_delete_styling();

            // this to remove the empty space on the ng-repeat listedit box after deleting record//
            if (emptyseacrh == "refresh_list") {
                 emptyseacrh = "empty";
            } else { emptyseacrh = "not empty"; }
            // this to remove the empty space on the ng-repeat listedit box after deleting record//

        retrieve();
        compstr = "";       
    }

    $scope.deletecustomer = function (deletecustomer) {
        $scope.showlistboxview = false;
        $scope.showlbltelname  = false;
        currentstate = "delete";
        accesstype   = "deletecust";

        edit_delete_styling();

            // this to remove the empty space on the ng-repeat listedit box after deleting record//
            if (emptyseacrh == "refresh_list") {
                emptyseacrh = "empty";
            } else { emptyseacrh = "not empty"; }
            // this to remove the empty space on the ng-repeat listedit box after deleting record//

        retrieve();
        compstr = "";
    }

    $scope.viewcustomer = function (viewcustomer) {
        $scope.showcustomerlist = false;
        $scope.showlbltelname   = true;
        currentstate = "view";
        accesstype   = "viewcust";

        viewstyling();        

        // this to remove the empty space on the ng-repeat listedit box after deleting record//
        if (emptyseacrh == "refresh_list") {
            emptyseacrh = "empty";
        } else { emptyseacrh = "not empty"; }
        // this to remove the empty space on the ng-repeat listedit box after deleting record//

        retrieve();
        compstr = "";
    }  

    // right padding s with c to a total of n chars for customer
    function padding_right(s, c, n) {
        // this is to give the value with the response data field if the response data is empty//
        if (s == "") { s = '\u00A0', 2; }
        // this is to give the value with the response data field if the response data is empty//

        if (!s || !c || s.length >= n) {            
            return s;
        }
        var max = (n - s.length) / c.length;        
        for (var i = 0; i < max; i++) {
             s += c;
        }
        return s;
    }
    // right padding s with c to a total of n chars for customer

    function retrieve() {       
        // by removing "cache : true" in the $http service GET method it can re-access the server side{ //
        // customer is the prefix of the customerController
        $http({ method: 'GET', url: "/customer/retrieve" }).success(function (response) {
        // by removing "cache : true" in the $http service GET method it can re-access the server side{ //

            /// this is to empty the ListBoxview and the listedit select control ///
            if (emptyseacrh == "empty" && accesstype == "viewcust") {               
                $('#ListBoxview').find('option').remove();
            }
            if (emptyseacrh == "empty") { $('#Listedit').find('option').remove(); }
            /// this is to empty the ListBoxview and the listedit select control ///

            var responsedata = [];
            var editcust     = [];  /// this is an array for the customer

            if (accesstype == "viewcust") {                    
                var count  = 21;
                var count2 = 21;
                var count3 = 21;
                var count4 = 31;
                var count5 = 18;
                var count6 = 17;        
            } else {
                var count = 20;                
                var compcount = 20;
            }            

            for (var i = 0; i < response.length ; i++) {
                
                if (compstr == 'Company') {
                    if (accesstype == "viewcust") {                                                                       
                        if (response[i].custtype == "Company"){
                            editcust.push(padding_right(response[i].custnum, '\u00A0', 20) + padding_right(response[i].lastname, '\u00A0', count) + padding_right(response[i].firstname, '\u00A0', count2) + padding_right(response[i].compname, '\u00A0', count3) + padding_right(response[i].phone_num, '\u00A0', count4) + padding_right(response[i].mobile_num, '\u00A0', count5) + padding_right(" ", '\u00A0', count6));
                        }
                    } else {
                        if (response[i].custtype == "Company") {                           
                            var a = response[i].compname;
                            editcust.push(padding_right(response[i].custnum, '\u00A0', 20) + padding_right(response[i].lastname, '\u00A0', count) + padding_right(response[i].firstname, '\u00A0', compcount) + a);
                        }
                    }                    
                }

                if (compstr == 'Individual') {
                    if (accesstype == "viewcust") {
                        if (response[i].custtype == "Individual") {
                            editcust.push(padding_right(response[i].custnum, '\u00A0', 20) + padding_right(response[i].lastname, '\u00A0', count) + padding_right(response[i].firstname, '\u00A0', count2) + padding_right(response[i].compname, '\u00A0', count3) + padding_right(response[i].phone_num, '\u00A0', count4) + padding_right(response[i].mobile_num, '\u00A0', count5) + padding_right(" ", '\u00A0', count6));
                        }
                    } else {
                        if (response[i].custtype == "Individual") {                           
                            var a = response[i].compname;
                            editcust.push(padding_right(response[i].custnum, '\u00A0', 20) + padding_right(response[i].lastname, '\u00A0', count) + padding_right(response[i].firstname, '\u00A0', compcount) + a);
                        }
                    }
                }

                if (compstr == '') {

                    if (accesstype == "viewcust") {                       
                         editcust.push(padding_right(response[i].custnum, '\u00A0', 20) + padding_right(response[i].lastname, '\u00A0', count) + padding_right(response[i].firstname, '\u00A0', count2) + padding_right(response[i].compname, '\u00A0', count3) + padding_right(response[i].phone_num, '\u00A0', count4) + padding_right(response[i].mobile_num, '\u00A0', count5) + padding_right(" ", '\u00A0', count6));                        
                    } else {                        
                        var a = response[i].compname;
                        editcust.push(padding_right(response[i].custnum, '\u00A0', 20) + padding_right(response[i].lastname, '\u00A0', count) + padding_right(response[i].firstname, '\u00A0', compcount) + a);
                    }                    
                }
            }           
                $scope.val                    = editcust;
                dataresponse                  = response;
              
                if (accesstype == "viewcust") {
                    $scope.showlistboxview = true;
                } else {
                    $scope.showcustomerlist = true;
                }                
                $scope.showeditborder         = true;
                $scope.showcustomer           = true;
                $scope.showlastname           = true;
                $scope.showfirstname          = true;
                $scope.showcompanyname        = true;
                $scope.showsearch             = true;
                $scope.showcustomertypeseacrh = true;                                   
                $scope.showcustomersearch     = true;                
                                
                $scope.customersearch         = [];
                $scope.showrequired           = false;

                document.getElementById("customertype")['value'] = "";

                if (accesstype == "viewcust") {
                    angular.element("#ListBoxview").focus();
                } else {
                    angular.element("#Listedit").focus();
                }

                /// this is to focus the seacrh box ///
                document.getElementById('customertype')['value'] = compstr;
                angular.element('#txtsearch').focus();             
                /// this is to focus the seacrh box ///

                /// this is to empty the ListBoxview and the listedit select control ///
                if (emptyseacrh == "empty" && accesstype == "viewcust") {
                    $('#ListBoxview').find('option').remove();
                }
                if (emptyseacrh == "empty") { $('#Listedit').find('option').remove(); }
                /// this is to empty the ListBoxview and the listedit select control ///                
        });                                
        return;
    }    
     
    $scope.editcustkeyup = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#Listedit").focus();
        }
        if (keyCode == 40) {
            angular.element("#Listedit").focus();
        }
    }

    $scope.deletecustkeyup = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#Listedit").focus();
        }
        if (keyCode == 40) {
            angular.element("#Listedit").focus();
        }
    }

    $scope.viewcustkeyup = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#ListBoxview").focus();
        }
        if (keyCode == 40) {
            angular.element("#ListBoxview").focus();
        }
    }

    /// This is to convert from 'mm-dd-yyyy(10-28-2016)' format to 'yyyy-mm-dd(2016-10-28)' format for customer ///
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day   = '' + d.getDate(),
            year  =      d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2)   day   = '0' + day;

        return [year, month, day].join('-');
    }
    /// This is to convert from 'mm-dd-yyyy(10-28-2016)' format to 'yyyy-mm-dd(2016-10-28)' format /// 

    $scope.listeditkeycode = function (keyCode) {
        if (keyCode == 13) {
            datapopulate();            
        }       
    }
    $scope.listeditkeycode2 = function () {
        if (window.event.toElement.nodeType == 1) {
            datapopulate();
        }
    }

    $scope.listboxviewkeycode = function (keyCode) {
        if (keyCode == 13) {
            datapopulate();
        }
    }

    $scope.listboxviewkeycode2 = function () {
        if (window.event.toElement.nodeType == 1) {
            datapopulate();
        }
    }

    function datapopulate() {       
        if (currentstate == "edit" || currentstate == "view" || currentstate == "connected") {
            if (currentstate == "edit") { var datafiltered = document.getElementById("Listedit")['value'].slice(0, 17);}
            if (currentstate == "view") { var datafiltered = document.getElementById("ListBoxview")['value'].slice(0, 17);}
            if (currentstate == "connected") { var datafiltered = varcustnum }
            for (var i = 0; i < dataresponse.length ; i++) {
                for (var i = 0; i < dataresponse.length ; i++) {
                    if (dataresponse[i].custnum == datafiltered) {
                             $scope.rfid            = dataresponse[i]["rfid_code"];
                             $scope.telephonenumber = dataresponse[i]["phone_num"];
                             $scope.address         = dataresponse[i]["address"];                             
                             document.getElementById('txtbirthday')['value']  = formatDate(dataresponse[i]["birthday"].slice(0, 9));
                             document.getElementById('txtbirthday2')['value'] = dataresponse[i]["birthday"].slice(0, 9);
                             $scope.birthplace      = dataresponse[i]["birthplace"];
                             $scope.companyname     = dataresponse[i]["compname"];
                             $scope.customerid      = dataresponse[i]["custnum"];
                             $scope.customerid2     = dataresponse[i]["custnum"];
                             $scope.customertype    = dataresponse[i]["custtype"];                      
                             document.getElementById('txtemailadd')['value'] = dataresponse[i]["email_add"];
                             $scope.firstname       = dataresponse[i]["firstname"];
                             $scope.idnumber        = dataresponse[i]["idnum"];
                             $scope.idtype          = dataresponse[i]["idtype"];
                             $scope.lastname        = dataresponse[i]["lastname"];
                             $scope.middlename      = dataresponse[i]["middlename"];
                             document.getElementById('txtmobilenum')['value'] = dataresponse[i]["mobile_num"];
                             $scope.nationality     = dataresponse[i]["nationality"];
                             edit2 = "EDIT";                               
                        // this is a variable to be use in the car information //
                        varrfidcode   = $scope.rfid;
                        varcustnum    = $scope.customerid;
                        // this is a variable to be use in the car information //

                        //this is to filled-up the remaining customer information //
                        if (document.getElementById("txtmobilenum")['value'] == "" || document.getElementById("txtlastname")['value'] == "") {                            
                            document.getElementById('txtrfid')['value'] = dataresponse[i]["rfid_code"];                                                                                  
                        }
                        // this is to filled-up the remaining customer information //
                        editdisabled();
                    }                             }
            }
        } else {
            if (currentstate = "delete") {     
                var confirmation = window.confirm("Are you sure you want to DELETE this customer record?");
                    if (confirmation == true) {
                        deleterecord();
                        emptyseacrh = "refresh_list";
                    }                                  
            }
        }            
    }
    
    // this to clear the listboxview and listedit from the customer module //
    $(document).keyup(function (escapecustomer) {
        if (escapecustomer.keyCode == 27) {
            $scope.$apply(function () {
                $scope.showlistboxview   = false;  $scope.showlbltelname         = false;
                $scope.showcustomerlist  = false;  $scope.showsearch             = false;
                $scope.showeditborder    = false;  $scope.showcustomertypeseacrh = false;
                $scope.showcustomer      = false;  $scope.showcustomersearch     = false;
                $scope.showlastname      = false;  $scope.customertypeseacrh     = [];
                $scope.showfirstname     = false;  $scope.showrequired           = true;
                $scope.showcompanyname   = false;  
            });            
        }
    });   
    // this to clear the listboxview and listedit from the customer module //

    function keyUP() {
        var connect = document.getElementById('sdt');
        connect.click();
    }

    $scope.telnokeypress = function (evt) {
        if (evt.keyCode >= 60 && evt.keyCode != 13) {
            alert('invalid, because this is a numeric data type please re-type');
        }
        else {
            if (document.getElementById('txttelno').value.length >= 10 && evt.keyCode !=13) {
                if (document.getElementById('txttelno')['value'].substring(0, 1) != "(") {
                   
                    alert('you have exceeded the 10 digits limit, please re-type');

                    vtelephonestr = document.getElementById('txttelno')['value'];
                    document.getElementById('txttelno')['value'] = "";
                    document.getElementById('txttelno')['value'] = vtelephonestr.substring(0, 10);

                    document.getElementById('txttelno').focus();
                }
            }
            else {
                keyCode = evt.keyCode;
            }
        }
    }

    $scope.telnokeyup = function (keyCode) {
        if (keyCode == "38") {
            txt13 = document.getElementById('txtaddress').focus();
        }
        if (keyCode == "40" || keyCode == "13") {

            vtelstr3 = document.getElementById('txttelno')['value'];

            if (document.getElementById('txttelno').value.length < 7) {
                alert('invalid input, your lower than 7 digits please double check');
                document.getElementById('txttelno').focus()
            }                
            else {
                if (document.getElementById('txttelno').value.length == 7) {
                    vtelstrcom2 = vtelstr3.slice(-7, -4);
                    vtelstrcom3 = vtelstr3.substring(document.getElementById('txttelno').value.length - 4);
                    document.getElementById('txttelno')['value'] = "(" + "   " + ")" + "-" + vtelstrcom2 + "-" + vtelstrcom3;
                    document.getElementById('txtmobilenum').focus();
                }

                if (document.getElementById('txttelno').value.length == 8) {
                    vtelstrcom1 = vtelstr3.slice(-10, -7);
                    vtelstrcom2 = vtelstr3.slice(-7, -4);
                    vtelstrcom3 = vtelstr3.slice(-4);

                    document.getElementById('txttelno')['value'] = "(" + "  " + vtelstrcom1 + ")" + "-" + vtelstrcom2 + "-" + vtelstrcom3;
                    document.getElementById('txtmobilenum').focus();
                }

                if (document.getElementById('txttelno').value.length == 9) {
                    vtelstrcom1 = vtelstr3.slice(-10, -7);
                    vtelstrcom2 = vtelstr3.slice(-7, -4);
                    vtelstrcom3 = vtelstr3.slice(-4);

                    document.getElementById('txttelno')['value'] = "(" + " " + vtelstrcom1 + ")" + "-" + vtelstrcom2 + "-" + vtelstrcom3;
                    document.getElementById('txtmobilenum').focus();
                }

                if (document.getElementById('txttelno').value.length == 10) {

                    vtelstrcom1 = vtelstr3.slice(-10, -7);
                    vtelstrcom2 = vtelstr3.slice(-7, -4);
                    vtelstrcom3 = vtelstr3.slice(-4);

                    document.getElementById('txttelno')['value'] = "(" + vtelstrcom1 + ")" + "-" + vtelstrcom2 + "-" + vtelstrcom3;
                    document.getElementById('txtmobilenum').focus();
                }

                if (document.getElementById('txttelno').value.length == 11) {

                    vtelstrcom1 = vtelstr3.slice(-11, -8);
                    vtelstrcom2 = vtelstr3.slice(-8, -5);
                    vtelstrcom3 = vtelstr3.slice(-5, -1);

                    document.getElementById('txttelno')['value'] = "(" + vtelstrcom1 + ")" + "-" + vtelstrcom2 + "-" + vtelstrcom3;
                    document.getElementById('txtmobilenum').focus();
                }

                if (document.getElementById('txttelno').value.length >= 14) {
                    document.getElementById('txtmobilenum').focus();
                }
                txtmobilenumfocus();
            }
        }
    }

    function txtmobilenumfocus() {
        setCursorPositionToEnd('txtmobilenum');
    }

    $scope.lastnamekeypressed = function (evt) {
        if (evt.keyCode <= 59 && evt.keyCode != 13) {
            alert('invalid input');
        }
    }

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

    $scope.txtOnKeyPress2 = function (txt3) {
        if (txt3.keyCode <= 59 && txt3.keyCode != 13) {
            alert('invalid input');
        }
    }

    $scope.compkeyup = function (keyCode) {
        if (keyCode == 13) {
            angular.element('#txtlastname').focus();
        }
        if (keyCode == 38) {
            angular.element('#customtype').focus();
        }
        if (keyCode == 40) {
            angular.element('#txtlastname').focus();
        }
    }

    $scope.covertcompname = function (compname) {
        var vccompname = document.getElementById('txtcompname').value.toUpperCase();
        document.getElementById('txtcompname')["value"] = vccompname;
    }

    $scope.convertlast = function (lname) {
        var cnvlast = document.getElementById('txtlastname').value.toUpperCase();
        document.getElementById('txtlastname')["value"] = cnvlast;
    }
    
    $scope.convertidnumber = function (cidnumber) {
        var cnvidnumber = document.getElementById('txtidnumber').value.toUpperCase();
        document.getElementById('txtidnumber')["value"] = cnvidnumber;
    }

    $scope.lastkeyup = function (keyCode) {
        if (keyCode == 13) {
            angular.element('#txtfirstname').focus();
        }
        if (keyCode == 38) {
            angular.element('#txtcompname').focus();
        }
        if (keyCode == 40) {
            angular.element('#txtfirstname').focus();
        }
    }

    $scope.convertfirst = function (fname) {
        var cnvfirst = document.getElementById('txtfirstname').value.toUpperCase();
        document.getElementById('txtfirstname')["value"] = cnvfirst;
    }

    $scope.firstnamekeypress = function (evt) {
        if (evt.keyCode <= 59 && evt.keyCode != 13) {
            alert('invalid input');
        }
    }

    $scope.firstnamekeyup = function (keyCode) {
        if (keyCode == 13) {
            angular.element('#txtmiddlename').focus();
        }
        if (keyCode == 38) {
            angular.element('#txtlastname').focus();
        }
        if (keyCode == 40) {
            angular.element('#txtmiddlename').focus();
        }
    }

    $scope.convertaddress = function (addr) {
        var cnvaddr = document.getElementById('txtaddress').value.toUpperCase();
        document.getElementById('txtaddress')["value"] = cnvaddr;
    }    

    $scope.addresskeyup = function (keyCode) {
        if (keyCode == 38) {
            angular.element('#txtmiddlename').focus();
            txttelnofocus();
        }
        if (keyCode == 40) {
            angular.element('#txttelno').focus();
            $scope.lbltel_show = true;
            txttelnofocus();
        }
    }

    function txttelnofocus() {
        setCursorPositionToEnd('txttelno');
    }

    $scope.convertmiddle = function (mname) {
        var cnvmiddle = document.getElementById('txtmiddlename').value.toUpperCase();
        document.getElementById('txtmiddlename')["value"] = cnvmiddle;
    }

    $scope.middlenamekeypress = function (evt) {
        if (evt.keyCode <= 59 && evt.keyCode != 13) {
            alert('invalid input');
        }
    }

    $scope.middlenamekeyup = function (keyCode) {
        if (keyCode == 13) {
            angular.element('#txtaddress').focus();
        }
        if (keyCode == 38) {
            angular.element('#txtfirstname').focus();
        }
        if (keyCode == 40) {
            angular.element('#txtaddress').focus();
        }
    }

    $scope.mobilekeypress = function (mobile) {
        if (mobile.keyCode >= 60 && mobile.keyCode != 13) {
            alert('Invalid because this is a numeric data');
        }
    }

    $scope.mobilekeyup = function (keyCode) {
        if (keyCode == 38) {
            angular.element('#txttelno').focus();
        }
        if (keyCode == 40) {
            angular.element('#txtemailadd').focus();
            txtemailaddfocus();
        }
        if (keyCode == 13) {
            angular.element('#txtemailadd').focus();
            txtemailaddfocus();
        }
    }

    function txtemailaddfocus() {
        setCursorPositionToEnd('txtemailadd');
    }

    $scope.emailaddkeyup = function (keyCode) {
        if (keyCode == 38) {
            document.getElementById('txtmobilenum').focus();
        }
        if (keyCode == 40) {
            //if (document.getElementById('edit2')['value'] == "EDIT") {              
            if (edit2 == "EDIT") {
                $scope.showbirthday = false;
                document.getElementById('txtbirthday2').focus();
                txtbirthdayfocus2();
            }
            //if (document.getElementById('edit2')['value'] == "") {
            if (edit2 == "") {
                $scope.showbirthday2 = false;
                document.getElementById('txtbirthday').focus();
                txtbirthdayfocus();
            }
        }
        if (keyCode == 13) {
            //if (document.getElementById('edit2')['value'] == "EDIT") {
            if (edit2 == "EDIT") {
                document.getElementById('txtbirthday2').focus();
                //txtbirthdayfocus2();
            }
            //if (document.getElementById('edit2')['value'] == "") {
            if (edit2 == "") {
                document.getElementById('txtbirthday').focus();
                //txtbirthdayfocus();                
            }
        }
    }

    //function txtbirthdayfocus() {
    //    setCursorPositionToEnd('txtbirthday');
    //}

    //function txtbirthday2focus() {
    //    setCursorPositionToEnd('txtbirthday2');
    //}

    $scope.birthdaykeyup = function (keyCode) {
        if (keyCode == 38) {
            document.getElementById('txtemailadd').focus();
        }
        if (keyCode == 40) {
            document.getElementById('txtbirthplace').focus();
            txtbirthplacefocus();
        }
        if (keyCode == 13) {
            document.getElementById('txtbirthplace').focus();
            txtbirthplacefocus();
        }
    }

    function txtbirthplacefocus() {
        setCursorPositionToEnd('txtbirthplace');
    }

    $scope.birtplacekeyup = function (keyCode) {
        if (keyCode == 38) {
            //if (document.getElementById('edit2')['value'] == "EDIT") {
            if (edit2 == "EDIT") {
                document.getElementById('txtbirthday2').focus();
            }
            //if (document.getElementById('edit2')['value'] == "") {
            if (edit2 == "") {
                document.getElementById('txtbirthday').focus();
            }
        }
        if (keyCode == 40) {
            document.getElementById('txtnationality').focus();
            txtnationalityfocus();
        }
        if (keyCode == 13) {
            document.getElementById('txtnationality').focus();
            txtnationalityfocus();
        }
    }

    function txtnationalityfocus() {
        setCursorPositionToEnd('txtnationality');
    }

    $scope.convertbirthplace = function (cbirthplace) {
        var cnvbirthplace = document.getElementById('txtbirthplace').value.toUpperCase();
        document.getElementById('txtbirthplace')["value"] = cnvbirthplace;
    }

    $scope.convertnational = function (cnational) {
        var cntnational = document.getElementById('txtnationality').value.toUpperCase();
        document.getElementById('txtnationality')["value"] = cntnational;
    }

    $scope.nationalkeyup = function (keyCode) {
        if (keyCode == 38) {
            document.getElementById('txtbirthplace').focus();
        }
        if (keyCode == 40) {
            document.getElementById('sidtype').focus();
            //sidtypefocus();
        }
        if (keyCode == 13) {
            document.getElementById('sidtype').focus();
            //sidtypefocus();
        }
    }

    function sidtypefocus() {
        setCursorPositionToEnd('sidtype');
    }

    $scope.idtypekeyup = function (keyCode) {
        document.getElementById('skipload')["value"] = "skip_load";
        document.getElementById('hiddenclick')["value"] = "txtidnumber";
        if (keyCode == 38) {
            document.getElementById('txtnationality').focus();
        }
        if (keyCode == 40) {
            document.getElementById('txtidnumber').focus();
        }
        if (keyCode == 13) {
            document.getElementById('txtidnumber').focus();
            Funcidnumber();
        }
    }

    function Funcidnumber() {
        setCursorPositionToEnd('txtidnumber');
    }

    function notify() {
        var snd = new Audio("alert/notify.wav");
        snd.play();

        document.getElementById('hiddenfieldrfid')["value"] = "";

        var carref = document.getElementById("carrefdropdownlist").value;
        document.getElementById("carrefhidden").value = carref;

        var vclick = document.getElementById("btncaref2");
        vclick.click();
    }

    function sendSMStone() {
        var smstone = new Audio("alert/notify.wav");
        smstone.play();
    }

    $scope.idnumberkeyup = function (keyCode) {
       
        $scope.confirmdiv_show = true;        

        if (keyCode == 13) {           
                document.getElementById('confirmed')['value'] = "yes";
                document.getElementById('no_option').value = "";
                angular.element('#id_true').focus();          
        }

        if (keyCode == 38) {
            document.getElementById('sidtype').focus();
        }

        function confirmation() {
            document.getElementById('id_true').focus();
            return false;
        }
    }   

    $scope.savingrec = function(keyCode) {
            if (keyCode == 13) {
                if (vconfirmed != "no") {
                    document.getElementById('confirmed')['value'] = "yes";
                    document.getElementById('no_option').value = "";
                    return;
                } else {
                    document.getElementById('no_option').value = "selected";
                    vgranted = "";
                    var vclick3 = document.getElementById('Button2');
                    vclick3.click();
                    return;
                }
            }
            if (keyCode == 37) {
                vconfirmed = 'yes';
                document.getElementById('no_option').value = "";
                document.getElementById('confirmed')['value'] = "yes";
                document.getElementById('id_true').focus();
            }            
            if (keyCode == 39) {
                vconfirmed = 'no';
                document.getElementById('no_option').value = "selected";
                document.getElementById('confirmed')['value'] = "";
                document.getElementById('id_false').focus();
            }
            return;
    }

    $scope.mousesave = function (mousesave) {       
        save();       
        return;
    }

    function save() {
        if (document.getElementById('txtidnumber')['value'] != "") {           
            var cust = {
                'rfid_code' : document.getElementById('txtrfid')["value"],       'phone_num'  : document.getElementById('txttelno')["value"],
                'address'   : document.getElementById('txtaddress')["value"],    'birthday'   : document.getElementById('txtbirthday')["value"],
                'birthplace': document.getElementById('txtbirthplace')["value"], 'compname'   : document.getElementById('txtcompname')["value"],
                'custnum'   : document.getElementById('txtcustid')["value"],     'custtype'   : document.getElementById('customtype')["value"],
                'email_add' : document.getElementById('txtemailadd')["value"],   'firstname'  : document.getElementById('txtfirstname')["value"],
                'idnum'     : document.getElementById('txtidnumber')["value"],   'idtype'     : document.getElementById('sidtype')["value"],
                'lastname'  : document.getElementById('txtlastname')["value"],   'middlename' : document.getElementById('txtmiddlename')["value"],
                'mobile_num': document.getElementById('txtmobilenum')["value"],  'nationality': document.getElementById('txtnationality')["value"]
            };
            $.ajax({
                url: 'customer/save',
                type: 'POST',
                data: JSON.stringify(cust),
                dataType: 'json',
                contentType: "application/json",
                success: function (response) {
                    alert('records save, succeed');
                    emptycustomertext();
                    // to activate the ng-disabled it should write first in the $scope.$apply //
                    disabledcustomertext();
                    // to activate the ng-disabled it should write first in the $scope.$apply //

                    // this is how to refresh the select control //                    
                    $scope.customertype = [];
                    $scope.idtype       = [];
                    // this is how to refresh the select control //                   

                    $scope.$apply(function () {
                           $scope.confirmdiv_show = false;
                    });                                      
                    
                    angular.element("#txtrfid2").focus();

                }, error: function (response) {

                    $scope.$apply(function () {
                          $scope.confirmdiv_show = false;
                    });

                    alert('Failed to save records');
                }
            });
            return;
        }
        else { alert('all fields are required'); }
    }

    function deleterecord() {    
        var cust = { 'custnum': document.getElementById("Listedit")['value'].slice(0, 17) };              

        $http({
            url: '/customer/delete',
            method: "DELETE",
            data: JSON.stringify(cust),
            dataType: 'json',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (response) {
            alert('customer successfully deleted');

                $scope.showcustomerlist = false;
                $scope.showeditborder = false;
                $scope.showcustomer = false;
                $scope.showlastname = false;
                $scope.showfirstname = false;
                $scope.showcompanyname = false;
                $scope.showsearch = false;
                $scope.showcustomertypeseacrh = false;
                $scope.showcustomersearch = false;
                $scope.customertypeseacrh = [];

                $scope.showrequired = true;

                editdisabled();
               
        }, function (failed) {
            alert('failed');
        });
        
        return;
    }    

    $scope.mousecancel = function (mousecancel) {
        alert('this is for a mousecancel');        
        $scope.confirmdiv_show = false;
        angular.element('#txtlastname').focus();

        return;
    }

    $scope.cancelrec = function (keyCode) {
        alert('this is for a cancel record');
        if (keyCode == 13) {
            $scope.confirmdiv_show = false;
            angular.element('#txtlastname').focus();
        }
        if (keyCode == 37) {

            angular.element('#id_true').focus();          
        }       
        if (keyCode == 38) {
            angular.element('#txtidnumber').focus();
            $scope.confirmdiv_show = false;
        }
        return;
    }       

    function Submit() {
        var varhidden = document.getElementById('Hiddenfield_car')["value"];

        document.getElementById('skipload')["value"] = "";
        var edit = document.getElementById('HiddenField_edit')["value"]
        var confirmation = window.confirm("Are you sure you want to " + edit + " this record?");

        if (varhidden == "car") {
            document.getElementById("carfield")["value"] = confirmation;
            return true;
        }
        else {
            document.getElementById("HiddenField1")["value"] = confirmation;
            return true;
        }
    }
   
    function clickseacrh() {
        customertype.focus();
    }   

    $scope.mouseenter = function (mouseenter) {
        if (accesstype == "viewcust") {
             angular.element('#ListBoxview').focus();
        } else {
             angular.element('#Listedit').focus();
        }
    }   

    $scope.customertypechange = function () {
        emptyseacrh = "empty";
        compstr = $scope.customertypeseacrh;

        retrieve();
    }

    $scope.fcustomtype = function () {
        if ($scope.customertype == "Individual") {
            $scope.companyname = "";
            var a = document.getElementById('txtcompname');
            a.disabled = true;
            angular.element("#txtlastname").focus()
        }
        if ($scope.customertype == "Company") {
            var a = document.getElementById('txtcompname');
            a.disabled = false;
            angular.element("#txtcompname").focus()
        }       
    }
    
    $scope.fcompname = function (aaaa) {
        alert(aaaa);
    }

    $scope.fsidtype = function (csidtype) {
        document.getElementById('txtidnumber').focus();
    }

    function SQLconnect() {
        var carref = document.getElementById("carrefdropdownlist").value;
        document.getElementById("carrefhidden").value = carref;

        var vclick = document.getElementById("btncaref");
        vclick.click();
    }

    function connectRFID_code() {
        document.getElementById('hiddenfieldrfid')["value"] = "";

        var carref = document.getElementById("carrefdropdownlist").value;
        document.getElementById("carrefhidden").value = carref;

        var vclick = documett.getElementById("btncaref2");
        vclick.click();
    }

    $scope.searchtext = function(keyCode) { /// this is subject for research
        if (keyCode == 40) {
            if (accesstype == "viewcust") {
                angular.element('#ListBoxview').focus();
            } else {
                angular.element('#Listedit').focus();
            }
        }        
    }

    function dummyfunction() {
        document.getElementById('lblline3');
    }       

    function mssgrfid() {
        document.getElementById('carrefdropdownlist').innerText = "";

        alert('This RFID CODE exist in the database, please re-type and use a different rfid ');
        document.getElementById('txtrfid')['value'] = "";
        return;
    }

    function carrefdrop() {
        document.getElementById('carrefdropdownlist').innerText = "";
    }

    $(document).ready(function () {
        $(document.getElementById('customerdiv')).mouseenter(function () {
            if (document.getElementById('txtrfid')['value'] == "") {
                if (document.getElementById('Listedit').style.display == "none" && document.getElementById('ListBoxview').style.display == "none") {
                    document.getElementById('txtrfid2').focus();
                }
            }
        });
    });

    $scope.Grfid2Code = function (evt) {
        var keyCode;
        if (evt.keyCode >= 48 && evt.keyCode < 58) {            
        }
        else if (typeof (evt.charCode) != "undefined") {
            alert('are you looking for this?');
            if (evt.keyCode != 13) {
                alert("Invalid input");
                document.getElementById('txtrfid2')['value'] = "          ";
                execScript;
            }
        }
    }

    //$scope.$watch('customertype', function () {
    //    watch();
    //});

    $scope.rfid2func = function (rfid2) {
        document.getElementById('txtrfid')['value'] = document.getElementById('txtrfid2')['value'];
        if (document.getElementById('txtrfid2').value.length >= 10) {
            document.getElementById('txtrfid2')['value'] = "";
            txtOnKeyPress();
        }
    }

    function txtOnKeyPress(txt1) {
        if (document.getElementById('txtrfid').value.length >= 10) {
            alert(document.getElementById('nosearch')["value"]);
            if (document.getElementById('nosearch')["value"] == "yes") {

                var cust = { 'rfid_code': document.getElementById('txtrfid')["value"] };
                $.ajax({
                    url: 'customer/searchrfid',
                    type: 'POST',
                    data: JSON.stringify(cust),
                    dataType: 'json',
                    contentType: "application/json",
                    success: function (response) {
                        if (response == "") {
                            alert("not exist");

                            confirmtrue();

                            autogenerate();

                            document.getElementById('customtype').focus();
                        }
                        else {
                            alert("This RFID code exist in our Database. Please re-type");
                            document.getElementById('txtrfid')['value'] = "";
                            document.getElementById('txtrfid2').focus();
                            return;
                        }
                    },
                });
            }
            
            if (document.getElementById('nosearch')["value"] == "") {
                alert('ok');
                var cust = { 'rfid_code': document.getElementById('txtrfid')["value"] };
                alert(cust);
                $.ajax({
                    url: 'customer/searchrfid',
                    type: 'POST',
                    data: JSON.stringify(cust),
                    dataType: 'json',
                    contentType: "application/json",
                    success: function (response) {
                        if (response == "") {
                            alert('empty');
                            /////  this is for search /////
                            if (document.getElementById('nosearch')["value"] == "") {
                                var varconfirm = window.confirm("This RFID code doesn't exist in our Database. Do you want to register this new RFID code?");
                            }
                            /////  this is for search /////
                            if (varconfirm == true) {
                                alert("this is true");

                                confirmtrue();

                                autogenerate();

                                newcust();

                                document.getElementById('customtype').focus();
                            } else {

                                $scope.$apply(function () {
                                    alert('are you sure');

                                    $scope.rfid_model            = true;     $scope.telephonenumber_model = true;
                                    $scope.customerid_model      = true;     $scope.mobilenumber_model = true;
                                    $scope.customertype_model    = true;     $scope.emailaddress_model = true;
                                    $scope.companyname_model     = true;     $scope.birthday_model = true;
                                    $scope.lastname_model        = true;     $scope.birthplace_model = true;
                                    $scope.firstname_model       = true;     $scope.nationality_model = true;
                                    $scope.middlename_model      = true;     $scope.idtype_model = true;
                                    $scope.address_model         = true;     $scope.idnumber_model = true;    
                                });
                                document.getElementById('txtrfid')['value']   = "";
                                document.getElementById('txtcustid')['value'] = "";
                                document.getElementById('txtrfid2').focus();
                                return;
                            }
                        }
                        else {
                            alert('exist');
                            $scope.$apply(function () {
                                $scope.telephonenumber = response[0]["phone_num"];
                                $scope.address         = response[0]["address"];
                                $scope.birthday        = formatDate(response[0]["birthday"].slice(0, 9));
                                $scope.birthday2       = response[0]["birthday"].slice(0, 9);                                
                                $scope.birthplace      = response[0]["birthplace"];
                                $scope.companyname     = response[0]["compname"];
                                $scope.customerid      = response[0]["custnum"];
                                $scope.customerid2     = response[0]["custnum"];
                                $scope.customertype    = response[0]["custtype"];
                                $scope.emailaddress    = response[0]["email_add"];
                                $scope.firstname       = response[0]["firstname"];
                                $scope.idnumber        = response[0]["idnum"];
                                $scope.idtype          = response[0]["idtype"];
                                $scope.lastname        = response[0]["lastname"];
                                $scope.middlename      = response[0]["middlename"];
                                $scope.mobilenumber    = response[0]["mobile_num"];
                                $scope.nationality     = response[0]["nationality"];
                            });;
                            if (document.getElementById('customtype')['value'] == "") {
                                document.getElementById('customtype')['value'] = response[0]["custtype"];
                            }
                            if (document.getElementById('txttelno')['value']       == "") {
                                document.getElementById('txttelno')['value']       = response[0]["phone_num"];
                                document.getElementById('txtaddress')['value']     = response[0]["address"];
                                document.getElementById('txtbirthday')['value']    = formatDate(response[0]["birthday"].slice(0, 9));
                                document.getElementById('txtbirthday2')['value']   = response[0]["birthday"].slice(0, 9);
                                document.getElementById('txtbirthplace')['value']  = response[0]["birthplace"];
                                document.getElementById('txtcompname')['value']    = response[0]["compname"];
                                document.getElementById('txtcustid')['value']      = response[0]["custnum"];
                                document.getElementById('txtcustid2')['value']     = response[0]["custnum"];
                                document.getElementById('customtype')['value']     = response[0]["custtype"];
                                document.getElementById('txtemailadd')['value']    = response[0]["email_add"];
                                document.getElementById('txtfirstname')['value']   = response[0]["firstname"];
                                document.getElementById('txtidnumber')['value']    = response[0]["idnum"];
                                document.getElementById('sidtype')['value']        = response[0]["idtype"];
                                document.getElementById('txtlastname')['value']    = response[0]["lastname"];
                                document.getElementById('txtmiddlename')['value']  = response[0]["middlename"];
                                document.getElementById('txtmobilenum')['value']   = response[0]["mobile_num"];
                                document.getElementById('txtnationality')['value'] = response[0]["nationality"];
                            }
                            document.getElementById('txtrfid2').focus();
                            return;
                        }
                    },

                });
            };
        }

        if (txt1 != 'undefined') {
            if (window.event.keyCode == "40") {
                document.getElementById('customtype').focus();
                alert('ooops1');
            }
            if (window.event.keyCode == "13") {
                document.getElementById('skipload')["value"] = "";
                document.getElementById('btnvalidate').click();

                document.getElementById('customtype').focus();
                alert('oooops2');
            }
        }
    }
    $("#txtrfid2").focus();

    $scope.custsearch = function (a) {
        emptycustomertext();
        disabledcustomertext();

        document.getElementById('nosearch')["value"] = "";
        document.getElementById("txtrfid2").focus();
        alert("focus");
    }

    // this is for custnum autogenerate in customer table //
    function autogenerate() {
        var cust = { 'custnum': document.getElementById('txtcustid')["value"] };
        $.ajax({
            url: 'customer/autogenerate',
            type: 'POST',
            data: JSON.stringify(cust),
            dataType: 'json',
            contentType: "application/json",
            success: function (response) {
                console.log(response);
                document.getElementById("txtcustid")['value'] = "CBV-" + response[0]["custnum"];
            }
        });
        return;
    }
    // this is for custnum autogenerate in customer table //

    function newcust() {
        document.getElementById("customtype")["value"]     = null;
        document.getElementById("txtcompname")["value"]    = null;
        document.getElementById("txtlastname")["value"]    = null;
        document.getElementById("txtfirstname")["value"]   = null;
        document.getElementById("txtmiddlename")["value"]  = null;
        document.getElementById("txtaddress")["value"]     = null;
        document.getElementById("txttelno")["value"]       = null;
        document.getElementById("txtmobilenum")["value"]   = null;
        document.getElementById("txtemailadd")["value"]    = null;
        document.getElementById("txtbirthday")["value"]    = null;
        document.getElementById("txtbirthday2")["value"]   = null;
        document.getElementById("txtbirthplace")["value"]  = null;
        document.getElementById("txtnationality")["value"] = null;
        document.getElementById("sidtype")["value"]        = null;
        document.getElementById("txtidnumber")["value"]    = null;
        return;
    }

    function emptycustomertext() {
        document.getElementById("txtrfid")["value"]        = null;
        document.getElementById("txtcustid")["value"]      = null;
        document.getElementById("customtype")["value"]     = null;
        document.getElementById("txtcompname")["value"]    = null;
        document.getElementById("txtlastname")["value"]    = null;
        document.getElementById("txtfirstname")["value"]   = null;
        document.getElementById("txtmiddlename")["value"]  = null;
        document.getElementById("txtaddress")["value"]     = null;
        document.getElementById("txttelno")["value"]       = null;        
        document.getElementById("txtmobilenum")["value"]   = null;
        document.getElementById("txtemailadd")["value"]    = null;
        document.getElementById("txtbirthday")["value"]    = null;
        document.getElementById("txtbirthday2")["value"]   = null;
        document.getElementById("txtbirthplace")["value"]  = null;
        document.getElementById("txtnationality")["value"] = null;
        document.getElementById("sidtype")["value"]        = null;
        document.getElementById("txtidnumber")["value"]    = null;
        varrfidcode                                        = "";
        varcustnum                                         = "";
        return;
    }
  
    function disabledcustomertext() {      
            $scope.rfid_model = true;
            $scope.customerid_model = true;

            if ($scope.customertype == null) {               
                //$scope.customertype_model = true;               
            }            

            $scope.companyname_model     = true;
            $scope.lastname_model        = true;
            $scope.firstname_model       = true;
            $scope.middlename_model      = true;
            $scope.address_model         = true;
            $scope.telephonenumber_model = true;
            $scope.mobilenumber_model    = true;
            $scope.emailaddress_model    = true;
            $scope.birthday_model        = true;
            $scope.birthday2_model       = true;
            $scope.birthplace_model      = true;
            $scope.nationality_model     = true;
            $scope.idtype_model          = true;
            $scope.idnumber_model        = true;

            $scope.lbltel_show           = false;
            $scope.confirmdiv_show       = false;

            $scope.showbirthday          = true;
            $scope.showbirthday2         = false;      
            return;
    }

    function confirmtrue() {    
        $scope.$apply(function () {
            $scope.rfid_model            = true;
            $scope.customerid_model      = true;
            $scope.customertype_model    = false;
            $scope.companyname_model     = false;
            $scope.lastname_model        = false;
            $scope.firstname_model       = false;
            $scope.middlename_model      = false;
            $scope.address_model         = false;
            $scope.telephonenumber_model = false;
            $scope.mobilenumber_model    = false;
            $scope.emailaddress_model    = false;

            $scope.birthday_model        = false;
            $scope.birthday2_model       = false;

            $scope.birthplace_model      = false;
            $scope.nationality_model     = false;
            $scope.idtype_model          = false;
            $scope.idnumber_model        = false;

            return;
        });
    }

    function editdisabled() {
            $scope.showcustomerlist       = false;
            $scope.showlistboxview        = false;

            $scope.showcustomer           = false;
            $scope.showeditborder         = false;
            $scope.showlastname           = false;
            $scope.showfirstname          = false;
            $scope.showcompanyname        = false;
            $scope.showlbltelname         = false;
            $scope.showsearch             = false;
            $scope.showcustomertypeseacrh = false;
            $scope.showcustomersearch     = false;
            $scope.customertypeseacrh     = [];

            $scope.showrequired           = true;
            $scope.rfid_model             = true;
            $scope.customerid_model       = true;           
            
            $scope.customertype_model     = false;

            $scope.companyname_model      = false;
            $scope.lastname_model         = false;
            $scope.firstname_model        = false;
            $scope.middlename_model       = false;

            $scope.address_model          = false;
            $scope.telephonenumber_model  = false;
            $scope.mobilenumber_model     = false;
            $scope.emailaddress_model     = false;

            $scope.birthday_model         = false;
            $scope.birthday2_model        = false;
            $scope.birthplace_model       = false;
            $scope.nationality_model      = false;

            $scope.idtype_model           = false;
            $scope.idnumber_model         = false;

            angular.element('#customtype').focus();
            return;
    }    
   
});

// this function is for the setcursor position wherein to put cursor on the last part of the statement //
function setCursorPositionToEnd(elementId) {
    var elementRef = document.getElementById(elementId);
    var cursorPosition = document.getElementById(elementId).value.length;

    console.log(elementRef + cursorPosition);

    if (elementRef != null) {
        if (elementRef.createTextRange) {
            var textRange = elementRef.createTextRange();
            textRange.move('character', cursorPosition);
            textRange.select();
        }
        else {
            if (elementRef.selectionStart) {
                elementRef.focus();
                elementRef.setSelectionRange(cursorPosition, cursorPosition);
            }
            else {
                elementRef.focus();
                elementRef.setSelectionRange(cursorPosition, cursorPosition);
            }
        }
    }
}
// this function is for the setcursor position wherein to put cursor on the last part of the statement //

// this is for re-ordering the styling from css //
function edit_delete_styling() {
    document.getElementById("lbledit").style.width      = "621px";
    document.getElementById("lbleditcustid").style.left = "155px";
    document.getElementById("lblname").style.left       = "299px";
    document.getElementById("lblfirst").style.left      = "437px";
    document.getElementById("lblcomp").style.left       = "564px";
    document.getElementById("lblsearch").style.left     = "706px";
    document.getElementById('customertype').style.left  = "775px";
    document.getElementById('txtsearch').style.left     = "875px";
    return;
}

function viewstyling() {
    document.getElementById("lbledit").style.width      = "874px";
    document.getElementById("ListBoxview").style.left   = "153px";
    document.getElementById("lbleditcustid").style.left = "155px";
    document.getElementById("lblname").style.left       = "298px";
    document.getElementById("lblfirst").style.left      = "444px";
    document.getElementById("lblcomp").style.left       = "590px";
    document.getElementById("lblsearch").style.left     = "960px";
    document.getElementById('customertype').style.left  = "1029px";
    document.getElementById('txtsearch').style.left     = "1128px";
    return;
}
// this is for re-ordering the styling from css //


//// this is for customer keypress  /////
