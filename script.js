// elements

const container = document.getElementById("container");
const sidebar = document.getElementById("sidebar");
const enter = document.getElementById("enter");

// open doors

enter.addEventListener("click", () => {

    container.classList.add("open");

    setTimeout(() => {

        sidebar.classList.add("show");

        // your sidebar is already inside
        // <div id="sidebar">...</div>

    }, 900);

});