/* Log In Modal */
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

/* Sign Up Modal */

// Function to open the Sign Up modal
function openSignUpModal() {
    document.getElementById("signUpModal").style.display = "flex";
}

// Function to close the Sign Up modal
function closeSignUpModal() {
    document.getElementById("signUpModal").style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const signUpModal = document.getElementById("signUpModal");
    const loginModal = document.getElementById("loginModal");
    if (event.target === signUpModal) {
        closeSignUpModal();
    }
    if (event.target === loginModal) {
        closeLoginModal();
    }
};
