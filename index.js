import bcrypt from "bcryptjs";

const run = async () => {
    const password = "pass123";
    const saltRounds = 10;

    //hash password
    const storedHash = await bcrypt.hash(password, saltRounds);
    console.log("Hash:", storedHash);

    //compare password
    const enteredPassword = "pass123";

    const result = await bcrypt.compare(enteredPassword, storedHash);

    if (result) {
        console.log("Password is correct");
    } else {
        console.log("wrong password");
    }
}

run();