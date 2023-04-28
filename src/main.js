import { getAllUsers } from "./api.demo.js";

async function main() {
  let result = await getAllUsers();

  console.log(result);
}

main();
