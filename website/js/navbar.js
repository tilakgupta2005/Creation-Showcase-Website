// Selecting elements
  // Selecting elements
  const menuOption = document.getElementById('menuoption');
  const sideMenu = document.getElementById('sidemenu');
  const crossIcon = document.getElementById('crossicon');
  const searchIcon=document.getElementById('search-button')
  const searchCtn=document.getElementById('search-box')
  
  
  // Show sidebar on menu click
  menuOption.addEventListener('click', () => {
      sideMenu.classList.add('active');
  });
  
  searchIcon.addEventListener('click',()=>{
      searchCtn.classList.toggle('active')
  })
  
  // Hide sidebar on cross icon click
  crossIcon.addEventListener('click', () => {
      sideMenu.classList.remove('active');
  });