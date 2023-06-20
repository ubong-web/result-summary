fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Handle the loaded JSON data

    const scoreList = document.getElementById("score-list");
    const classes = ["Reaction", "Memory", "Verbal", "Visual"];

    // Iterate over the data array and create HTML markup
    data.forEach((item, index) => {
      const paragraph = document.createElement("p");
      paragraph.setAttribute("id", "result");
      paragraph.className = classes[index];
      paragraph.innerHTML = `
        <img src="${item.icon}" alt="Icon" class="icon">
        <div class="category">${item.category}</div>
        <div class="score">${item.score}</div>
        
      `;
      scoreList.appendChild(paragraph);
    });
  })
  .catch(() => {});
