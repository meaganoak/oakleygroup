const team = [
  {
    name: "MEAGAN",
    role: "Head of Oak's Laboratory",
    bio: "Obsessed with computers",
    image: "/images/meagan.jpg"
  }, 
  {
    name: "LANA",
    role: "Gym leader",
    bio: "",
    image: "/images/lana.jpg"
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
