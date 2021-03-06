import inquirer from 'inquirer';

export default async function (opts, message, ...args) {
  const answer = await inquirer.prompt([{
    type: 'rawlist',
    name: 'rawlist',
    message,
    choices: args.map(name => ({name})),
  }]);

  return args[answer.rawlist - 1];
};