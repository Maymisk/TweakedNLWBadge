const smedia = {
  github: 'Maymisk',
  instagram: 'maymi_sk',
  twitter: 'K_Bohner',
  facebook: ''
}

const socialsList = document.querySelector("#socialsList")
const myName = document.querySelector("#MyName")
const userBio = document.querySelector("#userBio")
const userLink = document.querySelector("#userLink")
const userProfilePicture = document.querySelector("#userProfilePicture")
const userLogin = document.querySelector("#userLogin")

function changeLinks() {
  for (let li of socialsList.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${smedia[social]}/`
  }
}

changeLinks()

function getGitHubUserData() {
  const url = `https://api.github.com/users/${smedia.github}`

  fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
      myName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userProfilePicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubUserData()
