#!/usr/bin/env node
const inquirer = require("inquirer");
// const yargs = require("yargs");

// const { argv } = yargs(process.argv);

const printFiveNames = async name => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await res.json();
  const moves = pokemon.moves.map(({ move }) => move.name);

  console.log(moves.slice(0, 5));
};

const prompt = inquirer.createPromptModule();
prompt({
  type: "input",
  name: "pokemon",
  message: "Enter pokemon name",
}).then(answers => answers.pokemon);

printFiveNames(argv.pokemon);
