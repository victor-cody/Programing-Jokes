window.addEventListener('load', function () {
    const output = document.querySelector('.output');
     const button = document.querySelector('.joke-btn');
     const url = "https://v2.jokeapi.dev/joke/Programming?type=single&blacklistFlags=nsfw,explicit";
     button.addEventListener("click", () => {
        fetch(url)
        .then(response => response.json())
        .then( content => {
            output.classList.add("word")
            button.textContent = "Another one";
            output.textContent = content.joke;
            // console.log( output.textContent);
     }).catch(error => output.textContent = error + `: \n Sorry having Some Trouble loading content ?,\nTry Reloading the Page `)
});
});