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
    public class carController : ApiController
    {
        SqlConnection consql = new SqlConnection(@"Server=SAMSUNGLEO\SQLEXPRESS;Database=AUTOPARTS;Integrated Security='true' ");

        [HttpPost]
        public string save(carrecords car)
        {
            consql.Open();

            DataTable      cardata = new DataTable();
            SqlDataAdapter cardataadapter = new SqlDataAdapter("select * from car where platenum='"+ car.platenum.Trim() +"'",consql);
            cardataadapter.Fill(cardata);

            if (cardata.Rows.Count > 0)
            {
                DataTable cardata2 = new DataTable();
                SqlDataAdapter caradataadapter2 = new SqlDataAdapter("delete from car where platenum'" + car.platenum.Trim() + "'", consql);
                caradataadapter2.Fill(cardata2);
                caradataadapter2.Update(cardata2);

                SqlCommand cmd = new SqlCommand("insert into car values('" + car.rfid_code + "','" + car.custnum + "','" + car.platenum + "','" + car.make + "','" + car.model + "', '" + car.regnum + "', '" + car.regdate + "', '" + car.color + "','" + car.chasisnum + "', '" + car.enginenum + "',null)", consql);

                if (cmd.ExecuteNonQuery() == 1)
                {
                    return car.platenum;
                }
                else
                {
                    return car.platenum;
                }
            }
            else {

                SqlCommand cmd = new SqlCommand("insert into car values('" + car.rfid_code + "','" + car.custnum + "','" + car.platenum + "','" + car.make + "','" + car.model + "', '" + car.regnum + "', '" + car.regdate + "', '" + car.color + "','" + car.chasisnum + "', '" + car.enginenum + "',null)", consql);

                if (cmd.ExecuteNonQuery() == 1)
                {
                    return car.platenum;
                }
                else
                {
                    return car.platenum;
                }
            }
                    consql.Close();
        }

        //[HttpGet]
        [HttpPost]
        public IEnumerable<carrecords> retrieve(carrecords rfidcode)
        {
            consql.Open();

            List<carrecords> listcarrecords = new List<carrecords>();
            string query = "";
            if (rfidcode.rfid_code != "")
            {
                query = "select * from car where rfid_code='"+rfidcode.rfid_code.Trim()+"' order by platenum asc"; 
            }
            else {
                query = "select * from car order by platenum asc";
            }

            SqlCommand cmd = new SqlCommand(query, consql);
            SqlDataReader cardatareader = cmd.ExecuteReader();

            while (cardatareader.Read()) {
                  carrecords car = new carrecords();
                  car.rfid_code  = cardatareader["rfid_code"].ToString();
                  car.custnum    = cardatareader["custnum"].ToString();
                  car.platenum   = cardatareader["platenum"].ToString();
                  car.make       = cardatareader["make"].ToString();
                  car.model      = cardatareader["model"].ToString();
                  car.regnum     = cardatareader["regnum"].ToString();
                  car.regdate    = cardatareader["regdate"].ToString();
                  car.color      = cardatareader["color"].ToString();
                  car.chasisnum  = cardatareader["chasisnum"].ToString();
                  car.enginenum  = cardatareader["enginenum"].ToString();
                  listcarrecords.Add(car);
            }
            return listcarrecords;
        }

        [HttpDelete]
        public string delete(carrecords carplate) { 
                  consql.Open();
                
                  DataTable datatable2 = new DataTable();
                  SqlDataAdapter dataadapter2 = new SqlDataAdapter("delete from car where platenum ='"+ carplate.platenum.Trim() +"' ",consql);
                  dataadapter2.Fill(datatable2);
                  dataadapter2.Update(datatable2);

                  return carplate.platenum;
        }
    }

}
