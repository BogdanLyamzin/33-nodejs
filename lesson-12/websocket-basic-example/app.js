const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=> {
    clients.push(newClient)
    // console.log("Новое подключение с фронтенда")
    // setTimeout(()=> {
    //     newClient.send("Добро пожаловать на наш сервер!")
    // }, 3000)
    clients.forEach(client => {
        if(client !== newClient){
            client.send("К нам присоединился новый пользователь")
        }
    })
})


