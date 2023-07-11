window.addEventListener('DOMContentLoaded', function () {
    const urlList = document.getElementById('url-list');

    // Example data for the shortened URLs
    const shortenedUrls = [
        { url: 'https://short.url/abcd123', name: 'Example URL 1' },
        { url: 'https://short.url/efgh456', name: 'Example URL 2' },
        { url: 'https://short.url/ijkl789', name: 'Example URL 3' }
    ];

    // Generate the URL list
    shortenedUrls.forEach(function (item) {
        const listItem = document.createElement('li');
        listItem.classList.add('url-item');

        const link = document.createElement('a');
        link.classList.add('url-item-link');
        link.href = item.url;
        link.textContent = item.name || item.url;
        link.target = '_blank';

        const copyBtn = document.createElement('button');
        copyBtn.classList.add('url-item-copy-btn');
        copyBtn.textContent = 'Copy';

        copyBtn.addEventListener('click', function () {
            copyToClipboard(item.url);
        });

        listItem.appendChild(link);
        listItem.appendChild(copyBtn);
        urlList.appendChild(listItem);
    });

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('URL copied to clipboard: ' + text);
    }
});
