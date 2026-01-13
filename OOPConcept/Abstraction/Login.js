class Login
{
  login(username, password)
  {
    this.#validateUser(username, password);
    console.log("Login Successful !!");
  }

  #validateUser()
  {
    // hidden validation logic
  }
}

const login = new Login();
login.login("Ashok", "1234");
