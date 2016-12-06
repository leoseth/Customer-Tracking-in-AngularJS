﻿///////  this is for car keypress  ///////
// $rootScope is a parent object of all $scope angular objects created in a web page //
// $scope is created with ng-controller while $rootscope is created with ng-app //
angular.module('myapp').controller('carcontroller', function ($scope, $http, $rootScope) {
        /// this is to show the car model ///
        $scope.showplatenum = true;
        $scope.showmake = true;
        $scope.showmodel = true;
        $scope.showregistrationnum = true;
        $scope.showregistrationdate = true;
        $scope.showcolor = true;
        $scope.showchasisnumber = true;
        $scope.showenginenumber = true;
        /// this is to show the car model ///
       
        ///// this is to disabled the car model ///
        $scope.platenum_model = true;
        $scope.make_model = true;
        $scope.model_model = true;
        $scope.registrationnum_model = true;
        $scope.registrationdate_model = true;
        $scope.color_model = true;
        $scope.chasisnumber_model = true;                                    
        $scope.enginenumber_model = true;        
        ///// this is to disabled the car model ///

        // this is a sharedfactory services //

        // this is a sharedfactory services //

        //  this is to add car information  //
        $scope.addcar = function () {
            if (varrfidcode != "") {
                enabledcarfields();
                emptycarfileds();

                $scope.showcardivconfirm = true;

                setTimeout(function () {
                    $scope.$apply(function () {
                        angular.element('#txtplatenum').focus();
                    });
                }, 0);
               
            } else { alert("you are not allowed to add new car if the RFID Code is empty");}
            return;
        }
       //  this is to add car information  //       

        // this is to remove the empty space in the select control //
        $scope.mouseenter = function () {
            var x = document.getElementById("Listeditcar");
            for (var i = 0; i < x.length; i++) {
                if (x[0].innerHTML == "") {
                    x.selectedIndex = 0;
                    x.remove(x.selectedIndex);
                    break;
                }
            }
        }
        // this is to remove the empty space in the select control //

        //  this is to edit car information  //
        $scope.editcar = function () {
            currentstate = "caredit";
            $scope.searchplatenum = "";
            retrieve();
        }          
        //  this is to edit car information  //


        //  this is to delete car information //
        $scope.deletecar = function () {
            currentstate = "cardelete";
            $scope.searchplatenum = "";
            retrieve();            
        }
        //  this is to delete car information //

        //  this is to view car information  //
        $scope.viewcar = function () {
            currentstate = "view";
            $scope.searchplatenum = "";
            retrieve();
        }
        //  this is to view car information  //

        $scope.listeditcarkeycode = function (keyCode) {
            if (keyCode == 13) {
                datacarpopulate();
            }            
        }

        $scope.listeditcarkeycode2 = function () {
            if (window.event.toElement.nodeType == 1) {
                datacarpopulate();
            }
        }      

        // this is a retrieve function of the Listeditcar //
        function retrieve() {            
            var rfidcode = {'rfid_code':varrfidcode};
            $http({ url: "/car/retrieve", method: 'POST', data: JSON.stringify(rfidcode), dataType: 'json', headers: { 'Content-Type': 'application/json' } }).success(function (response) {
                var editcar      = []; this // this is an array for the car
                var platecount   = 12;
                var makecount    = 27;
                var modelcount   = 27;
                var regiscount   = 20;
                var colorcount   = 20;
                var chassiscount = 20;
                var enginecount  = 20;

                if (currentstate == "view") {
                    for (var i = 0; i < response.length; i++) {
                        editcar.push(padding_right(response[i].platenum, '\u00A0', platecount) + (padding_right(response[i].make, '\u00A0', makecount)) + padding_right(response[i].model, '\u00A0', modelcount) + padding_right(response[i].regnum, '\u00A0', regiscount) + padding_right(response[i].color, '\u00A0', colorcount) + padding_right(response[i].chasisnum, '\u00A0', chassiscount) + padding_right(response[i].enginenum, '\u00A0', enginecount));
                    }
                } else {
                    for (var i = 0; i < response.length; i++) {
                        editcar.push(padding_right(response[i].platenum, '\u00A0', platecount) + (padding_right(response[i].make, '\u00A0', makecount)) + padding_right(response[i].model, '\u00A0', modelcount));
                    }
                }

                console.log(response);
                dataresponse                   = response;
                $scope.carvalue                = editcar;
                $scope.showlblcarlistborder    = true;
                $scope.showlblplatenumber      = true;
                $scope.showlblmaker            = true;
                $scope.showlblcarmodel         = true;
                $scope.showlblsearchbyplatenum = true;
                $scope.showtxtsearchplatenum   = true;

                if (currentstate == "view") {
                    $scope.showlblregis        = true;
                    $scope.showcolorheader     = true;
                    $scope.showlblchasisheader = true;

                    document.getElementById("lblcarlistborder").style.width   = "1005px";
                    document.getElementById("lblsearchbyplatenum").style.left = "1030px";
                    document.getElementById("txtsearchplatenum").style.left   = "1160px";
                    document.getElementById("Listeditcar").style.width        = "1182px";
                    $scope.showcarlist = true;
                } else {
                    $scope.showlblregis        = false;
                    $scope.showcolorheader     = false;
                    $scope.showlblchasisheader = false;
                    document.getElementById("lblcarlistborder").style.width   = "750px";
                    document.getElementById("lblsearchbyplatenum").style.left = "780px";
                    document.getElementById("txtsearchplatenum").style.left   = "905px";
                    document.getElementById("Listeditcar").style.width        = "927px";
                    $scope.showcarlist = true;
                }
                              

            }, function (failed) {
                alert("failed");                                                 
            });           
            return;
        }
        // this is a retrieve function of the Listeditcar //        
       
        // this is for Data car populate //
        function datacarpopulate() {
            if (currentstate == "caredit" || currentstate == "view") {
                var cardatafiltered = document.getElementById("Listeditcar")['value'].slice(0, 9);
                for (var i = 0; i < dataresponse.length; i++) {
                    if (dataresponse[i].platenum.toString().trim() == cardatafiltered.toString().trim()) {

                        enabledcarfields();
                        emptycarfileds();

                        $scope.platenumber      = dataresponse[i].platenum;
                        $scope.make             = dataresponse[i].make;
                        $scope.model            = dataresponse[i].model;
                        $scope.registrationnum  = dataresponse[i].regnum;
                        $scope.registrationdate = formatDate(dataresponse[i].regdate.slice(0, 9));
                        $scope.color            = dataresponse[i].color;
                        $scope.chasisnumber     = dataresponse[i].chasisnum;
                        $scope.enginenumber     = dataresponse[i].enginenum;
                        varcustnum              = dataresponse[i].custnum;
                        varplatenum             = dataresponse[i].platenum;
                        removecarlist();

                        // this is $rootScope parameter to communicate with the customercontroller //
                        $rootScope.$emit('communication', 'Child calling parent');
                        // this is $rootScope parameter to communicate with the customercontroller //

                        break;
                    }
                }
            }
            if (currentstate == "cardelete") {
                var confirmation = window.confirm("Are you sure you want to DELETE this car record?");
                if (confirmation == true) {
                    deletecarrecord();
                }
            }
            return;
        }
        // this is for Data car populate //

        // this is a deletecarrecord function //
            function deletecarrecord() {
                var carplate = { 'platenum': document.getElementById("Listeditcar")['value'].slice(0, 9) };
                // car is the prefix of the carController
                $http({ url: "/car/delete", method: 'DELETE', data: JSON.stringify(carplate), dataType: 'json', headers: { 'Content-Type': 'application/json' } }).success(function (response) {

                    emptycarfileds();
                    disablecarfields();
                    removecarlist();

                }, function (failed) {
                    alert("car record was unsuccessfully deleted");
                });
            }
        // this is a deletecarrecord function //

        $scope.btneditcarkeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element("#Listeditcar").focus();
            }

            if (keyCode == 40) {
                angular.element("#Listeditcar").focus();
            }

            if (keyCode != 38 && keyCode != 40) {
                angular.element('#txtsearchplatenum').focus();
            }
        }

        $scope.searchplatenumkeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element("#Listeditcar").focus();
            }
            if (keyCode == 40) {             
                angular.element("#Listeditcar").focus();
            }
        }

        $scope.btndeletecarkeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element("#Listeditcar").focus();
            }

            if (keyCode == 40) {
                angular.element("#Listeditcar").focus();
            }

            if (keyCode != 38 && keyCode != 40) {
                angular.element('#txtsearchplatenum').focus();
            }
        }

        $scope.btnviewcarkeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element("#Listeditcar").focus();
            }

            if (keyCode == 40) {
                angular.element("#Listeditcar").focus();
            }

            if (keyCode != 38 && keyCode != 40) {
                angular.element('#txtsearchplatenum').focus();
            }
        }

        // right padding s with c to a total of n chars for car module
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
        // right padding s with c to a total of n chars for car module


        //  this is to clear the Listeditcar from the car module  //         
        $(document).keyup(function (escapecar) {
            if (escapecar.keyCode == 27) {
                $scope.$apply(function () {
                    $scope.showlblcarlistborder    = false;
                    $scope.showcarlist             = false;
                    $scope.showlblplatenumber      = false;
                    $scope.showlblmaker            = false;
                    $scope.showlblcarmodel         = false;

                    $scope.showlblregis            = false;
                    $scope.showcolorheader         = false;
                    $scope.showlblchasisheader     = false;
                    $scope.showlblengineheader     = false;

                    $scope.showlblsearchbyplatenum = false;
                    $scope.showtxtsearchplatenum   = false;
                });
            }           
        });
        //  this is to clear the Listeditcar from the car module //                        

        $scope.listeditcarkeycode = function (keyCode) {
            if (keyCode == 13) {
                datacarpopulate();
            }               
        }
        
        $scope.searchplatenumfocus = function () {
            angular.element('#txtsearchplatenum').focus();
        }

        // this is for keyup and keydown event in car //
        $scope.platenumberkeyup = function (keyCode) {
            if (keyCode == 13 || keyCode == 40) {
                angular.element('#txtmake').focus();
            }
        }

        $scope.makekeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element('#txtplatenum').focus();
            }

            if (keyCode == 13 || keyCode == 40) {
                angular.element('#txtmodel').focus();
            }
        }

        $scope.modelkeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element('#txtmake').focus();
            }

            if (keyCode == 13 || keyCode == 40) {
                angular.element('#txtregisnum').focus();
            }
        }

        $scope.registrationkeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element('#txtmodel').focus();
            }

            if (keyCode == 13 || keyCode == 40) {
                angular.element('#txtregisdate').focus();
            }
        }

        $scope.registrationdatekeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element("#txtregisnum").focus();
            }

            if (keyCode == 13 || keyCode == 40) {
                angular.element("#txtcolor").focus();
            }
        }

        $scope.colorkeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element("#txtregisdate").focus();
            }

            if (keyCode == 13 || keyCode == 40) {
                angular.element("#txtchasisnum").focus();
            }
        }

        $scope.chasisnumberkeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element("#txtcolor").focus();
            }

            if (keyCode == 13 || keyCode == 40) {
                angular.element("#txtenginenum").focus();
            }
        }

        $scope.enginekeypress = function () {
            $scope.showcardivconfirm = true;
        }

        $scope.enginenumberkeyup = function (keyCode) {
            if (keyCode == 38) {
                angular.element("#txtchasisnum").focus();
            }

            if (keyCode == 13 || keyCode == 40) {                
                angular.element("#car_true").focus();
            }
        }

        $scope.cardivconfirmkeyup = function (keyCode) {
            if (keyCode == 13) {
                $scope.showcardivconfirm = false;
            }

            if (keyCode == 37) {
                angular.element("#car_true").focus();
            }

            if (keyCode == 39) {
                angular.element("#car_cancel").focus();
            }
        }

        $scope.savekeyup = function (keyCode) {
            if (keyCode == 13) {
                savecar_records();
            }
        }
        // this is for keyup and keydown event in car //       

        //  this is for saving a car records //
        function savecar_records() {
            if ($scope.enginenumber != "" && varrfidcode !="" ) {
                var car = {
                    'rfid_code' : varrfidcode,             'custnum'   : varcustnum,
                    'platenum'  : $scope.platenumber,      'make'      : $scope.make,
                    'model'     : $scope.model,            'regnum'    : $scope.registrationnum,
                    'regdate'   : $scope.registrationdate, 'color'     : $scope.color,
                    'chasisnum' : $scope.chasisnumber,     'enginenum' : $scope.enginenumber,
                    'delrec'    : null
                };
                $http({ url: '/car/save', method: "POST", data: JSON.stringify(car), dataType: 'json', headers: { 'Content-Type': 'application/json' } }).success(function (response) {                                   
                    $scope.platenumber      = null;  $scope.make            = null;
                    $scope.model            = null;  $scope.registrationnum = null;
                    $scope.registrationdate = null;  $scope.color           = null;
                    $scope.chasisnumber     = null;  $scope.enginenumber    = null;                  
                    alert('car records were successfully saved');
                }, function (failed) {
                    alert('failed');
                });
            }
        }
        //  this is for saving a car records // 

        //  this is to enabled car fields //
        function enabledcarfields() {
                   $scope.platenum_model         = false;
                   $scope.make_model             = false;
                   $scope.model_model            = false;
                   $scope.registrationnum_model  = false;
                   $scope.registrationdate_model = false;
                   $scope.color_model            = false;
                   $scope.chasisnumber_model     = false;
                   $scope.enginenumber_model     = false;
        }
        //  this is to enabled car fields //

        //  this is to disabled car fields //
        function disablecarfields() {
                   $scope.platenum_model         = true;
                   $scope.make_model             = true;
                   $scope.model_model            = true;
                   $scope.registrationnum_model  = true;
                   $scope.registrationdate_model = true;
                   $scope.color_model            = true;
                   $scope.chasisnumber_model     = true;
                   $scope.enginenumber_model     = true;
        }
        //  this is to disabled car fields //

        //  this is to empty the car fields //
        function emptycarfileds() {
            document.getElementById("txtplatenum")['value']     ="";
            document.getElementById("txtmake")['value']         ="";
            document.getElementById("txtmodel")['value']        ="";
            document.getElementById("txtregisnum")['value']     ="";
            document.getElementById("txtregisdate")['value']    ="";
            document.getElementById("txtcolor")['value']        ="";
            document.getElementById("txtchasisnum")['value']    ="";
            document.getElementById("txtenginenum")['value']    ="";
        }
        //  this is to empty the car fileds //

        // this is to remove car list //
        function removecarlist() {                 
                   $scope.showlblcarlistborder    = false;
                   $scope.showcarlist             = false;
                   $scope.showlblplatenumber      = false;
                   $scope.showlblmaker            = false;
                   $scope.showlblcarmodel         = false;
                   $scope.showlblregis            = false;
                   $scope.showcolorheader         = false;
                   $scope.showlblchasisheader     = false;
                   $scope.showlblsearchbyplatenum = false;
                   $scope.showtxtsearchplatenum   = false;
        }
        // this is to remove car list //        

        /// This is to convert from 'mm-dd-yyyy(10-28-2016)' format to 'yyyy-mm-dd(2016-10-28)' format for car ///
        function formatDate(date) {
            var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-');
        }
        /// This is to convert from 'mm-dd-yyyy(10-28-2016)' format to 'yyyy-mm-dd(2016-10-28)' format for car ///
        

        // this is for window load which is the first event in car_keypress.js file //
        window.onload = function () {
                  document.getElementById("cardivconfirm").style.display       = "inherit";
                  document.getElementById("lblcarlistborder").style.display    = "inherit";
                  document.getElementById("lblplatenumber").style.display      = "inherit";
                  document.getElementById("lblmaker").style.display            = "inherit";
                  document.getElementById("lblcarmodel").style.display         = "inherit";

                  document.getElementById("lblregis").style.display            = "inherit";
                  document.getElementById("lblcolorheader").style.display      = "inherit";
                  document.getElementById("lblchasisheader").style.display     = "inherit";               

                  document.getElementById("Listeditcar").style.display         = "inherit";
                  document.getElementById("lblsearchbyplatenum").style.display = "inherit";
                  document.getElementById("txtsearchplatenum").style.display   = "inherit";                 
        };   
        // this is for window load which is the first event in car_keypress.js file //
});

//////   this is for car keypress  ///////



