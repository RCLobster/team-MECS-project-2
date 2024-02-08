# Project Name
## Description
This project aims to provide users with a platform to manage their music library through adding songs to a database, creating playlists, and accessing them later. Users can log in to the site, view their profile displaying created playlists, add songs to the database, create playlists, and manage them.
### User Story:
As a user, I want to be able to add songs to the database, create playlists using that database, and add them to my profile to access them later.
### Acceptance Criteria:
- **Login:**
  - When I login to the site, I can see my profile which displays any playlists I have created.
- **View Playlist:**
  - When I click on a playlist, I can see all the songs on that playlist.
- **Add Song:**
  - When I click Add Song, I am prompted with a form to fill out.
  - When I click the Submit Form button, that song is added to the Song database.
- **Create Playlist:**
  - When I click Make Playlist, I am given a list of Songs from the song database to add.
  - When I click on a song, it is added into the current Playlist.
  - When I click Save Playlist, it is updated to the Playlist database and saved to the User’s profile.
- **View All Songs:**
  - When I click on See All Songs, I can scroll through a list of all songs in the database and see all associated data.
- **View All Playlists:**
  - When I click on See All Playlists, I can scroll through a list of all playlists in the database.
## Models
### Song
- **Id**
- **Title**
- **Artist**
- **Album**
- **Album Cover**
### User
- **Id**
- **Username**
- **Email**
- **Password**
### Playlist
- **Id**
- **Name**
- **User_id (references user.id)**
- **Song_id (references song.id)**
## Home Routes
- **/homepage (Home Route)**
  - Display homepage.
- **/login (API/Users Route)**
  - Allow login or signup.
- **/profile (Home Route)**
  - Show username and all playlists associated (GET).
- **/songs (API/Songs Route)**
  - Show all songs in the database (GET).
- **/playlists (API/Playlists Route)**
  - Show all playlists in the database (GET).
- **/playlists/songs (API Route)**
  - Show all songs inside a selected playlist (GET).
- **/upload/song (API/Upload Route)**
  - Display form to upload song.
- **/upload/playlist (API/Upload Route)**
  - Display form to upload playlist.
## API Route
- **api/songs**
  - POST: Add a song.
- **api/playlists**
  - POST: Create a playlist.
## Getting Started
To get started with the project, follow these steps:
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.
4. Access the application via the provided routes.
## Technologies Used
- Node.js
- Express.js
- mySQL, sequelize ORM
- HTML/CSS/JavaScript (Frontend)
- Cloudinary
## Contributors
- Christopher Carter (https://github.com/3123MtOlympus)
- Ethan Stone (https://github.com/RCLobster)
- Marcos Camacena (https://github.com/MarcosCM1)
- Sebastian Skowron (https://github.com/sebjustseb)
## License
This project is licensed under the [MIT License](LICENSE).
GitHubGitHub
Yourusername - Overview
GitHub is where Yourusername builds software.