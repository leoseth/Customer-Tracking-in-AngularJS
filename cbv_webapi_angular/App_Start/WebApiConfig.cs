using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace cbv_webapi_angular
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                //name: "DefaultApi",
                //routeTemplate: "{controller}/{action}/{id}",
                //defaults: new { id = RouteParameter.Optional }
                name: "DefaultApi",
                routeTemplate: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = RouteParameter.Optional }
            );
        }
    }
}

                