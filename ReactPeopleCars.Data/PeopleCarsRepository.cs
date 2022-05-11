using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactPeopleCars.Data
{
    public class PeopleCarsRepository
    {

        private readonly string _connectionString;

        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddPerson(Person person)
        {
            using var context = new PeopleCarDataContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }
        public void AddCar(Car car)
        {
            using var context = new PeopleCarDataContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }
        public List<Person> GetAll()
        {
            using var context = new PeopleCarDataContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
        public List<Car> GetCarForPerson(int id)
        {
            using var context = new PeopleCarDataContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == id).ToList();
            
        }
        public void Delete(int id)
        {
            using var context = new PeopleCarDataContext(_connectionString);
            var carsToDelete = context.Cars.Where(c => c.PersonId == id);
            context.Cars.RemoveRange(carsToDelete);
            context.SaveChanges();
        }
        public Person GetPersonById(int id)
        {
            using var context = new PeopleCarDataContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }
    }
}

