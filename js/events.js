/* =================================
   CAMPUSCONNECT
   EVENT HUB JAVASCRIPT
================================= */


/* ---------- FILTER EVENTS ---------- */

const filterButtons =
    document.querySelectorAll(".filter-button");

const eventCards =
    document.querySelectorAll(".event-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active state */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* Activate selected filter */

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        /* Filter cards */

        eventCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* ---------- EVENT SEARCH ---------- */

const searchInput =
    document.getElementById("eventSearch");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const search =
                searchInput.value
                    .toLowerCase()
                    .trim();


            eventCards.forEach(card => {

                const text =
                    card.textContent
                        .toLowerCase();


                if (text.includes(search)) {

                    card.classList.remove(
                        "hidden"
                    );

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            });

        }
    );

}


/* ---------- EVENT BUTTONS ---------- */

const eventButtons =
    document.querySelectorAll(
        ".event-button"
    );


eventButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
            button.closest(".event-card");

        const title =
            card.querySelector("h3")
                .textContent;

        alert(
            "Event: " + title +
            "\n\nEvent details will be available here."
        );

    });

});