using System.ComponentModel.DataAnnotations;

namespace MembersApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        public string Password { get; set; }
    }
}