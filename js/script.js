/* ======================= Initial Page Load Section Visibility ======================== */
document.addEventListener("DOMContentLoaded", function() {
    const initialHash = window.location.hash;
    let navLinkToActivate = null;

    if (initialHash) {
        navLinkToActivate = document.querySelector(`.nav a[href="${initialHash}"]`);
    } else {
        navLinkToActivate = document.querySelector('.nav a[href="#home"]');
    }

    if (navLinkToActivate) {
        for(let j=0; j<totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        navLinkToActivate.classList.add("active");
        showSection(navLinkToActivate);
    }
});

// Initialize EmailJS with your Public Key
// IMPORTANT: Replace 'YOUR_EMAILJS_PUBLIC_KEY' with your actual EmailJS Public Key from your account dashboard.
(function() {
    emailjs.init("2DnzOFsL6g9QvtdC2");
})();


/* ======================= Aside ======================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){
            for(let j=0; j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth<1200){
                asideSectionTogglerBtn();
            }
    })
    }
    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
            allSection[i].classList.add("hidden");
        }
        const target = element.getAttribute("href").split("#")[1];
        const targetSection = document.querySelector("#" + target);
        targetSection.classList.add("active");
        targetSection.classList.remove("hidden");

    }
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",() =>
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for (let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("open")
            }
        }


/* ======================= EmailJS Form Submission Event Listener ======================== */
document.addEventListener('DOMContentLoaded', function() {
    // This is where the initial page load visibility logic should be located.
    // If you have it already at the top of script.js inside DOMContentLoaded, that's fine.

    const contactForm = document.getElementById('contact-form-emailjs'); // Get the form by its ID

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the browser's default form submission

            // Replace with your actual Service ID and Template ID from EmailJS
            const serviceID = 'service_afz0epz'; // e.g., 'service_afz0epz'
            const templateID = 'template_htbmzja'; // e.g., 'template_htbmzja'

            // 'this' refers to the form element
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('پیام شما با موفقیت ارسال شد!'); // Show a success message
                    contactForm.reset(); // Clear all form fields
                }, (error) => {
                    console.error('FAILED to send message:', error); // Log the error for debugging
                    alert('متاسفیم، ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.' + (error.text ? `\nخطا: ${error.text}` : '')); // User-friendly error message
                });
        });
    }
});

// IMPORTANT: Ensure your EmailJS initialization is done correctly in index.html
// (function() {
//    emailjs.init({
//        publicKey: "-5_g1-5rQNMjVpiIb", // This is correct from your index.html
//    });
// })();
// This part is already in your index.html, so it's commented out here.
