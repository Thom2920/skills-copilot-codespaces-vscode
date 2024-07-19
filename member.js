function skillsMember() {
    // Create a new member object
    var member = new Member();

    // Set the member's skills
    member.skills = ['JavaScript', 'HTML', 'CSS'];

    // Get the member's skills
    var skills = member.getSkills();

    // Output the member's skills
    console.log(skills);
}