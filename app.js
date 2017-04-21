window.onload = function() {

    let checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

    function handleCheck(e) {
        console.log(e);
        console.log(e.shiftKey);
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', handleCheck)
    })
}
