using Marelen.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Marelen.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Sluzby()
        {
            return View();
        }

        public IActionResult Cenik()
        {
            return View();
        }

        public IActionResult Kontakt()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

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


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
