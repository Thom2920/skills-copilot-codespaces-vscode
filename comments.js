// Create web server
const http = require('http');
const url = require('url');

// Create a new member object
var member = new Member();

// Set the member's skills
member.skills = ['JavaScript', 'HTML', 'CSS'];

// Get the member's skills
var skills = member.getSkills();

// Output the member's skills
console.log(skills);

http.createServer(function (req, res) {
    // Get the query string
    var query = url.parse(req.url, true).query;
    // Get the name from the query string
    var name = query.name;
    // Get the member's name
    var memberName = member.getName();

    // Output the member's name
    console.log(memberName);

    // Write the response
    res.write('Hello ' + name + ', my name is ' + memberName);
    res.end();
}).listen(8080);
