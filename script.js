"use strict";

async function getData() {
  const url = "https://api.imgflip.com/get_memes";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    return result.data.memes;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const data = await getData();
  showRandomMeme(data);

  let memeButton = document.getElementById("memeButton");
  memeButton.addEventListener("click", function () {
    showRandomMeme(data);
  });
}

main();

function getRandomEl(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function showRandomMeme(memeList) {
  let randomMeme = getRandomEl(memeList);

  let imageMemeEl = document.getElementById("memeImage");
  imageMemeEl.src = randomMeme.url;
  
  let nameMemeEl = document.getElementById("memeName");
  nameMemeEl.innerText = randomMeme.name;
}
