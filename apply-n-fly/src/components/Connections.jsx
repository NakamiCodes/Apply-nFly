// import React, { useState } from 'react';
// import gapi from 'googleapis';

// const GOOGLE_SHEETS_API_ENDPOINT = 'https://sheets.googleapis.com/v4/spreadsheets/';

// function Connections() {
//   const [sheetsLink, setSheetsLink] = useState('');
//   const [gmailLink, setGmailLink] = useState('');

//   const handleSheetsLinkChange = (event) => {
//     setSheetsLink(event.target.value);
//   };

//   const handleGmailLinkChange = (event) => {
//     setGmailLink(event.target.value);
//   };

//   const makeGoogleSheetsAPICall = async () => {
//     // Load the Google Sheets API library
//     await gapi.client.load('sheets', 'v4');

//     // Create a new Google Sheets client object
//     const sheetsClient = new gapi.client.sheets.Spreadsheets();

//     // Make the API call
//     const response = await sheetsClient.spreadsheets.get({
//       spreadsheetId: sheetsLink,
//     });

//     // Handle the response
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     makeGoogleSheetsAPICall();
//   };

//   return (
//     <div>
//       <h1>Connections</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Google Sheets Link:
//           <input type="text" value={sheetsLink} onChange={handleSheetsLinkChange} />
//         </label>
//         <br />
//         <label>
//           Gmail Link:
//           <input type="text" value={gmailLink} onChange={handleGmailLinkChange} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Connections;
