const team = [
  {
    name: "MEAGAN",
    role: "Head of Oak's Laboratory",
    type: "TYPE: Fire",
    bio: "A computational chemist studying molecular systems through simulation and theory. Known for spending lots of rare candies on nodes. Frequently upgrades the Pokédex software late at night.",
    image: "/images/pokedex/meagan.jpg"
  },
  {
    name: "LANA",
    role: "Trainer",
    type: "TYPE: Grass ",
    bio: "A slowly evolving computational chemist native to the valleys of Cymru. Drawn to radioactive materials and complex electronic structures. Has the unique ability to remain stationary for hours when researching, but sightings increase dramatically after mentions of heavy weights or offering of sweet treats.",
    image: "/images/pokedex/lana.jpg"
  },
  {
    name: "FATHIMA",
    role: "",
    type: "TYPE: Electric",
    bio: "Slowly developing computational chemist playing with some complex ligands and transition metals to study electronic structure and molecular magnetism. Loves going trekking to explore nature and soaking in that unbeatable post‑trek satisfaction.",
    image: "/images/pokedex/fathima.jpg"
  },
  {
    name: "FFION",
    role: "TRAINER",
    type: "TYPE: Grass",
    bio: "Computational chemist in training. Especially interested in environmental chemistry. Likes to spend her rare candies on coffees and sushi.",
    image: "/images/pokedex/ffion.jpg"
  },
  {
    name: "NICOLAJ",
    role: "",
    type: "TYPE: Rock",
    bio: "Experimental type working with rare-earths and heavy metals. Often seen training in the gym trying to reach the next evolution.",
    image: "/images/pokedex/nicolaj.jpg"
  },
  {
    name: "IEUAN",
    role: "",
    type: "TYPE: Water",
    bio: "This constantly feeding Water type is said never to finish one Pret filter coffee before finding another. He is often found sniffing around basis sets by day and bobbing up and down in the Manchester Aquatics Centre by night. The calls of Oasis and U2 have been observed to trigger immediate migration.",
    image: "/images/pokedex/ieuan.jpg"
  },
  {
    name: "MAXIME",
    role: "",
    type: "TYPE: Psychic",
    bio: "A computational and theoretical chemist fascinated by light-matter interactions. With a natural ability to complexify his life, is keen to study heavy elements. Loves exploring the world, whether in this universe or fictional ones.",
    image: "/images/pokedex/maxime.jpg"
  },
  {
    name: "PIPPIN",
    role: "Dog pokemon",
    type: "TYPE: Fairy",
    bio: "",
    image: "/images/pokedex/pippin-dachsbun.png"
  }

]

let current = 0

function renderMember() {
  document.getElementById("member-name").textContent =
    team[current].name

  document.getElementById("member-role").textContent =
    team[current].role

  document.getElementById("member-type").textContent =
    team[current].type

  document.getElementById("member-bio").textContent =
    team[current].bio

  document.getElementById("member-image").src =
    team[current].image
}

document.getElementById("next").onclick = () => {
  current = (current + 1) % team.length
  renderMember()
}

document.getElementById("prev").onclick = () => {
  current = (current - 1 + team.length) % team.length
  renderMember()
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    current = (current + 1) % team.length
    renderMember()
  }

  if (e.key === "ArrowLeft") {
    current = (current - 1 + team.length) % team.length
    renderMember()
  }
})

renderMember()
