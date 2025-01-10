// server.js
const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

let auth;

fs.readFile(CREDENTIALS_PATH, (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    authorize(JSON.parse(content), () => {
        console.log('Google Sheets API authorized.');
    });
});

function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        auth = oAuth2Client;
        callback();
    });
}

function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
}

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = 'YOUR_SPREADSHEET_ID';
    const range = 'Sheet1!A:C';

    const values = [[name, email, message]];
    const resource = { values };

    sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        resource,
    }, (err, result) => {
        if (err) {
            console.error('Error appending data to Google Sheets:', err);
            res.status(500).send('Error appending data to Google Sheets');
        } else {
            console.log(`${result.data.updates.updatedCells} cells appended.`);
            res.status(200).send('Form submitted successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});