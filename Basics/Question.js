const response = {
  status: 200,
  data: [
    { id: 1, name: "Ashok", role: "admin", active: true },
    { id: 2, name: "", role: "user", active: true },
    { id: 3, name: "Sita", role: "user", active: false }
  ]
};

if(response.status!== 200)
{
  console.log("API failed")
}
else{
  console.log("Response status is 200")
}

const activeUser = response.data.filter(user=> user.active);
console.log(activeUser);

