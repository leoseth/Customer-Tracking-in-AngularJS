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

namespace cbv_webapi_angular.Models
{
    public class customerController : ApiController
    {
        SqlConnection consql = new SqlConnection(@"Server=SAMSUNGLEO\SQLEXPRESS;Database=AUTOPARTS;Integrated Security='true' ");
        //SqlCommand cmd = new SqlCommand();
        [HttpGet]
        public IEnumerable<string> connect()
        {
            string[] values = { "connect" };

            consql.Open();

            return values;
        }        

        [HttpGet]        
        public IEnumerable<customecords> retrieve()
        {            
            consql.Open();

            List<customecords> listcustomer = new List<customecords>();

            SqlCommand cmd = new SqlCommand("select * from customer order by custnum asc", consql);
            SqlDataReader datareader = cmd.ExecuteReader();
            while (datareader.Read())
            {
                customecords customer = new customecords();
                customer.rfid_code = datareader["rfid_code"].ToString();
                customer.phone_num = datareader["phone_num"].ToString();       
                customer.address = datareader["address"].ToString();
                customer.birthday = datareader["birthday"].ToString();
                customer.birthplace = datareader["birthplace"].ToString();
                customer.compname = datareader["compname"].ToString();
                customer.custnum = datareader["custnum"].ToString();
                customer.custtype = datareader["custtype"].ToString();
                customer.email_add = datareader["email_add"].ToString();
                customer.firstname = datareader["firstname"].ToString();
                customer.idnum = datareader["idnum"].ToString();
                customer.idtype = datareader["idtype"].ToString();
                customer.lastname = datareader["lastname"].ToString();
                customer.middlename = datareader["middlename"].ToString();
                customer.mobile_num = datareader["mobile_num"].ToString();
                customer.nationality = datareader["nationality"].ToString();
                customer.phone_num = datareader["phone_num"].ToString();
                customer.space = ("").PadLeft(2, '\u00A0');
                listcustomer.Add(customer);
            }
            return listcustomer;           
        }        

        [HttpPost]        
        public string save(customecords cust)
        {                        
            consql.Open();

            DataTable dtable = new DataTable();
            SqlDataAdapter dadapter = new SqlDataAdapter("select * from customer where ltrim(rfid_code) = '"+ cust.rfid_code.Trim() +"' ", consql);
            dadapter.Fill(dtable);
                        
            if (dtable.Rows.Count > 0)
            {
                DataTable dtable2 = new DataTable();
                SqlDataAdapter dadapter2 = new SqlDataAdapter("delete from customer where ltrim(rfid_code) = '" + cust.rfid_code.Trim() + "' ", consql);
                dadapter2.Fill(dtable2);
                dadapter2.Update(dtable2);

                /// insert statement should be the same structure and fields order in the Database ///  
                SqlCommand cmd = new SqlCommand("insert into customer values('" + cust.rfid_code + "','" + cust.custnum + "','" + cust.custtype + "','" + cust.compname + "','" + cust.lastname + "','" + cust.firstname + "','" + cust.middlename + "','" + cust.address + "','" + cust.phone_num + "','" + cust.mobile_num + "','" + cust.email_add + "','" + cust.birthday + "','" + cust.birthplace + "','" + cust.nationality + "','" + cust.idtype + "','" + cust.idnum + "',null)", consql);                
                if (cmd.ExecuteNonQuery() == 1)
                {
                    return cust.rfid_code;
                }
                else {
                    return cust.rfid_code;
                }
            }
            else {  
                /// insert statement should be the same structure and fields order in the Database ///              
                SqlCommand cmd = new SqlCommand("insert into customer values('" + cust.rfid_code + "','" + cust.custnum + "','" + cust.custtype + "','" + cust.compname + "','" + cust.lastname + "','" + cust.firstname + "','" + cust.middlename + "','" + cust.address + "','" + cust.phone_num + "','" + cust.mobile_num + "','" + cust.email_add + "','" + cust.birthday + "','" + cust.birthplace + "','" + cust.nationality + "','" + cust.idtype + "','" + cust.idnum + "',null)", consql);
                if (cmd.ExecuteNonQuery() == 1)
                {
                    return cust.rfid_code;
                }
                else
                {
                    return cust.rfid_code;
                }
            }                       

            //consql.Close();
            //consql.Dispose();
        }

        [HttpPost]        
        public IEnumerable<customecords> searchrfid(customecords cust)
        {          
            string custfirst = string.Empty;
            string i = string.Empty;
            string varrfid = cust.rfid_code.Trim();                      

            consql.Open();

            List<customecords> listcustomer = new List<customecords>();

            SqlCommand cmd = new SqlCommand("select * from customer where ltrim(rfid_code)='" + varrfid + "' and delrec is null order by rfid_code", consql);
            SqlDataReader datareader = cmd.ExecuteReader();
            while (datareader.Read())
            {
                customecords custom = new customecords();               

                custom.rfid_code   = datareader["rfid_code"].ToString();
                custom.phone_num   = datareader["phone_num"].ToString();
                custom.address     = datareader["address"].ToString();
                custom.birthday    = datareader["birthday"].ToString();
                custom.birthplace  = datareader["birthplace"].ToString();
                custom.compname    = datareader["compname"].ToString();
                custom.custnum     = datareader["custnum"].ToString();
                custom.custtype    = datareader["custtype"].ToString();
                custom.email_add   = datareader["email_add"].ToString();
                custom.firstname   = datareader["firstname"].ToString();
                custom.idnum       = datareader["idnum"].ToString();
                custom.idtype      = datareader["idtype"].ToString();
                custom.lastname    = datareader["lastname"].ToString();
                custom.middlename  = datareader["middlename"].ToString();
                custom.mobile_num  = datareader["mobile_num"].ToString();
                custom.nationality = datareader["nationality"].ToString();
                custom.phone_num   = datareader["phone_num"].ToString();
 
                listcustomer.Add(custom);

                //cmd.Connection.Close();
                //cmd.Connection.Dispose();               
            }
            return listcustomer;              
        }

        [HttpPost]        
        public IEnumerable<customecords> autogenerate(customecords cust)
        {           
            consql.Open();

            DataTable dtable = new DataTable();
            SqlDataAdapter dadapter = new SqlDataAdapter("select * FROM customer where delrec is null", consql);
            dadapter.Fill(dtable);

            List<customecords> custid = new List<customecords>();

            if (dtable.Rows.Count > 0)
            {
                string selrecord = "";                
                SqlCommand cmd = new SqlCommand("select top 1 * FROM customer where delrec is null order by custnum DESC", consql);
                SqlDataReader datareader = cmd.ExecuteReader();

                while (datareader.Read()) {

                    customecords customerid = new customecords();  

                    selrecord = datareader["custnum"].ToString().Remove(0, 4);
                    Console.WriteLine(selrecord);
                    long nautogen2 = Convert.ToInt64(selrecord);
                    Console.WriteLine(nautogen2);
                    nautogen2 = nautogen2 + 1;
                    Console.WriteLine(nautogen2);

                    customerid.custnum = nautogen2.ToString();
                    custid.Add(customerid);                              
                }                                           
                
            }
            else
            {
             
            }
            return custid;
        }

        [HttpDelete]                         
        public string delete (customecords cust){

            consql.Open();

            DataTable dtable2 = new DataTable();
            SqlDataAdapter dadapter2 = new SqlDataAdapter("delete from customer where ltrim(custnum) = '" + cust.custnum.Trim() + "' ", consql);
            dadapter2.Fill(dtable2);
            dadapter2.Update(dtable2);
           
            return cust.custnum;
        }
    }
}
