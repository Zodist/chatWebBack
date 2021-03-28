
const SocketIO = require("socket.io");

module.exports = (server) => {

    var io = SocketIO(server, {
        pingTimeout: 1000,
    });

    // var connectCnt = 0;
    var rooms = [];
    // socket io connect
    io.on('connection', function (socket) {
        const req = socket.request;
        const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
        console.log(`✔ ${ip} 클라이언트 접속, socket.id : ${socket.id}, req.ip : ${req.ip}`);
        // connectCnt++;
        // io.emit('personCnt', connectCnt);
        io.emit('rooms', rooms);

        socket.on('disconnect', () => {
            console.log(`${ip} 클라이언트 접속 해제. socket.id : ${socket.id}`);
            // connectCnt--;
            // io.emit('personCnt', connectCnt);
        });

        // ========== Custom Handler ==========

        // 클라이언트로부터의 메시지가 수신되면
        socket.on('chat', function (data) {
            console.log(`${data.name} in ${data.roomName} : ${data.msg}`);

            const date = new Date();
            const time = date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
            var msg = {
                from: {
                    name: data.name,
                },
                msg: [data.msg],
                time: time,
                roomName: data.roomName,
            };

            // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
            //socket.broadcast.emit('chat', msg);
            socket.broadcast.to(data.roomName).emit('chat', msg);
        });

        socket.on('type', () => {
            socket.broadcast.emit('otherTyping')
        });

        // room 만들기
        socket.on('makeRoom', function(data) {
            socket.join(data.roomName);
            rooms.push({
                roomName: data.roomName,
                userCnt: 1,
            });
            // io.emit('rooms', io.sockets.adapter.rooms);
            // console.log('rooms', io.sockets.adapter.rooms);
            io.emit('rooms', rooms);
        });

        // room 입장
        socket.on('join', function(data) {
            var roomName = data.roomName
            socket.join(roomName);
            var idx = rooms.findIndex(element => {
                return element.roomName === roomName;
            });
            rooms[idx].userCnt = Object.keys(io.sockets.adapter.rooms[roomName].sockets).length;

            console.log('rooms', io.sockets.adapter.rooms[roomName].sockets);
            io.emit('rooms', rooms);
        });
    });
};