const express = require("express");

const app = express();

// Если прийдет GET запрос на адрес /contacts, выполнить эту функцию
app.get("/contacts", (request, response)=> {
    // console.log(request.url);
    // console.log(request.method);
    // console.log(request.headers);
    response.send("<h2>Contacts page</h2>")
});

app.get("/contact", (request, response)=> {
    response.send("<h2>Contact page</h2>")
})

app.get("/", (request, response)=> {
    response.send("<h2>Home page</h2>")
})

app.listen(3000, ()=> console.log("Server running"));