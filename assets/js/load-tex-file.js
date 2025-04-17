function loadTexFile(filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((texCode) => {
      const codeBlock = document.getElementById("tex-code");
      codeBlock.textContent = texCode;
    })
    .catch((error) => {
      console.error("Failed to load tex file:", error);
    });
}
