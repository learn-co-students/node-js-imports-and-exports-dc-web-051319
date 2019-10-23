module.exports = function getUseArguments() {
  const userArgs = process.argv.slice(2);

  if (userArgs.length > 1) {
    console.warn(`Warning: you provided too many arguments.`);
  }

  return userArgs[0];
};