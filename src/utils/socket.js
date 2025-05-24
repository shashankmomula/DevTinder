const socket = require("socket.io");
const crypto = require("crypto");

const getSecretRoomId = (fromUserId,targetUserId) =>{
  return crypto.createHash("sha256").update(fromUserId + targetUserId).digest("hex");
}
const initializeSocket = (server)=>{
const io = socket(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  
    socket.on("joinChat",({firstName,fromUserId,targetUserId})=>{

        const roomId = getSecretRoomId(fromUserId,targetUserId);
        console.log(firstName + " Joined the room with " + roomId);
        socket.join(roomId);


    });
    socket.on("sendMessage",({fromUserId,targetUserId,text,firstName})=>{

      

        const roomId = [fromUserId,targetUserId].sort().join("_");

        console.log(firstName + " " + text);
        io.to(roomId).emit("messageRecieved",{text,firstName});

    });
    socket.on("disconnect",()=>{

    });

})
}

module.exports={initializeSocket};



