const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img
          src="https://wallpapers.com/images/hd/attack-on-titan-titan-eren-g7f9t309uzv3zi9k.jpg"
          alt="Eren Yeager"
        />`;
  title.innerHTML = "Founding Titan.";
  excerpt.innerHTML =
    "This is Eren Yeager in his founding titan form with Levi Ackerman on his Shoulders.";

  profile_img.innerHTML = `<img
              src="https://avatars.githubusercontent.com/u/170499663?s=400&u=6326636e5e692538ca722a989ccb70e41b4c72f8&v=4"
              alt=""
            />`;
  name.innerHTML = "Eren Yeager";
  date.innerHTML = "April 25, 2025";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
