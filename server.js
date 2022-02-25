const express = require("express");
const socket = require("socket.io");
const app = express();


const server = app.listen(3000 , ()=>{
  console.log("listening to requests on port 3000");
})

app.use(express.static("public"));

const io = socket(server);


io.on("connection" , (socket)=>{
  console.log("made connection using id "+socket.id);

  socket.on("chat" , (data)=>{
    io.sockets.emit("chat" , data);
  })

})

