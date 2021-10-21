const links = {
    github: 'PedroCantanhede',
    youtube: 'jakelinygracielly',
    instagram: 'pedro_cantanhede',
    facebook: 'pedro.cantanhede',
    twitter: 'iEdcold'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const socialMedia = li.getAttribute('class');

        li.children[0].href = `https://${socialMedia}.com/${links[socialMedia]}`;

        alert(li.children[0].href);
    }
}

changeSocialMediaLinks();