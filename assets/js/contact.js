/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_mtvysfc', 'template_ajto23k', '#contact-form', 'X2hlm4EEKZv2VLOZN')
        .then(() =>{
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five second
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)