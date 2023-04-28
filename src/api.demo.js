export async function getAllUsers() {
  try {
    let url = "https://jsonplaceholder.typicode.com/users";

    let response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
}
