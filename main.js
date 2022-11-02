function creatGame(player1, hour, player2) {
    return `
      <li>
           <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
           <strong>${hour}</strong>
           <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">

      </li>
    `

}

function createCard(date, day, games) {
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}

            </ul>
        </div>
    `
}

document.querySelector('#app').innerHTML = `
    <header>
    <img src="./assets/logo.svg" alt="Logo da NWL">

    </header>

    <main id="cards">
        ${createCard("'24/11", "quinta", creatGame("switzerland", "07:00", "cameroon") + creatGame("portugal", "13:00", "ghana") + creatGame("brazil", "16:00", "serbia"))}
        ${createCard("28/11", "segunda", creatGame("brazil", "13:00", "switzerland"))}
        ${createCard("02/12", "sexta", creatGame("brazil", "16:00", "cameroon"))}

    </main>
`