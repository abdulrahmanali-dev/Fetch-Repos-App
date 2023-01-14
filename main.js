// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-repos button");
let showData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};

function getRepos() {
  // if the value is empty dont show shit
  if (theInput.value === "") {

    showData.innerHTML = "<span>Please write a Valid Github Username</span>" 

  } else {
    console.log(theInput.value);

    //fetch the repositries Data
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((repositries) => {
        // empty the continer div
        showData.innerHTML = "";

        //Loop on all repositries
        repositries.forEach((repo) => {
          //create divs to add the repos names
          let Maindiv = document.createElement("div");
          // get the repos name
          let repos = document.createTextNode(repo.name);
          // append
          Maindiv.appendChild(repos);
          showData.appendChild(Maindiv);

          // create a visit link to the repo

          let theUrl = document.createElement("a");

          // create repo url text

          let theUrlText = document.createTextNode("Visit");

          // append url name to url

          theUrl.appendChild(theUrlText);

          // Create The Hyber Text Reference "href"

          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

          // apend the url to the repo div

        //   Maindiv.appendChild(theUrl);

          // Create repo stars count
          let starSpan = document.createElement("span");
          let starsCount = document.createTextNode(repo.stargazers_count);
          // append stars count 
          starSpan.appendChild(starsCount);
        //   Maindiv.appendChild(starSpan);

        

          // add class to main div 

          Maindiv.className = "repo-box";

          // create stars and visit div very profetionally
          let starsAndVisit = document.createElement("div")
          starsAndVisit.appendChild(starSpan)
          starsAndVisit.appendChild(theUrl)
          Maindiv.appendChild(starsAndVisit)
          
        });
      });
  }
}
