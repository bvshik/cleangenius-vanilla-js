document.addEventListener('click', e => {
    const isDropdownBtn = e.target.matches("[dropdown-button]");
    const dropdownList = document.querySelector("[dropdown-list]")
    
    if (isDropdownBtn){
        dropdownList.classList.toggle('active');
        return;
    }
    if (isDropdownBtn || !e.target.matches("[dropdown-list], a")) dropdownList.classList.remove('active');
    
})