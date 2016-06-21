var container = document.getElementById("peopleContainer");
var people = [
  {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  {
    title: "Cat",
    name: "Marzipan the Great Cat",
    bio: "hurgblurg cat lyfe.",
    image: "https://s-media-cache-ak0.pinimg.com/736x/30/76/3c/30763c74d57a0c92e507b9289a5a30f3.jpg",
    lifespan: {
      birth: 2016,
      death: "never"
    }
  },
  {
    title: "Princess Cat",
    name: "Marzipan the Cat",
    bio: "cat is eternal",
    image: "https://s-media-cache-ak0.pinimg.com/736x/30/76/3c/30763c74d57a0c92e507b9289a5a30f3.jpg",
    lifespan: {
      birth: 2016,
      death: "never"
    }
  }
]

makeCards();

function makeCards () {
  for (var i = 0; i < people.length; i ++) {
    var person = document.createElement("hella");
    var header = document.createElement("header");
    var title = document.createElement("fancyName");
    var titleInfo = document.createTextNode( people[i].title );
    var name = document.createElement("name");
    var nameInfo = document.createTextNode( people[i].name );
    var section = document.createElement("section");
    var bio = document.createElement("bio");
    var image = document.createElement("img");
    var bioContent = document.createTextNode( people[i].bio );
    var footer = document.createElement("footer");
    var life = document.createTextNode( `${people[i].lifespan.birth}-${people[i].lifespan.death}`);
    ////////////////////////////
    title.appendChild(titleInfo);
    name.appendChild(nameInfo);
    header.appendChild(title);
    header.appendChild(name);
    person.appendChild(header);
    image.src = people[i].image;
    bio.appendChild(bioContent);
    section.appendChild(image);
    section.appendChild(bio);
    person.appendChild(section);
    footer.appendChild(life);
    person.appendChild(footer);
    container.appendChild(person);
    person.addEventListener("click", selected);
  }
}

function selected () {
  var person = document.getElementsByTagName("hella");
  var typeBio = document.getElementById("newBio");
  typeBio.value = ""
  for (var i = 0; i < person.length; i++) {
    person[i].classList.remove("selected");
  }
  var selectedPerson = event.currentTarget.classList.add("selected");
  typeBio.focus();
  typeBio.setAttribute("onkeyup", "replaceBio()");
}

function replaceBio (select) {
  var person = document.getElementsByTagName("hella");
  var typeBio = document.getElementById("newBio");
  if (event.keyCode === 13) {
    for (var i = 0; i < person.length; i++) {
      person[i].classList.remove("selected");
    }
    return typeBio.value = "";
  }
  var selectedPerson = document.getElementsByClassName("selected");
  var child = selectedPerson[0].getElementsByTagName("bio");
  child[0].innerText = typeBio.value;
}