using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace UiRouterDemoApp.Controllers
{
    public class CarApiController : ApiController
    {
        #region Methods

        public async Task<IHttpActionResult> Get()
        {
            string[] cars =
            {
                "Alfa Romeo - Spider",
                "Maserati - Quattroporte",
                "Ferrari - F12berlinetta",
                "Studebaker - Avanti",
                "Lotus - Elise"
            };

            return Ok(cars);
        }

        #endregion Methods
    }
}
