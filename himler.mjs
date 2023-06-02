import { execSync } from "child_process";

const stdout = execSync('figlet "You are foolish"')
console.log(stdout.toString())
