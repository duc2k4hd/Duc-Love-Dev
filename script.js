var narbar = document.querySelector('.menu-pc');
var close_menu = document.querySelector('.close-menu');
var narbar_laptop = document.querySelector('.narbar-laptop');
var menu_manager = document.querySelector('.menu-manager');

narbar.addEventListener('click', function() {
    narbar_laptop.style.display = "inline";
    menu_manager.style.display = "none";
    event.preventDefault(); // ngăn chặn load page
});
close_menu.addEventListener('click', function() {
    narbar_laptop.style.display = "none";
    menu_manager.style.display = "block";
})





