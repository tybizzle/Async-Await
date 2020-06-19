async function getUsers() {
  // Await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed when its resolved
  const data = await response.json();

  // Only proceed when second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));