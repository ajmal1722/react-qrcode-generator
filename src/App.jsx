import React, { useState } from "react";
import QRCode from 'qrcode'; 

const App = () => {
    const [url, setUrl] = useState('');
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');

    const generateQRCode = async () => {
        if (url.trim() !== '') {
            try {
                const qrCodeData = await QRCode.toDataURL(url);
                setQrCodeDataUrl(qrCodeData);
            } catch (error) {
                console.error('Error generating QR code:', error);
            }
        } else {
            alert('Please enter a valid URL.');
        }
    };

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    };

    return (
        <div className='app'>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                placeholder='Enter URL'
                value={url}
                onChange={handleInputChange}
            />
            <button onClick={generateQRCode}>Generate</button>
            {qrCodeDataUrl && <img src={qrCodeDataUrl} alt="QR code" />}
        </div>
    );
};

export default App;


