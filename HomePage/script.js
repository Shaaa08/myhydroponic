const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContents => {
            tabContents.classList.remove('active')
        })
        target.classList.add('active')
    })
})

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Select all tab elements
    const tabs = document.querySelectorAll('.tab');
    
    // Select the message element
    const message = document.querySelector('.message');

    // Add click event listener to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Hide the message when a tab is clicked
            message.style.display = 'none';
        });
    });
});