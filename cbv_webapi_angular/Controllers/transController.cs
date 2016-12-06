using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Web.Services;
using System.Globalization;
using System.Text;
using System.Net;
using System.IO;
using System.Data;
using System.Windows.Forms;
using System.Collections.Generic;
using System.Web.Script.Serialization;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace cbv_webapi_angular.Controllers
{
    public class transController : ApiController
    {
        SqlConnection consql = new SqlConnection(@"Server=SAMSUNGLEO\SQLEXPRESS;Database=AUTOPARTS;Integrated Security='true' ");

        [HttpPost]
        public string savetrans(transactionrecords trans) {
            consql.Open();            

            DataTable      transdata        = new DataTable();
            SqlDataAdapter transdataadapter = new SqlDataAdapter("select * from transactions where ltrim(invoice_num)='"+trans.invoice_num.Trim()+"'",consql);
            transdataadapter.Fill(transdata);

            if (transdata.Rows.Count > 0){
                    DataTable      transdata2        = new DataTable();
                    SqlDataAdapter transdataadapter2 = new SqlDataAdapter("delete from transactions where ltrim(invoice_num)='"+trans.invoice_num.Trim()+"'", consql);
                    transdataadapter2.Fill(transdata2);
                    transdataadapter2.Update(transdata2);

                    SqlCommand cmd = new SqlCommand("insert into transactions values('"+ trans.rfid_code +"', '"+ trans.custnum +"',  '"+ trans.platenum +"', '"+ trans.invoice_num +"', '"+ trans.transact_num +"', '"+ trans.transact_date +"', '"+trans.service+"', '"+trans.type_of_service+"', '"+trans.warstatus+"', '"+trans.warexpiration+"', '"+trans.main_schedule+"', '"+trans.main_duedate+"', '"+trans.smsmess+"', '"+trans.service_details+"', '"+trans.mobile_num+"', '"+trans.mssgsent+"', '"+trans.idnum+"', '"+trans.lastname+"', '"+trans.firstname+"', '"+trans.address+"', null)", consql);

                    if (cmd.ExecuteNonQuery() == 1){
                        return trans.invoice_num;
                    }
                    else{
                        return trans.invoice_num;
                    }
            }
            else {
                   SqlCommand cmd = new SqlCommand("insert into transactions values('"+trans.rfid_code+"', '"+trans.custnum+"',  '"+trans.platenum+"', '"+trans.invoice_num+"', '"+trans.transact_num+"', '"+trans.transact_date+"', '"+trans.service+"', '"+trans.type_of_service+"', '"+trans.warstatus+"', '"+trans.warexpiration+"', '"+trans.main_schedule+"', '"+trans.main_duedate+"', '"+trans.smsmess+"', '"+trans.service_details+"', '"+trans.mobile_num+"', '"+trans.mssgsent+"', '"+trans.idnum+"', '"+trans.lastname+"', '"+trans.firstname+"', '"+trans.address+"', null)", consql);

                    if (cmd.ExecuteNonQuery()==1){
                        return trans.invoice_num;
                    }else
                    if (cmd.ExecuteNonQuery()==1){
                        return trans.invoice_num;
                    }
                 }
                     return trans.invoice_num;                
        }

        [HttpGet]
        public IEnumerable<transactionrecords> autogenerate(){
            consql.Open();

            DataTable transdtable = new DataTable();
            SqlDataAdapter transdataadapter = new SqlDataAdapter("select * from transactions where delrec is null",consql);
            transdataadapter.Fill(transdtable);

            List<transactionrecords> invoiceid = new List<transactionrecords>();

            if(transdtable.Rows.Count>0){
                string selr = "";
                SqlCommand cmd = new SqlCommand("select top 1 * from transactions where delrec is null order by transact_num DESC", consql);
                SqlDataReader transdatareader = cmd.ExecuteReader();

                while (transdatareader.Read()){
                    transactionrecords invid = new transactionrecords();

                    selr = transdatareader["transact_num"].ToString().Remove(0, 4);
                    long transautogen = Convert.ToInt64(selr);
                    transautogen = transautogen + 1 ;

                    invid.transact_num = transautogen.ToString();
                    invoiceid.Add(invid);
                }                 
            } else
            {
            }
            return invoiceid;
        }

        [HttpPost]
        public IEnumerable<smsrecords> sms(smsrecords vservice){          

            consql.Open();           

            List<smsrecords> smslistrec = new List<smsrecords>();

            string selrec = "";
            SqlCommand cmd = new SqlCommand("select * from sms where ltrim(service)='"+ vservice.service.Trim()  +"'",consql);
            SqlDataReader smsdatareader = cmd.ExecuteReader();                      
          
            //while (smsdatareader.Read()){
            while (smsdatareader.Read()){
                  smsrecords smsid = new smsrecords();
                  selrec = smsdatareader["smsmess"].ToString();
                  smsid.smsmess = selrec; 

                  smslistrec.Add(smsid);

                  return smslistrec;            
            }
            return smslistrec;
        }

        [HttpGet]
        public IEnumerable<transactionrecords> retrieve(){
            consql.Open();

            List<transactionrecords> translistrec = new List<transactionrecords>();

            string selecttransrec = "";
            SqlCommand cmd = new SqlCommand("select * from transactions", consql);
            SqlDataReader transreader = cmd.ExecuteReader();  

            while(transreader.Read()){
                  transactionrecords transrec = new transactionrecords();

                  transrec.rfid_code       = transreader["rfid_code"].ToString();
                  transrec.custnum         = transreader["custnum"].ToString();
                  transrec.platenum        = transreader["platenum"].ToString();
                  transrec.invoice_num     = transreader["invoice_num"].ToString();
                  transrec.transact_num    = transreader["transact_num"].ToString();
                  transrec.transact_date   = transreader["transact_date"].ToString();
                  transrec.service         = transreader["service"].ToString();
                  transrec.type_of_service = transreader["type_of_service"].ToString();
                  transrec.warstatus       = transreader["warstatus"].ToString();
                  transrec.warexpiration   = transreader["warexpiration"].ToString();
                  transrec.main_schedule   = transreader["main_schedule"].ToString();
                  transrec.main_duedate    = transreader["main_duedate"].ToString();
                  transrec.smsmess         = transreader["smsmess"].ToString();
                  transrec.service_details = transreader["service_details"].ToString();
                  transrec.mobile_num      = transreader["mobile_num"].ToString();
                  transrec.mssgsent        = transreader["mssgsent"].ToString();
                  
                  transrec.idnum           = transreader["idnum"].ToString();
                  transrec.lastname        = transreader["lastname"].ToString();
                  transrec.firstname       = transreader["firstname"].ToString();
                  transrec.address         = transreader["address"].ToString();
                  transrec.delrec          = transreader["delrec"].ToString();

                  translistrec.Add(transrec);      
            }

            return translistrec;
        }
    }
}
