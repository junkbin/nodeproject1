import axios from "axios";

// Put Everything in Main program
async function main() {
  try {
    let url = "https://jsonplaceholder.typicode.com/users";
    let response = await axios.get(url);
    console.log(response.data);
  } catch (err) {
    console.error(err.message);
  }
}

main();
