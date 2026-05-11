const searchInput = document.getElementById("searchInput");

const restaurantCards = document.querySelectorAll(".searchable-card");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    restaurantCards.forEach((card) => {

        const cardText = card.innerText.toLowerCase();

        if(cardText.includes(searchValue)){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }

    });

});