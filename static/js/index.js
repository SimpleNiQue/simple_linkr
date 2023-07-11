window.addEventListener('DOMContentLoaded', function () {
    const originalUrlInput = document.getElementById('original-url');
    const customEndInput = document.getElementById('custom-end');
    const urlNameInput = document.getElementById('url-name');

    const shortenedUrlInput = document.getElementById('shortened-url');
    const shortenBtn = document.getElementById('shorten-btn');
    const copyBtn = document.getElementById('copy-btn');
    const resultContainer = document.getElementById('result-container');

    shortenBtn.addEventListener('click', function () {
        const originalUrl = originalUrlInput.value.trim();
        const customEnd = customEndInput.value.trim();
        const urlName = urlNameInput.value.trim();

        if (originalUrl === '') {
            return;
        }

        // Generate shortened URL based on custom end and URL name
        let shortenedUrl = 'https://simple.ly/';
        if (customEnd !== '') {
            shortenedUrl += customEnd;
        } else {
            // Generate a random 6-character string for custom end if not provided
            shortenedUrl += generateRandomString(6);
        }

        // if (urlName !== '') {
        //     shortenedUrl += `-${urlName.replace(/\s/g, '-').toLowerCase()}`;
        // }

        shortenedUrlInput.value = shortenedUrl;
        resultContainer.style.display = 'block';
    });

    copyBtn.addEventListener('click', function () {
        shortenedUrlInput.select();
        document.execCommand('copy');
        copyBtn.innerText = 'Copied!';
        setTimeout(function () {
            copyBtn.innerText = 'Copy';
        }, 2000);
    });

    // Function to generate a random string of specified length
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
});
