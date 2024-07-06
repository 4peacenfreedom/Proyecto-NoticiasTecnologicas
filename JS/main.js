const menuButton = document.querySelector(".boton-menu");
const navigation = document.querySelector(".navegacion-principal");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("visible"); // Toggle visibility class on click
});
