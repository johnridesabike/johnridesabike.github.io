/*jslint for this browser*/
/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
    var container;
    var buttonContainer;
    var button;
    var menu;
    var links;
    var i;
    var len;

    container = document.getElementById("site-navigation");
    if (!container) {
        return;
    }

    buttonContainer = document.getElementById("toggle-button");
    button = buttonContainer.getElementsByTagName("button")[0]; // Weracoba
    if ("undefined" === typeof button) {
        return;
    }

    menu = container.getElementsByTagName("ul")[0];

    // Hide menu toggle button if menu is empty and return early.
    if ("undefined" === typeof menu) {
        button.style.display = "none";
        return;
    }

    menu.setAttribute("aria-expanded", "false");
    if (-1 === menu.className.indexOf("nav-menu")) {
        menu.className += " nav-menu";
    }

    button.onclick = function () {
        if (-1 !== container.className.indexOf("toggled")) {
            container.className = container.className.replace(" toggled", "");
            buttonContainer.className = buttonContainer.className.replace(
                " toggled",
                ""
            ); // Weracoba
            button.setAttribute("aria-expanded", "false");
            menu.setAttribute("aria-expanded", "false");
        } else {
            container.className += " toggled";
            buttonContainer.className += " toggled"; // Weracoba
            button.setAttribute("aria-expanded", "true");
            menu.setAttribute("aria-expanded", "true");
        }
    };

    /**
     * Sets or removes .focus class on an element.
     */
    function toggleFocus() {
        var self = this;

        // Move up through the ancestors of the current link until we hit
        // .nav-menu.
        while (-1 === self.className.indexOf("nav-menu")) {

            // On li elements toggle the class .focus.
            if ("li" === self.tagName.toLowerCase()) {
                if (-1 !== self.className.indexOf("focus")) {
                    self.className = self.className.replace(" focus", "");
                } else {
                    self.className += " focus";
                }
            }

            self = self.parentElement;
        }
    }

    // Get all the link elements within the menu.
    links = menu.getElementsByTagName("a");

    // Each time a menu link is focused or blurred, toggle focus.
    len = links.length;
    for (i = 0; i < len; i += 1) {
        links[i].addEventListener("focus", toggleFocus, true);
        links[i].addEventListener("blur", toggleFocus, true);
    }

    /**
     * Toggles `focus` class to allow submenu access on tablets.
     */
    (function (container) {
        var touchStartFn;
        var parentLink = container.querySelectorAll(
            ".menu-item-has-children > a, .page_item_has_children > a"
        );

        if (window.ontouchstart !== undefined) {
            touchStartFn = function (e) {
                var menuItem = this.parentNode;

                if (!menuItem.classList.contains("focus")) {
                    e.preventDefault();
                    var mICLen = menuItem.parentNode.children.length;
                    for (i = 0; i < mICLen; i += 1) {
                        if (menuItem === menuItem.parentNode.children[i]) {
                            continue;
                        }
                        menuItem.parentNode.children[i].classList.remove(
                            "focus"
                        );
                    }
                    menuItem.classList.add("focus");
                } else {
                    menuItem.classList.remove("focus");
                }
            };

            for (i = 0; i < parentLink.length; i += 1) {
                parentLink[i].addEventListener(
                    "touchstart",
                    touchStartFn,
                    false
                );
            }
        }
    }(container));
}());