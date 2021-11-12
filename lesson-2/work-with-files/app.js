const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOperation = async(filePath, action = "read", data = "") => {
    switch(action){
        case "read":
            const text = await fs.readFile(filePath, "utf-8");
            console.log(text);
            break;
        case "add":
            await fs.appendFile(filePath, data);
            break;
        case "replace":
            await fs.writeFile(filePath, data);
            break;
        default:
            console.log("Unknown action")
    }
}

// fileOperation("files/file.txt");
// fileOperation("files/file.txt", "add", "\nНе плюйся - никто не носит золота во рту");
fileOperation("files/file.txt", "replace", "Не плюйся - никто не носит золота во рту");

// fs.readFile("files/file.txt", "utf-8")
//     .then(data => {
//         console.log(data);
//         // const text = data.toString();
//         // console.log(text);
//     })
//     .catch(error => console.log(error.message))

