let users = ["A1", "A2", "A3"];

function addUser(userName) {
  setTimeout(() => {
    users.push(userName);
  }, 200);
}

function getUsers() {
  setTimeout(() => {
    console.log(users);
  }, 100);
}

addUser("B1");

getUsers();
