using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace UiRouterDemoApp.Controllers
{
    public class MotorcycleApiController : ApiController
    {
        #region Methods

        public async Task<IHttpActionResult> Get()
        {
            string[] motorcycles =
            {
                "Ducati - Monster 821",
                "Norton - Commando",
                "Mission - RS",
                "Kawasaki - Ninja 250SL",
                "Triumph - Rocket III"
            };

            return Ok(motorcycles);
        }

        #endregion Methods
    }
}
