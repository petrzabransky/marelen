using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Marelen.Controllers
{
    public class SluzbyController : Controller
    {
        // Services - Clasic cosmetic

        public IActionResult Kosmetika()
        {
            return View();
        }

        public IActionResult Masaz()
        {
            return View();
        }

        public IActionResult Peeling()
        {
            return View();
        }

        public IActionResult Depilace()
        {
            return View();
        }

        // Services - Electro cosmetic

        public IActionResult Hyaluronic()
        {
            return View();
        }

        public IActionResult Elektrokosmetika()
        {
            return View();
        }

        public IActionResult Mikrodermabraze()
        {
            return View();
        }

        public IActionResult Elektrolifting()
        {
            return View();
        }

        public IActionResult Lasocare()
        {
            return View();
        }

        public IActionResult Spachtle()
        {
            return View();
        }

        public IActionResult Microneedling()
        {
            return View();
        }

        // Services - Other

        public IActionResult Darek()
        {
            return View();
        }
    }
}
