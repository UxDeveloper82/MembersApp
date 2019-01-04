namespace MembersApp.API.Models
{
    public class Customer
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public MembershipType MembershipType { get; set; }

         public byte MembershipTypeId { get; set; }
    }
}