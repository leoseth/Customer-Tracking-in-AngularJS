using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace cbv_webapi_angular
{
    public class carrecords
    {
        public string rfid_code { get; set; }
        public string custnum   { get; set; }
        public string platenum  { get; set; }
        public string make      { get; set; }
        public string model     { get; set; }
        public string regnum    { get; set; }
        public string regdate   { get; set; }
        public string color     { get; set; }
        public string chasisnum { get; set; }
        public string enginenum { get; set; }
        public string delrec    { get; set; }
    }
}