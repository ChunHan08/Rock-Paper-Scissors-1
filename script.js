const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    image.classList.add("active");

    optionImages.forEach((image2, index) => {
      index !==2 && image2.classList.remove("active");
        });
    let imageSrc = e.target.querySelector("img").src;
    userResult.src = imageSrc;
    console.log(imageSrc);

    let randomNumber = Math.floor(Math.random() * 3);
    let cpuImages = ["images.png"]
  });
});