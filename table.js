document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('languageTable');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Add click event to table rows
    const rows = table.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i++) {
        rows[i].addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            popupText.textContent = info;
            popup.style.display = 'block';
        });
    }

    // Close popup when clicking the close button
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Close popup when clicking outside of it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});