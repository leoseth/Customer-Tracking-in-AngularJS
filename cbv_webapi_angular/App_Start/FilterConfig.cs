using System.Web;
using System.Web.Mvc;

namespace cbv_webapi_angular
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}