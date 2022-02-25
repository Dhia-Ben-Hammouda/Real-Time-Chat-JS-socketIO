const socket = io.connect("http://localhost:3000");



const input = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector(".output-box");


const user = window.prompt("enter username !");



btn.addEventListener("click" , ()=>{

  socket.emit("chat" , {
    msg:input.value,
    name:user
  })

  input.value = null;
})


socket.on("chat" , (data)=>{
  output.innerHTML += `<div>  
    <h3 style="color:royalblue;">${data.name}</h3>
    <p>${data.msg}</p>
  </div>`;
})



