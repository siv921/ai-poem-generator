function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

function poemTopicPrompt(topic) {
  let apiKey = `d102f34aao5ce8t34e64ea7aab7a37d2`;
  let context = `You are a smart AI assistant that loves to create beautiful and 4 line poems. Please generate it with a </br> between each line. Don't write "HTML" in the poem. Please sign the end of the poem with "SheCodes AI" and use a <strong></strong> element for this.`;
  let prompt = `Please create a poem using this topic: ${topic}. It can only be 4 lines long. Create a new poem each time`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waitMessage = document.querySelector("#poem");
  waitMessage.innerHTML = `Please wait, I'm thinking of a good one.`;
  axios.get(apiUrl).then(generatePoem);
}

function poemTopicSubmit(event) {
  event.preventDefault();
  let poemTopicInput = document.querySelector("#topic-input");
  poemTopicPrompt(poemTopicInput.value);
}

let poemTopicElement = document.querySelector("#poem-generator-form");
poemTopicElement.addEventListener("submit", poemTopicSubmit);
