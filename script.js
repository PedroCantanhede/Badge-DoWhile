// Changing social media links 

const links = {
    github: 'PedroCantanhede',
    youtube: 'channel/UCMGt42sCYClIWQbrFBP9q4A',
    instagram: 'pedro_cantanhede',
    facebook: 'pedro.cantanhede',
    twitter: 'iEdcold'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const socialMedia = li.getAttribute('class');

        li.children[0].href = `https://${socialMedia}.com/${links[socialMedia]}`;

    }
}

changeSocialMediaLinks();

// API - GITHUB

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${links.github}`;

    fetch(url)
    .then(response => 
        response.json()    
    )
    .then(data => {
        userName.textContent = data.name
        userGitHub.href = data.html_url
        userBio.textContent = data.bio
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })

}

getGitHubProfileInfos();