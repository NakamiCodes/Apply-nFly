import React, { useState } from 'react';

function Connections() {
    const [sheetsLink, setSheetsLink] = useState('');
    const [gmailLink, setGmailLink] = useState('');

    const handleSheetsLinkChange = (event) => {
        setSheetsLink(event.target.value);
    };

    const handleGmailLinkChange = (event) => {
        setGmailLink(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Sheets link: ${sheetsLink}`);
        console.log(`Gmail link: ${gmailLink}`);
    };

    return (
        <div>
            <h1>Connections</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Google Sheets Link:
                    <input type="text" value={sheetsLink} onChange={handleSheetsLinkChange} />
                </label>
                <br />
                <label>
                    Gmail Link:
                    <input type="text" value={gmailLink} onChange={handleGmailLinkChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Connections;
