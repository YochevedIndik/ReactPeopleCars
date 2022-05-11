using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleCars.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactPeopleCars.Web.Models;


namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private string _connectionString;
        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("getall")]
        [HttpGet]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetAll();
        }
        [Route("addperson")]
        [HttpPost]
        public void AddPerson(Person person)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddPerson(person);
        }
        [Route("addcar")]
        [HttpPost]
        public void AddCar(Car c)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddCar(c);
        }
        [Route("getcars")]
        [HttpGet]
        public List<Car> GetCarsForPerson(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetCarForPerson(id);
        }
        [Route("deletecars")]
        [HttpPost]
        public void Delete(DeleteVm vm)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.Delete(vm.Id);
        }
        [Route("getperson")]
        [HttpGet]
        public Person GetPersonById(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetPersonById(id);
        }
    }
}
