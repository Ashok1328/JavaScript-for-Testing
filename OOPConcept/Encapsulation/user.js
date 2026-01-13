class User 
{
  #password;

  constructor(username, password)
  {
    this.username = username;
    this.#password = password;
  }

  setPassword(newPassword)
  {
    if(newPassword.length<6)
    {
      console.log("Password is too short");
      return;
    }
    this.#password = newPassword;
  }

  checkPassword(pwd)
  {
    return this.#password == pwd;
  }
}

const user = new User("ashok12", "123456");
user.setPassword("abc");     // password it too short

user.setPassword("secure123");

console.log(user.checkPassword("secure123"));

// console.log(user.#password);
