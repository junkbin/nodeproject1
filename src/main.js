import { project, price, ref, hello } from "./app.config.js";
import { sum } from "./calculator.js";

function main() {
  console.log(project);
  console.log(price);
  console.log(ref);

  hello();

  let output = sum(1, 1);
  console.log(output);
}

main();
