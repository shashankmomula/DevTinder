<<<<<<< HEAD
## authRouter

- POST /signup
- POST /login
- POST /logout

## profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## connectionRequestRouter

- POST /request/send/intrested/:userId
- POST /request/send/ignore/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets you the profiles of other users on platform

# Websockets

intro to websocket and socket.io
shift to http server from express passing express app to http server 
socket.js in utils and io.on
about socket.on() functions

frontend integration by creating socket.js in utils folder
useEffect hook in chat to connect when page renders
about optional chaining user?._id why user will be nulll for the first time
the emitting the events

backed code for handling the events

=======
## authRouter

- POST /signup
- POST /login
- POST /logout

## profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## connectionRequestRouter

- POST /request/send/intrested/:userId
- POST /request/send/ignore/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets you the profiles of other users on platform
>>>>>>> afe28b91efe077d6e038f131a6dc1695a2927a94
