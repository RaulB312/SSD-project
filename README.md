
# RT-Chats
**RT Chats** is a modern and user-friendly web chat application developed using
React and powered by ChatEngine. The name RT comes from the 2 people that build
this chat app: **R** comes from Raul Bărbosu and **T** comes from Timotei Bogoșel.
## Installation

Install RT-Chats with npm. You need to install node modules in the backend folder and in the frontend folder.
### Backend 

```bash
  cd .\backend\
  npm install
```
- express - is an http framework for running node servers
- cors - we can call the server anywhere else on the internet
- axios - we can make API calls to [chatengine.io](https://chatengine.io/)

### Frontend

```bash
  cd .\frontend\
  npm install
```
- react - we use useState to add state to functional components and useEffect to perform side effects in functional components
- axios - we make the API call so the user can actually authenticate
- react-dom renders components into the Document Object Model (DOM)
- react-chat-engine-pretty - will load the chat page
- react-particles, tsparticles and tsparticles-slim - load the particles in the background of the Authpage
## Features

- **User Authentication**: Easily login or sign up using traditional credentials, Facebook, or Google accounts.
- **Mail Notifications**: Stay informed with timely email notifications for new messages.
- **Versatile Messaging**: Send text, emojis, and files effortlessly, making conversations dynamic and expressive.
- **Group Chat**: Communicate with one or more users simultaneously, fostering collaboration and community.


## Technologies used

- **Frontend**: Developed using React, the frontend of the application offers a responsive and dynamic user interface.
- **Backend**: Leveraging the ChatEngine library, the backend manages real-time communication, ensuring efficient message delivery and updates.
## License

This project is licensed under the [MIT Licence](https://choosealicense.com/licenses/mit/)


## Acknowledgements

 - Loading screen inspiration from this [reddit post](https://www.reddit.com/r/badUIbattles/comments/e14v8i/just_another_loading_screen/) and the [source code here](https://github.com/agnor99/loadingScreen)

