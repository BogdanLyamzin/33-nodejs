const jwt = require("jsonwebtoken");

const SECRET_KEY = "2refaasdfhgsdg313fd";

const payload = {
    id: "61a52562a6476e7590d7d5f6"
}

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    // const result = jwt.verify(token, SECRET_KEY);
    // console.log(result);
    const result2 = jwt.verify(`${token}22`, SECRET_KEY);
} catch (error) {
    console.log(error.message);
}