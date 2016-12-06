
// this is for a transaction keypress //
// $rootScope is a parent object of all $scope angular objects created in a web page //
// $scope is created with ng-controller while $rootscope is created with ng-app //
angular.module('myapp').controller('transcontroller', function ($scope, $http, $rootScope) {
  
    // this is to load the changable condition controls under transcontroller //
    document.getElementById("transdivconfirm").style.display = "inherit";
    // this is to load the changable condition controls under transcontroller //

    // this is to load the child div transcontroller for a fixed condition controls //   
    $scope.showlbltranslibrary   = true;                          
    $scope.showlblinvoicenum     = true;
    $scope.showinvoicenum        = true;

    $scope.showlbltransactnum    = true;
    $scope.showtransactnum       = true;
    $scope.showlbltransactdate   = true;
    $scope.showtransactdate      = true;
    $scope.showlblservice        = true;
    $scope.showservice           = true;
    $scope.showlbltypeofservice  = true;
    $scope.showtypeofservice     = true;
    $scope.showlblwarstatus      = true;
    $scope.showwarstatus         = true;
    $scope.showwireexpire        = true;
    $scope.showwireexpire        = true;
    $scope.showlblmainsched      = true;
    $scope.showmainsched         = true;
    $scope.showlblmaindue        = true;
    $scope.showmaindue           = true;
    $scope.showlblsmsmess        = true;
    $scope.showsmsmess           = true;
    $scope.showlblservdetails    = true;
    $scope.showservdetails       = true;
          
    $scope.disabledinvoicenum    = true;
    $scope.disabledtransactnum   = true;
    $scope.disabledtransactdate  = true;
    $scope.disabledservice       = true;
    $scope.disabledtypeofservice = true;
    $scope.disabledwarstatus     = true;

    $scope.disabledwireexpire    = true;
    $scope.disabledmainsched     = true;
    $scope.disabledmaindue       = true;

    $scope.disabledsmsmess       = true;
    $scope.disabledservdetails   = true;

    var varmobilenum = "";
    var varidnum = "";
    var varlastname = "";
    var varfirstname = "";
    var varaddress = "";
    // this is to load the child div transcontroller for a fixed condition controls //

    $scope.clickaddtransaction = function ($event) {
        $scope.showtransdivconfirm = true;
       
        emptytransfields();
        enabledtransfields();
    }

    $scope.clickedittransaction = function ($event) {
        //$scope.showtransborder     = true;
        //$scope.showtranslist       = true;

        $scope.showtransdivconfirm = false;

        retrieve();
    }

    // right padding s with c to a total of n chars for transaction module
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
    // right padding s with c to a total of n chars for transaction module

    // this is a retrieve for transaction //
    function retrieve() {
        var edittrans = [];

        var vtrandatecount    = 15;
        var vtransacnumcount  = 20;
        var vinvoicenumcount  = 20;
        var vservivecount     = 40;
        var vtypeofservcount  = 25;
        var vwarstatuscount   = 10;
        var vmainschedcount   = 18;
        var vmainduecount     = 15;
     
        $http({ url: '/trans/retrieve', method: "GET" }).success(function (response) {                                                                                                                                                                                                                                                                                                                                                                                                   
            for (var i = 0; i < response.length; i++) {
                edittrans.push(padding_right(formatDate(response[i].transact_date), '\u00A0', vtrandatecount) + padding_right(response[i].transact_num,  '\u00A0', vtransacnumcount) + padding_right(response[i].invoice_num, '\u00A0', vinvoicenumcount) + padding_right(response[i].service, '\u00A0', vservivecount)+ padding_right(response[i].type_of_service, '\u00A0', vtypeofservcount) + padding_right(response[i].warstatus, '\u00A0', vwarstatuscount) + padding_right(response[i].main_schedule, '\u00A0', vmainschedcount) + formatDate(padding_right(response[i].main_duedate), '\u00A0', vmainduecount));
            }
            console.log(edittrans);
            //dataresponse = response;
            $scope.trnvalue = edittrans;
            console.log($scope.trnvalue);

            $scope.showtransborder  = true;
            $scope.showtrandate     = true;
            $scope.showtrantnum     = true;
            $scope.showinvcnum      = true;
            $scope.showserv         = true;
            $scope.showservetype    = true;
            $scope.showwarstat      = true;
            $scope.showmainschedule = true;
            $scope.showmainduedate  = true;
            $scope.showtranslist    = true;
                     
        }, function (failed) {
            alert("failed");
        });
    }
    // this is a retrieve for transaction //    

    //   this is for a keyup   //
    $scope.keyupinvoicenum = function (keyCode) {
        if (keyCode == 13 || keyCode == 40) {
            autogenarate();
        }
    }    

    $scope.keyuptransactnum = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#txtinvoicenum").focus();
        }

        if (keyCode == 13 || keyCode == 40) {
            angular.element("#txttransactdate").focus();
        }
    }

    $scope.keyuptransactdate = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#txttransactnum").focus();
        }

        if (keyCode == 13 || keyCode == 40) {
            angular.element("#slcservice").focus();
        }
    }

    $scope.keyupservice = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#txttransactdate").focus();
        }

        if (keyCode == 13 || keyCode == 40) {
            angular.element("#slctypeofservice").focus();
        }
    }

    $scope.keyuptypeofservice = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#slcservice").focus();
        }

        if (keyCode == 13 || keyCode == 40) {
            angular.element("#slcwarstatus").focus();
        }
    }

    $scope.keyupwarstatus = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#slctypeofservice").focus();
        }

        if (keyCode == 13 || keyCode == 40) {
            angular.element("#txtwireexpire").focus();
        }
    }

    $scope.keyupwireexpire = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#slcwarstatus").focus();
        }

        if (keyCode == 13 || keyCode == 40) {
            angular.element("#txtservdetails").focus();
        }
    }

    $scope.keyupmainsched = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#txtwireexpire").focus();
        }

        if (keyCode == 13 || keyCode == 40) {
            angular.element("#txtmaindue").focus();
        }
    }

    $scope.keyupmaindue = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#slcmainsched").focus();
        }

        if (keyCode == 13 || keyCode == 40) {
            angular.element("#txtsmsmess").focus();
        }
    }

    $scope.keyupsmsmess = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#txtmaindue").focus();
        }

        if (keyCode == 13 || keyCode == 40) {
            angular.element("#txtservdetails").focus();
        }
    }

    $scope.keyupservdetails = function (keyCode) {
        if (keyCode == 13 || keyCode == 38 || keyCode == 40){
              if (keyCode == 38) {
                  angular.element("#txtsmsmess").focus();
              }

              if (keyCode == 13 || keyCode == 40) {
                  $scope.showtransdivconfirm = true;

                  angular.element("#btnsavetransaction").focus();
              }             
        }    
    }   

    $scope.keyupsavetransaction = function (keyCode) {
        if (keyCode == 13) {
            save_transact();
        }
    }

    $scope.keyuptranslist = function (keyCode) {
        if (keyCode == 40) {
            angular.element("#translistedit").focus();
        }
    }

    $scope.edittranskeyup = function (keyCode) {
        if (keyCode == 38) {
            angular.element("#translistedit").focus();
        }

        if (keyCode == 40) {
            angular.element("#translistedit").focus();
        }
    }
    //   this is for a keyup   //

    // this is for invoice_num autogenarate for transaction table //
    function autogenarate() {
        $http({ url: "/trans/autogenerate", method: 'GET' }).success(function (response) {
            var trans1 = "TRN";
            console.log(response);
            $scope.transactnum = trans1 + '-'.toString().trim() + response[0].transact_num;
            var date = new Date();
            $scope.transactdate = ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
            angular.element("#slcservice").focus();

        }, function (failed) {
            alert("failed");
        });
    }
    // this is for invoice_num autogenarate for transaction table //
    
    //  this is for a keypress //
    $scope.keypressinvoicenum = function (keypress) {
        //if ( $event.keyCode>= 48 && $event.keyCode < 58 || $event.keyCode == 45) {
        if (keypress.keyCode >= 60 && keypress.keyCode != 13) {
            alert("invalid input because this is a numeric data type");
        }
    }
    //  this is for a keypress //

    //  this is for saving transaction fields //
        function save_transact() {
            if ($scope.servdetails != "" && varrfidcode != "") {
               
                // this is the $rootScope function to get data from customercontroller // 
                varmobilenum = $rootScope['$$childHead'].mobilenumber;
                varidnum     = $rootScope['$$childHead'].idnumber;
                varlastname  = $rootScope['$$childHead'].lastname;
                varfirstname = $rootScope['$$childHead'].firstname;
                varaddress   = $rootScope['$$childHead'].address;               
                // this is the $rootScope function to get data from customercontroller // 
                vsmssend = "no";
                var transact = {
                    'rfid_code'    : varrfidcode,        'custnum'         : varcustnum,
                    'platenum'     : varplatenum,        'invoice_num'     : $scope.invoicenum,
                    'transact_num' : $scope.transactnum, 'transact_date'   : $scope.transactdate,
                    'service'      : $scope.service,     'type_of_service' : $scope.typeofservice,
                    'warstatus'    : $scope.warstatus,   'warexpiration'   : $scope.wireexpire,
                    'main_schedule': $scope.mainsched,   'main_duedate'    : $scope.maindue,
                    'smsmess'      : $scope.smsmess,     'service_details' : $scope.servdetails,
                    'mobile_num'   : varmobilenum,       'mssgsent'        : vsmssend,
                    'idnum'        : varidnum,           'lastname'        : varlastname,
                    'firstname'    : varfirstname,       'address'         : varaddress,
                    'delrec'       : null
                };                
                // trans is the prefix of the transController
                $.ajax({ url: '/trans/savetrans', type: 'POST', data: JSON.stringify(transact), dataType: 'json', contentType: "application/json", success: function (response) {
                    alert("record saved successfully");
                       emptytransfields();
                       enabledtransfields();

                    }, error: function (failed) {
                       console.log("failed");
                    }
                });

            }  
        }
    //  this is for saving transaction fields //

    //  this is for selection change  //
        $scope.changeshowservice = function ($event) {
            angular.element("#slctypeofservice").focus();
        }

        $scope.changetypeofservice = function ($event) {
            if ($scope.typeofservice == 'Maintenance' || $scope.typeofservice == 'Maintenance / Warranty') {
                var vservice = { 'service': $scope.service };
                $http({ url: '/trans/sms', method: "POST", data: JSON.stringify(vservice), dataType: 'json', headers: { 'Content-Type': 'application/json' } }).success(function (response) {
                    $scope.warstatus  = "";
                    $scope.wireexpire = "";                 

                    $scope.disabledwarstatus  = true;
                    $scope.disabledwireexpire = true;
                    $scope.disabledmainsched  = false;
                    $scope.disabledmaindue    = false;
                    $scope.disabledsmsmess    = false;                  
                    $scope.smsmess            = response[0].smsmess;                   
                    setTimeout(function () {
                        $scope.$apply(function () {                           
                               angular.element("#slcmainsched").focus();
                        });
                    }, 0);

                }, function (failed) { alert("failed"); });
            } else {
                    $scope.mainsched          = "";
                    $scope.maindue            = "";
                    $scope.smsmess            = "";

                    $scope.disabledwarstatus  = false;
                    $scope.disabledwireexpire = false;
                    $scope.disabledmainsched  = true;
                    $scope.disabledmaindue    = true;
                    $scope.disabledsmsmess    = true;
                    setTimeout(function () {
                        $scope.$apply(function () {                           
                               angular.element("#slcwarstatus").focus();
                        });
                    }, 0);              
            }            
        }

        $scope.changewarstatus = function () {
            angular.element("#txtwireexpire").focus();
        }
    //  this is for selection change  //

    /// This is to convert from 'mm-dd-yyyy(10-28-2016)' format to 'yyyy-mm-dd(2016-10-28)' format for transactions ///
    function formatDate(date) {
        var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
    /// This is to convert from 'mm-dd-yyyy(10-28-2016)' format to 'yyyy-mm-dd(2016-10-28)' format for transactions ///   

    // this is for parsing or estimating the due date //

    $scope.mschedvalue = function (date, days) {
        var dateOfIncident = new Date($('#txtwireexpire').val()); // or Date.parse(...)
        var dateNow = new Date(); // or Date.now()
        if (dateNow > dateOfIncident) {
            alert('you are not allowed to set a past DATE in the warranty experition');
            document.getElementById('txtwarexpire')['value'] = 'mm/dd/yyyy';
            document.getElementById('txtwarexpire').focus();
        }

        var nvalue = document.getElementById("slcmainsched").value;
        if (nvalue == "1 week") {
            vdays = 7;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);           
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "2 weeks") {
            vdays = 14;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "3 weeks") {
            vdays = 21;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "4 weeks") {
            vdays = 28;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "1 month") {
            vdays = 30;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "2 months") {
            vdays = 61;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "3 months") {
            vdays = 91;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "4 months") {
            vdays = 122;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "5 months") {
            vdays = 152;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "6 months") {
            vdays = 183;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "7 months") {
            vdays = 213;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "8 months") {
            vdays = 243;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "9 months") {
            vdays = 274;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "10 months") {
            vdays = 304;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "11 months") {
            vdays = 334;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
        if (nvalue == "1 year") {
            vdays = 365;
            var currentDate = new Date();
            currentDate.addDays(window.vdays);
            $scope.maindue = formatDate(currentDate.toLocaleDateString());
            angular.element("#txtservdetails").focus();
        }
    }
            Date.prototype.addDays = function (days) {
            this.setDate(this.getDate() + parseInt(days));
            return this;
    };
    // this is for parsing or estimating the due date //       

    // to empty all the transaction fields //
         function emptytransfields() {
             $scope.invoicenum    = "";
             $scope.transactnum   = "";
             $scope.transactdate  = "";
             $scope.service       = "";
             $scope.typeofservice = "";
             $scope.warstatus     = "";
             $scope.wireexpire    = "";
             $scope.mainsched     = "";
             $scope.maindue       = "";
             $scope.smsmess       = "";
             $scope.servdetails   = "";
             vsmssend             = "";
         }

         // to empty all the transaction fields //
         function enabledtransfields() {
                  $scope.disabledinvoicenum    = false;
                  $scope.disabledtransactnum   = true;
                  $scope.disabledtransactdate  = true;
                  $scope.disabledservice       = false;
                  $scope.disabledtypeofservice = false;
                  $scope.disabledwarstatus     = false;

                  $scope.disabledwireexpire    = false;
                  $scope.disabledmainsched     = false;
                  $scope.disabledmaindue       = false;

                  $scope.disabledsmsmess       = false;
                  $scope.disabledservdetails   = false;
                                  
                  setTimeout(function () {
                      $scope.$apply(function () {                         
                          $scope.invoicenum = "INV-";
                          angular.element("#txtinvoicenum").focus();
                          setCursorPositionToEnd("txtinvoicenum");
                      });
                  }, 0);                             
         }             
         // to empty all the transaction fields //

         // this is to set cursor position to End //
         function setCursorPositionToEnd(elementId) {
             var elementRef = document.getElementById(elementId);
             var cursorPosition = document.getElementById(elementId).value.length;

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
         // this is to set cursor position to End //

         // this is to clear the translist from the transaction module //
         $(document).keyup(function (escapetrans) {
             if (escapetrans.keyCode == 27) {
                 $scope.$apply(function () {
                        $scope.showtransborder  = false;
                        $scope.showtrandate     = false;
                        $scope.showtrantnum     = false;
                        $scope.showinvcnum      = false;
                        $scope.showserv         = false;
                        $scope.showservetype    = false;
                        $scope.showwarstat      = false;
                        $scope.showmainschedule = false;
                        $scope.showmainduedate  = false;
                        $scope.showtranslist    = false;
                 });                
             }
         });
         // this is to clear the translist from the transaction module //

         // window load for transaction module //
             document.getElementById("lbltransborder").style.display  = "inherit";
             document.getElementById("lbltrandate").style.display     = "inherit";
             document.getElementById("lbltrandate").style.display     = "inherit";
             document.getElementById("lbltrantnum").style.display     = "inherit";
             document.getElementById("lblinvcnum").style.display      = "inherit";
             
             document.getElementById("lblserv").style.display         = "inherit";
             document.getElementById("lblservetype").style.display    = "inherit";
             document.getElementById("lblwarstat").style.display      = "inherit";
             document.getElementById("lblmainschedule").style.display = "inherit";
             document.getElementById("lblmainduedate").style.display  = "inherit";
        
             document.getElementById("translistedit").style.display   = "inherit";             
         // window load for transaction module //
});

// this is for a transaction keypress //