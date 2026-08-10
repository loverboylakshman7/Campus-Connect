/* =================================
   CAMPUSCONNECT
   PROFILE JAVASCRIPT
================================= */


/* ---------- LOAD PROFILE ---------- */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedName =
            localStorage.getItem("studentName");

        const savedEmail =
            localStorage.getItem("studentEmail");

        const savedCourse =
            localStorage.getItem("studentCourse");


        /* ---------- NAME ---------- */

        if (savedName && savedName.trim() !== "") {

            document.getElementById(
                "profileName"
            ).textContent = savedName;

            document.getElementById(
                "displayName"
            ).textContent = savedName;

        }


        /* ---------- EMAIL ---------- */

        if (savedEmail && savedEmail.trim() !== "") {

            document.getElementById(
                "displayEmail"
            ).textContent = savedEmail;

        }


        /* ---------- COURSE ---------- */

        if (savedCourse && savedCourse.trim() !== "") {

            document.getElementById(
                "displayCourse"
            ).textContent = savedCourse;

        }

    }
);