// Caesar cipher function: shifts each letter by the given key
function caesarCipher(text, key, mode) {
  // Normalize key to stay within 0–25 range
  key = (key % 26 + 26) % 26;

  // If decoding, reverse the shift
  if (mode === 'decode') {
    key = -key;
  }

  // Convert text to array and map each character
  return text.split('').map(char => {
    // Handle uppercase letters
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode((char.charCodeAt(0) - 65 + key + 26) % 26 + 65);
    }
    // Handle lowercase letters
    else if (char >= 'a' && char <= 'z') {
      return String.fromCharCode((char.charCodeAt(0) - 97 + key + 26) % 26 + 97);
    }
    // Leave non-alphabet characters unchanged
    else {
      return char;
    }
  }).join('');
}

// Main function triggered by button click
function processMessage() {
  const message = document.getElementById('messageInput').value;
  const key = parseInt(document.getElementById('keyInput').value);
  const mode = document.getElementById('modeSelect').value;

  // Validate inputs
  if (!message || isNaN(key)) {
    document.getElementById('outputArea').textContent = 'Please enter a valid message and key.';
    return;
  }

  // Run cipher and display result
  const result = caesarCipher(message, key, mode);
  document.getElementById('outputArea').textContent = result;
}