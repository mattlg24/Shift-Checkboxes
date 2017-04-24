window.onload = function() {

    let checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

    let lastChecked

    function handleCheck(e) {

        let inBetween = false
        // check if shiftkey was pressed
        // And check that they are checking it
        if (e.shiftKey && this.checked) {
          // loop over every single checkbox
            checkboxes.forEach(checkbox => {
                if (checkbox === this || checkbox === lastChecked) {
                    inBetween = !inBetween
                }

                if (inBetween) {
                    checkbox.checked = true
                }
            })
        }
        lastChecked = this
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', handleCheck)
    })
}
