document.getElementById('start-learning-btn').addEventListener('click', function() {
  const language = document.getElementById('language-select').value;
  // Redirect to learning options page with selected language
  //window.location.href = `learning_options.html?lang=${language}`;
  window.location.href = `index.html?lang=${language}`;
});
