const smoothScroll = () => {
    const links = document.querySelectorAll('.menu-link')

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const section = document.querySelector(link.getAttribute('href'))

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        })
    })
}

smoothScroll()