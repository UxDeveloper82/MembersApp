using System.Threading.Tasks;
using MembersApp.API.Models;

namespace MembersApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
           
         Task<User> Login(string username, string password);

         Task<bool> UserExists(string username);  
    }
}