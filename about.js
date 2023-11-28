//Type writer Js animation

const typeWriter = document.querySelector('.type-writer');
const textElements = typeWriter.querySelectorAll('.text');
const numTexts = textElements.length;

function typeText(index) {
  typeWriter.setAttribute('data-state', 'typing');
  const currentText = textElements[index].innerText;

  // Typing animation
  typeWriter.innerText = '';
  let i = 0;
  const typingInterval = setInterval(() => {
    if (currentText[i] === ' ') {
      typeWriter.innerHTML += '<span>&nbsp;</span>'; // Adding space as a span element
    } else {
      typeWriter.innerText += currentText[i];
    }
    i++;
    if (i === currentText.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        deleteText(index);
      }, 2000); // Time to display the text before deletion (2 seconds here)
    }
  }, 100); // Typing speed (100 milliseconds here)
}

function deleteText(index) {
  typeWriter.setAttribute('data-state', 'typing');
  const currentText = textElements[index].innerText;

  // Deleting animation
  let i = currentText.length - 1;
  const deletingInterval = setInterval(() => {
    const newText = currentText.substring(0, i);
    typeWriter.innerText = newText;
    i--;
    if (i < 0) {
      clearInterval(deletingInterval);
      const nextIndex = (index + 1) % numTexts; // Next text index
      typeText(nextIndex); // Display the next text
    }
  }, 50); // Deleting speed (50 milliseconds here)
}

// Initial call to start the typing animation
typeText(0);
