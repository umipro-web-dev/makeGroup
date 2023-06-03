import * as fs from "fs";

const date = new Date();
const dateString = date.toLocaleDateString();
const fullString = `${dateString} ${date.getHours()}:${date.getMinutes()}`;

fs.writeFileSync("./public/lastUpdatedDate.txt", fullString, "utf-8");