document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-section footer-image-container">
                    <img src="img/footer_headshot.png" alt="Robbert Zillesen" class="footer-headshot">
                </div>
                <div class="footer-section footer-main-message">
                    <p class="footer-headline">Curious? Scaling? Rethinking finance? Let's talk.</p>
                </div>
                <div class="footer-section footer-contact">
                    <h4>Contact Info:</h4>
                    <ul>
                        <li><a href="mailto:robbert.zillesen@gmail.com">✉️ robbert.zillesen@gmail.com</a></li>
                        <li><a href="https://www.linkedin.com/in/robbert-zillesen/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a></li>
                        <li><a href="https://www.linkedin.com/in/robbert-zillesen/recent-activity/articles/" target="_blank" rel="noopener noreferrer">🔗 My articles</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1lpwgiwEudUpaZaKkLhvIU4dyzsUhk8L2?usp=drive_link" target="_blank" rel="noopener noreferrer">📁 Download full resume</a></li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Robbert Zillesen. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

    const pageContainer = document.querySelector('.page-container');
    if (pageContainer) {
        pageContainer.insertAdjacentHTML('afterend', footerHTML);
    } else {
        // Fallback if .page-container is not found
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
}); 