function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({ userId: 1, name: "Admin" });
      } else {
        reject("Invalid credentails!!");
      }
    }, 1000);
  });
}

function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, role: "QA Engineer" });
    }, 1000);
  });
}

function loadDashboard(profile) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Dashbaord loaded for ${profile.role}`);
    }, 1000);
  });
}

async function runApp() {
  try {
    const user = await loginUser("admin", "1234");
    console.log("Login Success: ", user);

    const profile = await fetchUserProfile(user.userId);
    console.log("Profile Fetched: ", profile);

    const dashBoard = await loadDashboard(profile);
    console.log(dashBoard);
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

runApp();
