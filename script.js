document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SOCIAL TOGGLE
       ========================================= */

    const socialToggle =
        document.getElementById("socialToggle");

    const socialContainer =
        document.getElementById("socialToggleContainer");

    const socialOptions =
        document.getElementById("socialOptions");


    if (socialToggle && socialContainer && socialOptions) {

        socialToggle.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen =
                socialContainer.classList.toggle("open");

            socialToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            socialToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close social links"
                    : "Open social links"
            );
        });


        /* Don't close when clicking Instagram / WhatsApp */

        socialOptions.addEventListener(
            "click",
            (event) => {
                event.stopPropagation();
            }
        );


        /* Close when clicking somewhere else */

        document.addEventListener(
            "click",
            () => {

                socialContainer.classList.remove("open");

                socialToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                socialToggle.setAttribute(
                    "aria-label",
                    "Open social links"
                );
            }
        );


        /* Keyboard support */

        socialToggle.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    socialToggle.click();
                }
            }
        );
    }


    /* =========================================
       SMOOTH SECTION NAVIGATION
       ========================================= */

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    navigationLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

    });


    /* =========================================
       ESCAPE KEY CLOSES SOCIAL MENU
       ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                if (socialContainer) {

                    socialContainer.classList.remove(
                        "open"
                    );
                }

                if (socialToggle) {

                    socialToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    socialToggle.setAttribute(
                        "aria-label",
                        "Open social links"
                    );
                }
            }
        }
    );

});