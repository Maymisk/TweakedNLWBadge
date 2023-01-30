const smedia = {
  github: 'Maymisk',
  instagram: 'maymi_sk',
  twitter: 'maykbrito' // one of the event's teachers,
  facebook: 'maykbrito'
}

function changeLinks() {
  // bro what was i doing???
  for (let li of shittyList.children) {
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
      MyName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userProfilePicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubUserData()
