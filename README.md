# webyog-innodb-plugin-check
**Problem Statement:**

A program in C/C++, Nodejs or Python that connects to a MySQL server and checks if the InnoDB plugin is enabled on it. If so, your program
should print the total number of disk writes by MySQL.

Step forward:

a.How should we run and test the project? 

Comment:This project is in Nodejs using Express framework.Please follow steps:

1. Install the NPM.
2. Install ExpressJS Framework and Mysql.
3. Once the installation completed,place the source in your drive for example c: drive
4  Run the command on command prompt:
    c:\>cd webyog
    c:\webyog>node app
5. Access the API on the browser,you will get the json response.

http://localhost:3000/webyog/

Output will be(example)
{
status: "0",
innoDBPluginEnabled: "Yes",
totalNumberOfDiskWrite: "14753"
}

Note: All the dependencies are already installed in source.(package.json). There is few extra dependency in the package.json which is not required.

b. What development tools did you do use to complete the project? 
Comment:  ExpressJS Framework,Sublime Text Editor,NPM

c. How did you test & debug the project? 
Comment: This project tested and debugged at my localhost,I basically use console for logging errors.

d. What other features can you think of that will enhance the program? 
Comment: It can be more dynamic.Instead hardcoding the values in request, we can expect from user input based on that we can show information.
for example
http://localhost:3000/webyog?Plugin='MyISAM'

