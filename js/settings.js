/* =================================
   CAMPUSCONNECT
   SETTINGS JAVASCRIPT
================================ */


/* ---------- SAVE SETTINGS ---------- */

const saveButton =
    document.getElementById("saveSettings");


if (saveButton) {

    saveButton.addEventListener("click", function () {

        const name =
            document.getElementById("studentName").value;

        const email =
            document.getElementById("studentEmail").value;

        const course =
            document.getElementById("studentCourse").value;


        /* Save profile information */

        localStorage.setItem(
            "studentName",
            name
        );

        localStorage.setItem(
            "studentEmail",
            email
        );

        localStorage.setItem(
            "studentCourse",
            course
        );


        /* Save notification settings */

        const assignmentNotifications =
            document.getElementById(
                "assignmentNotifications"
            ).checked;

        const eventNotifications =
            document.getElementById(
                "eventNotifications"
            ).checked;


        localStorage.setItem(
            "assignmentNotifications",
            assignmentNotifications
        );

        localStorage.setItem(
            "eventNotifications",
            eventNotifications
        );


        /* Save dark mode setting */

        const darkMode =
            document.getElementById("darkMode").checked;

        localStorage.setItem(
            "darkMode",
            darkMode
        );


        /* Confirmation */

        alert(
            "Settings saved successfully!"
        );

    });

}


/* ---------- LOAD SETTINGS ---------- */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* Profile */

        const savedName =
            localStorage.getItem("studentName");

        const savedEmail =
            localStorage.getItem("studentEmail");

        const savedCourse =
            localStorage.getItem("studentCourse");


        if (savedName) {

            document.getElementById(
                "studentName"
            ).value = savedName;

        }


        if (savedEmail) {

            document.getElementById(
                "studentEmail"
            ).value = savedEmail;

        }


        if (savedCourse) {

            document.getElementById(
                "studentCourse"
            ).value = savedCourse;

        }


        /* Notifications */

        const savedAssignmentNotifications =
            localStorage.getItem(
                "assignmentNotifications"
            );

        const savedEventNotifications =
            localStorage.getItem(
                "eventNotifications"
            );


        if (
            savedAssignmentNotifications !== null
        ) {

            document.getElementById(
                "assignmentNotifications"
            ).checked =
                savedAssignmentNotifications === "true";

        }


        if (
            savedEventNotifications !== null
        ) {

            document.getElementById(
                "eventNotifications"
            ).checked =
                savedEventNotifications === "true";

        }


        /* Dark mode */

        const savedDarkMode =
            localStorage.getItem("darkMode");


        if (savedDarkMode !== null) {

            document.getElementById(
                "darkMode"
            ).checked =
                savedDarkMode === "true";

        }

    }
);