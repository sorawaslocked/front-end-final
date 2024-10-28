document.addEventListener('DOMContentLoaded', () => {
  const categoryButton = document.getElementById('categoryDropdownMenuLink');
  categoryButton.addEventListener('click', () =>{
    const dropdownMenu = document.getElementById('caterogiry-dropdown');
    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
  })
});