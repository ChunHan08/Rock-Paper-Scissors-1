const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    gameContainer.classList.add("disabled");
    userResult.src = `images/${index}.png`;
    userResult.alt = `You chose ${index}`;
    cpuResult.src = `images/${randomNumber()}.png`;
    cpuResult.alt = `CPU chose ${randomNumber()}`;
    result.innerText = getResult(index, randomNumber());
    setTimeout(() => {
      gameContainer.classList.remove("disabled");
    }, 1000);
  });
});