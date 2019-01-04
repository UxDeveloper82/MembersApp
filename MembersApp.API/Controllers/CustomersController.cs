using System.Linq;
using MembersApp.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace MembersApp.API.Controllers 
{
    [Route ("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase 
    {
        private readonly DataContext _context;
        public CustomersController (DataContext context) 
        {
            _context = context;

        }

         // GET api/customers
        [HttpGet]
        public IActionResult GetCustomers() 
        {
           var customers = _context.Customers.ToList();

           return Ok(customers);
        }

         // GET api/values/id
        [HttpGet("{id}")]

        public IActionResult GetCustomer(int id) 
        {
            var customer = _context.Customers.FirstOrDefault(c =>c.Id == id);
            return Ok(customer);
        }
    }
}