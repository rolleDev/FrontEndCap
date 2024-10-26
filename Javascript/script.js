function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Optional: Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
        closeLoginModal();
    }
};
