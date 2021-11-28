#!/usr/bin/env node

const fs = require("fs");

const envFileName = process.argv[2];

function readFileContent(fileName) {
  if (!fileName) {
    console.error("[ERROR]: you need to provide the name of the env file as argument");
    return process.exit(1);
  }

  // TODO: add args to personalize envs dir and extension
  const filePath = process.cwd() + "/envs/" + fileName + ".json";
  
  try {
    const file = fs.readFileSync(filePath, "utf8");

    return JSON.parse(file);
  } catch(error) {
    if(error.code === 'ENOENT') {
      console.error("[ERROR]: " + filePath + " file not found, provide a valid env file name")
      return process.exit(1);
    }
    console.error('[ERROR]: could not parse json file, please provide a valid json env')
    return process.exit(1);
  }
}

function writeFileContent(fileContent) {
  try {
    fs.writeFileSync("./src/env.json", JSON.stringify(envFileContent, undefined, 2));
  } catch(error){
    console.error("[ERROR]: could not write src/env.json file, please verify src dir existence and permissions");
  }
}

const envFileContent = readFileContent(envFileName);
writeFileContent(envFileContent);
process.exit(0);
