// cli.js
const { program } = require('commander');

program
  .version('1.0.0')
  .option('-n, --name <type>', 'specify the name')
  .option('-a, --age <type>', 'specify the age');

  const options = program.opts();

  console.log(`Name: ${options.name}`);
  console.log(`Age: ${options.age}`);