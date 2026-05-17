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
    role: "",
    type: "",
    bio: "",
    image: "/images/pokedex/lana.jpg"
  },
  {
    name: "FATHIMA",
    role: "",
    type: "",
    bio: "",
    image: "/images/pokedex/fathima.jpg"
  },
  {
    name: "FFION",
    role: "",
    type: "",
    bio: "",
    image: "/images/pokedex/ffion.jpg"
  },
  {
    name: "NICOLAJ",
    role: "",
    type: "",
    bio: "",
    image: "/images/pokedex/nicolaj.jpg"
  },
  {
    name: "IEUAN",
    role: "",
    type: "Water",
    bio: "",
    image: "/images/pokedex/ieuan.jpg"
  },
  {
    name: "PIPPIN",
    role: "Dog pokemon",
    type: "Fairy",
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

  document.getElementById("member-bio").textContent =
    team[current].bio

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
