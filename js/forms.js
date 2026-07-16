// Contact form client-side processing & validation

document.addEventListener('DOMContentLoaded', () => {
  initFormValidation();
});

// Input validation logic
function initFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: {
      element: form.querySelector('#form-name'),
      validate: (value) => {
        if (!value.trim()) return 'Please enter your name';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      }
    },
    email: {
      element: form.querySelector('#form-email'),
      validate: (value) => {
        if (!value.trim()) return 'Please enter your email';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      }
    },
    phone: {
      element: form.querySelector('#form-phone'),
      validate: (value) => {
        if (!value.trim()) return '';  // Phone is optional
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,15}$/;
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
        return '';
      }
    },
    service: {
      element: form.querySelector('#form-service'),
      validate: (value) => {
        if (!value) return 'Please select a service';
        return '';
      }
    },
    message: {
      element: form.querySelector('#form-message'),
      validate: (value) => {
        if (!value.trim()) return 'Please enter your message';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      }
    }
  };

  // Real-time validation on blur
  Object.values(fields).forEach(field => {
    if (!field.element) return;
    
    field.element.addEventListener('blur', () => {
      validateField(field);
    });

    field.element.addEventListener('input', () => {
      if (field.element.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    Object.values(fields).forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      handleFormSubmit(form, fields);
    }
  });
}

function validateField(field) {
  if (!field.element) return true;
  
  const error = field.validate(field.element.value);
  const errorElement = field.element.parentElement.querySelector('.form-error');

  if (error) {
    field.element.classList.add('error');
    if (errorElement) {
      errorElement.textContent = error;
      errorElement.style.display = 'block';
    }
    return false;
  } else {
    field.element.classList.remove('error');
    if (errorElement) {
      errorElement.style.display = 'none';
    }
    return true;
  }
}

function handleFormSubmit(form, fields) {
  const submitBtn = form.querySelector('.btn[type="submit"]');
  const originalText = submitBtn.innerHTML;
  const messageDiv = form.querySelector('.form-message');

  // Show loading state
  submitBtn.innerHTML = '<span class="loader"><span class="loader__dot"></span><span class="loader__dot"></span><span class="loader__dot"></span></span> Sending...';
  submitBtn.disabled = true;

  // Extract values BEFORE resetting the form
  const name = fields.name.element ? fields.name.element.value.trim() : '';
  const email = fields.email.element ? fields.email.element.value.trim() : '';
  const phone = fields.phone.element && fields.phone.element.value.trim() ? fields.phone.element.value.trim() : 'N/A';
  const service = fields.service.element ? fields.service.element.value.trim() : '';
  const message = fields.message.element ? fields.message.element.value.trim() : '';

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // Show success message
    if (messageDiv) {
      messageDiv.className = 'form-message form-message--success';
      messageDiv.innerHTML = '✅ Thank you! Redirecting you to WhatsApp to send your details...';
      messageDiv.style.display = 'block';
    }

    // Reset form
    form.reset();
    Object.values(fields).forEach(field => {
      if (field.element) {
        field.element.classList.remove('error');
      }
    });

    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    // Construct the WhatsApp message with formatting
    const waText = `*New Website Inquiry - Shre Dev Studio*\n` +
                   `-----------------------------------------\n` +
                   `*👤 Name:* ${name}\n` +
                   `*📧 Email:* ${email}\n` +
                   `*📞 Phone:* ${phone}\n` +
                   `*🛠️ Service:* ${service}\n` +
                   `*💬 Message:* ${message}`;

    const waPhone = '917068286755';
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;
    
    // Redirect to WhatsApp
    window.open(waUrl, '_blank');

    // Hide success message after 5 seconds
    setTimeout(() => {
      if (messageDiv) {
        messageDiv.style.display = 'none';
      }
    }, 5000);

  }, 1500);
}
