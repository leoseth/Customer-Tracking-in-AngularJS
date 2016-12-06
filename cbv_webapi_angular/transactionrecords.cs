using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace cbv_webapi_angular
{
    public class transactionrecords
    {
        public string rfid_code       { get; set; }
        public string custnum         { get; set; }
        public string platenum        { get; set; }
        public string invoice_num     { get; set; }
        public string transact_num    { get; set; }
        public string transact_date   { get; set; }
        public string service         { get; set; }
        public string type_of_service { get; set; }
        public string warstatus       { get; set; }
        public string warexpiration   { get; set; }   
        public string main_schedule   { get; set; }
        public string main_duedate    { get; set; }
        public string smsmess         { get; set; }
        public string service_details { get; set; }
        public string mobile_num      { get; set; }
        public string mssgsent        { get; set; }
        public string idnum           { get; set; }
        public string lastname        { get; set; }
        public string firstname       { get; set; }
        public string address         { get; set; }
        public string delrec          { get; set; }
    }
}
        
   