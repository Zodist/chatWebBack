const Message = require('./models/message');
const SocketIO = require("socket.io");
var session = require('express-session');
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

module.exports = (server, sessionMiddleWare) => {

    var io = SocketIO(server, {
        pingTimeout: 1000,
    });

    function broadCastToRoom(roomName) {
        const date = new Date();
        const time = date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
        var msg = {
            from: {
                name: 'SYSTEM',
            },
            msg: ['SYSTEM MESSAGE'],
            time: time,
            roomName: roomName,
        };
        io.emit('chat', msg);
    }

    io.use(function (socket, next) {
        sessionMiddleWare(socket.request, socket.request.res, next);
    });

    // socket io connect
    io.on('connection', function (socket) {
        const req = socket.request;
        const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

        //아래 두줄로 passport의 req.user의 데이터에 접근한다.
        var session = socket.request.session.passport;
        var user = (typeof session !== 'undefined') ? (session.user) : "";

        //사용자 명과 메시지를 같이 반환한다.
        socket.on('client message', function (data) {
            io.emit('server message', { message: data.message, displayname: user.displayname });
        });

        console.log(`✔ ${ip} 클라이언트 접속, socket.id : ${socket.id}, req.ip : ${req.ip}`);
        socket.leave(socket.id);

        socket.on('disconnect', () => {
            console.log(`${ip} 클라이언트 접속 해제. socket.id : ${socket.id}`);
        });

        // ========== Custom Handler ==========

        // 클라이언트로부터의 메시지가 수신되면
        socket.on('chat', function (data) {
            console.log(`${user} in ${data.roomName} : ${data.content}`);

            const date = moment().toDate();
            const time = date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
            var msg = {
                sender: user,
                content: [data.content],
                time: time,
                roomName: data.roomName,
            };
            /*
            Message.create(msg)
                .then()
                .catch(err => console.log(err));
            */
            // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
            //socket.broadcast.emit('chat', msg);
            io.sockets.in(data.roomName).emit('chat', msg);
            // socket.broadcast.to(data.roomName).emit('chat', msg);
        });

        socket.on('type', () => {
            socket.broadcast.emit('otherTyping')
        });

        // room 만들기
        // room 입장
        socket.on('join', function (data) {
            socket.join(data.roomName);

            process.nextTick(() => {
                // console.log('rooms', io.sockets.adapter.rooms);
                // console.log('joinedRooms', socket.rooms);

                // 현재 Socket 이 접속한 방 목록
                var joinedRomms = [];
                var allJoinedRooms = Object.keys(socket.rooms);
                allJoinedRooms.forEach(element => {
                    joinedRomms.push({
                        roomName: element,
                        userCnt: Object.keys(io.sockets.adapter.rooms[element].sockets).length,
                    });
                    socket.broadcast.to(element).emit("updateUserCntInRoom", {
                        roomName: element,
                        userCnt: Object.keys(io.sockets.adapter.rooms[element].sockets).length,
                    })
                });

                // 현재 Socket 이 접속하지 않은 방 목록
                var notJoinedRooms = [];
                var allRooms = Object.keys(io.sockets.adapter.rooms);
                var notJoinedRoomsRAW = allRooms.filter(val => !allJoinedRooms.includes(val));
                notJoinedRoomsRAW.forEach(element => {
                    notJoinedRooms.push({
                        roomName: element,
                        userCnt: Object.keys(io.sockets.adapter.rooms[element].sockets).length,
                    });
                });

                socket.emit('joinedRooms', joinedRomms);
                // socket.emit('availableRooms', notJoinedRooms);
                // broadCastToRoom(data.roomName);
            });
        });

        // 입장 가능 room 조회
        socket.on('getAvailableRoom', function (data) {
            // console.log('rooms', io.sockets.adapter.rooms);
            // console.log('joinedRooms', socket.rooms);

            // 현재 Socket 이 접속한 방 목록
            var joinedRomms = [];
            var allJoinedRooms = Object.keys(socket.rooms);
            allJoinedRooms.forEach(element => {
                joinedRomms.push({
                    roomName: element,
                    userCnt: Object.keys(io.sockets.adapter.rooms[element].sockets).length,
                })
            });

            // 현재 Socket 이 접속하지 않은 방 목록
            var notJoinedRooms = [];
            var allRooms = Object.keys(io.sockets.adapter.rooms);
            var notJoinedRoomsRAW = allRooms.filter(val => !allJoinedRooms.includes(val));
            notJoinedRoomsRAW.forEach(element => {
                notJoinedRooms.push({
                    roomName: element,
                    userCnt: Object.keys(io.sockets.adapter.rooms[element].sockets).length,
                })
            });

            // socket.emit('joinedRooms', joinedRomms);
            socket.emit('availableRooms', notJoinedRooms);
        });
    });
};