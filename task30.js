"use strict";
// Task 30 greeting msg to admin and other 
let users = ["Admin", "Nasir", "Munazzah", "Tehmina", "Ammar"];
for (let user of users)
    if (user === "Admin") {
        console.log("Hello Admin,would you to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
