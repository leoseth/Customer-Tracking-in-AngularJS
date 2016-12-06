///////  this is for escape ///////////
                
$(document).keyup(function (e){
       if (e.keyCode == 27){                                        
           document.getElementById('lblcustrequired').style.display         ='none';
       
           document.getElementById('transactionlistbox').style.display      ='none';

           document.getElementById('labelranslist').style.display           ='none';
           document.getElementById('labeltransactdate').style.display       ='none';
           document.getElementById('labeltransactnum').style.display        ='none';
           document.getElementById('labelinvoicenum').style.display         ='none';
           document.getElementById('labelservice').style.display            ='none';
           document.getElementById('labelservtype').style.display           ='none';
           document.getElementById('labelwarstatus').style.display          ='none';
           document.getElementById('labelmainschedule').style.display       ='none';
           document.getElementById('labelmainduedate').style.display        ='none';
           document.getElementById('labelsearchtransactnum1').style.display ='none';
           document.getElementById('labelsearchtransactnum2').style.display ='none';
           document.getElementById('lblcomp').style.display                 ="none";
           document.getElementById('lbltelephone').style.display            ="none";

           document.getElementById('lblinvoicenum').style.display           ='inherit';
           document.getElementById('txtinvoicenum').style.display           ='inherit';
           document.getElementById('lbltransacnum').style.display           ='inherit';
           document.getElementById('txttransacnum').style.display           ='inherit';
           document.getElementById('lbltrandate').style.display             ='inherit';
           document.getElementById('txttrandate').style.display             ='inherit';
           document.getElementById('lblservice').style.display              ='inherit';
           document.getElementById('cmbservice').style.display              ='inherit';
           document.getElementById('lbltypeofserv').style.display           ='inherit';
           document.getElementById('cmbtypeofserve').style.display          ='inherit';
           document.getElementById('lblwarstat').style.display              ='inherit';
           document.getElementById('cmbwarstat').style.display              ='inherit';
           document.getElementById('lblwarexpire').style.display            ='inherit';
           document.getElementById('txtwarexpire').style.display            ='inherit';
           document.getElementById('lblmainsched').style.display            ='inherit';
           document.getElementById('mainscheddropdown').style.display       ='inherit';
           document.getElementById('lblmaindue').style.display              ='inherit';
           document.getElementById('txtmaindue').style.display              ='inherit';
           document.getElementById('lblsmsmess').style.display              ='inherit';
           document.getElementById('txtsmsmess').style.display              ='inherit';
           document.getElementById('lblservde').style.display               ='inherit';
           document.getElementById('txtservde').style.display               ='inherit';
           document.getElementById('transadd').style.display                ='inherit';
           document.getElementById('transedit').style.display               ='inherit';
           document.getElementById('transdelete').style.display             ='inherit';
                              
           document.getElementById('lbltransactionlib').style.display       ='inherit';
           document.getElementById('lbleditcustid').style.display           = 'none';                               
           document.getElementById('lblname').style.display                 = 'none';                              
           document.getElementById('lblfirst').style.display                ='none';
           document.getElementById('lblsearch').style.display               ='none';
           document.getElementById('customertype').style.display            ='none';
           document.getElementById('txtsearch').style.display               ='none';                                                          
                             
           document.getElementById('Listedit').style.display                ='none';                             
                               
           document.getElementById('lblcarinfo').style.display              ='none';
           document.getElementById('labelplatenum').style.display           ='none';
           document.getElementById('labelmake').style.display               ='none';
           document.getElementById('labelmodel').style.display              ='none';

           document.getElementById('lblplatesearch').style.display          ='none'
           document.getElementById('txtsearchplatenum').style.display       ='none'
           document.getElementById('lblsearch').style.display               ='none'
                               
           document.getElementById('labelregnum').style.display             ='none';
           document.getElementById('labelcolor').style.display              ='none';
           document.getElementById('labelchasisnum').style.display          ='none';

           document.getElementById('lblsearchviewplatenum').style.display   ='none';
           document.getElementById('txtserchviewplatenum').style.display    ='none';                               

           document.getElementById('lblcarrefernces').style.display         ='inherit';
           document.getElementById('carrefdropdownlist').style.display      ='inherit';
           document.getElementById('Label2').style.display                  ='inherit';                              
                               
           if (document.getElementById('txtrfid')['value'] != "" && document.getElementById('txtidnumber')['value'] != "") {
               document.getElementById('confirmdiv').style.display = 'none';
           }

           if (document.getElementById('txtplatenumber')['value'] != "" && document.getElementById('txtenginenum')['value'] != "") {
               document.getElementById('divcar').style.display = 'none';
           }

           if (document.getElementById('txttransacnum')['value'] == "") {
               document.getElementById('divtransact').style.display = 'none';
           }                              

               vtranslistcnt = 0;

               one();

           function one() {                                  
               document.getElementById('lbledit').style.display = 'none';                                   
           }

               document.getElementById('skipload')['value'] = "";
               vtranslistcnt = 0;

           if (document.getElementById('txtrfid')['value'] == "") {
               document.getElementById('carrefdropdownlist')['value'] = "";
           }                                                              
       }
       if (e.keyCode == 16){
           document.getElementById('txtsearch').focus();
           document.getElementById('txtsearchplatenum').focus();
           document.getElementById('txtserchviewplatenum').focus();
       }

});                      
                    
    $(document).keydown(function (event)
    {
        if (event.keyCode==27)
        {
            document.getElementById('lbleditcustid').style.display          = 'none';
            document.getElementById('lblname').style.display                = 'none';
            document.getElementById('lblfirst').style.display               = 'none';
            document.getElementById('ListBoxview').style.display            = 'none';                               
            document.getElementById('lblcarinfo').style.display             = 'none';
            document.getElementById('labelplatenum').style.display          = 'none';
            document.getElementById('labelmake').style.display              = 'none';
            document.getElementById('labelmodel').style.display             = 'none';
            document.getElementById('lblplatesearch').style.display         = 'none';
            document.getElementById('txtsearchplatenum').style.display      = 'none';                                
            document.getElementById('lblsearch').style.display              = 'none';                                                            
            document.getElementById('resultlist').style.display             = 'none';                               
            document.getElementById('labelregnum').style.display            = 'none';
            document.getElementById('labelcolor').style.display             = 'none';
            document.getElementById('labelchasisnum').style.display         = 'none';
            document.getElementById('lblsearchviewplatenum').style.display  = 'none';
            document.getElementById('txtserchviewplatenum').style.display   = 'none';                                

            document.getElementById('Label2').style.display                 = 'inherit';
            document.getElementById('skipload')['value']                    = '';                                                      
        }
    });                             
            
    $(document).keydown(function (evt)
    {
        if (evt.keyCode==27)
        {
            document.getElementById('lbleditcustid').style.display          ='none';
            document.getElementById('lblname').style.display                ='none';
            document.getElementById('lblfirst').style.display               ='none';
            document.getElementById('ListBoxview').style.display            ='none';                              

            document.getElementById('lblsearch').style.display              ='none';
            document.getElementById('customertype').style.display           ='none';
            document.getElementById('txtsearch').style.display              ='none';
                                
            document.getElementById('labelregnum').style.display            ='none';
            document.getElementById('labelcolor').style.display             ='none';
            document.getElementById('labelchasisnum').style.display         ='none';

            document.getElementById('lblsearchviewplatenum').style.display  ='none';
            document.getElementById('txtserchviewplatenum').style.display   ='none';

            document.getElementById('lblcarinfo').style.display             ='none';
            document.getElementById('labelplatenum').style.display          ='none';
            document.getElementById('labelmake').style.display              ='none';
            document.getElementById('labelmodel').style.display             ='none';

            document.getElementById('lbledit').style.display                ='none';
            document.getElementById('Label2').style.display                 ='inherit';

            document.getElementById('skipload')['value'] = "";
            vtranslistcnt = 0;
        }
    });
///////  this is for escape ///////////