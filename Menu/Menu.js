//Using jQuery, select the menu element and the menu-button element
const menu = $(".menu");
const menuButton = $(".menu-button");

menuButton.click(function(){
    menu.toggleClass("menu--open");
});



//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
// const toggleMenu = () => {
//      .toggleClass()
//   $(".btn-toggle").click(function() {
//     $(".nested").toggleClass("toggle-example");
//   });
// }

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
