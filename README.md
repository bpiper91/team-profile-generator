# Team Profile Generator

![An example of a generated HTML page](/sample/screenshot.JPG "Team profile listing with a manager, three engineers, and two interns")

## Description

The Team Profile Generator is a command line application that generates an HTML listing of employees in a development team so that the team manager will have quick access to email addresses and GitHub profiles). Each team consists of one manager and an undetermined number of engineers and interns.

## Installation / Usage

To run the app, you'll need to clone the repo to your machine and install Node.js. Then, you can run `npm install` to install the dependencies. Once everything is installed, run `node index` to initiate the app.

You'll be prompted for your team manager's information. You must enter information for each prompt. After each employee is added, you'll be prompted to add another employee (engineer or intern) or to finish and generate the output files. When you select 'finish', the application will write an index.html file to the dist folder. Use the generated HTML file and the style.css file to display your team information.

[You can view a walkthrough demonstration here.](https://drive.google.com/file/d/1hBNA3AwtCWrhhK5Ka-tSUNg9in-btluJ/view)

[The sample page generated in the walkthrough is visible here.](https://bpiper91.github.io/team-profile-generator/sample/)

## Testing

The application includes four test files for the class objects. If you haven't yet, you'll need to run `npm install` to install the dependencies (including Jest, which is used for testing), then run `npm run test` to initiate the tests.

## Contact

Brett Piper

- [GitHub](https://github.com/bpiper91)
- [Email](mailto:bpiper91@gmail.com)