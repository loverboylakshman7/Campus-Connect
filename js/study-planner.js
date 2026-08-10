/* =================================
   CAMPUSCONNECT
   STUDY PLANNER
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const studyItems =
        document.querySelectorAll(".study-item");

    const completedCounter =
        document.getElementById("completedSessions");


    /* ---------- COMPLETE SESSION ---------- */

    studyItems.forEach(function (item) {

        const button =
            item.querySelector(".complete-btn");

        button.addEventListener("click", function () {

            item.classList.toggle("completed");

            updateCompletedCount();

        });

    });


    /* ---------- UPDATE COMPLETED ---------- */

    function updateCompletedCount() {

        const completed =
            document.querySelectorAll(
                ".study-item.completed"
            ).length;

        if (completedCounter) {

            completedCounter.textContent =
                completed;

        }

    }


    /* ---------- ADD STUDY BUTTON ---------- */

    const addButton =
        document.getElementById("addStudyBtn");

    if (addButton) {

        addButton.addEventListener("click", function () {

            alert(
                "Study session creation will be added next."
            );

        });

    }

});