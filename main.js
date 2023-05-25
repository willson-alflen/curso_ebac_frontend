document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.getElementById("avatar");
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const numberOfRepos = document.getElementById("numberOfRepos");
  const numberOfFollowers = document.getElementById("numberOfFollowers");
  const numberOfFollowings = document.getElementById("numberOfFollowings");
  const profileUrl = document.getElementById("profileUrl");

  fetch("https://api.github.com/users/willson-alflen")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      avatar.src = json.avatar_url;
      name.innerText = json.name;
      username.innerText = json.login;
      numberOfRepos.innerText = json.public_repos;
      numberOfFollowers.innerText = json.followers;
      numberOfFollowings.innerText = json.following;
      profileUrl.href = json.html_url;
    });
});
