(function () {
    let myListItems = []
    let currentItemIndex;
    let listItems = document.getElementsByClassName('list-item');
    let cancelIcons = document.getElementsByClassName('cancel-icon');
    let editIcons = document.getElementsByClassName('edit-icon');
    let overlay = document.getElementById('overlay')
    let modal = document.getElementById('modal')
    let cancelBtn = document.getElementById('cancel-btn')
    let updateItemFormInput = document.querySelector('.update-form .todo-input')
    let addItemFormInput = document.querySelector('.create-form .todo-input')
    let saveButton = document.querySelector('#save-btn')
    let itemsList = document.getElementById('items-list')


    buildList();

    cancelBtn.addEventListener('click', closeModal)

    overlay.addEventListener('click', closeModal)

    addItemFormInput.closest('form').addEventListener('submit', function(e) {
        if(addItemFormInput.value) {
            addItem(addItemFormInput.value.trim())
        }
    })

    /* Do NOT modify snippets above this line */

    function addItem(item) {
        // complete this part
    }

    function deleteItem(itemId) {
        // complete this part
    }

    function updateItem() {
        if (updateItemFormInput.value) {
            // complete this part
            closeModal()
        }
    }

    /* Do NOT modify snippets below this line */
    
    saveButton.addEventListener('click', function (e) {
        updateItem()
        buildList()
    })

    function editItem(item) {
        updateItemFormInput.value = item.textContent.trim()
        currentItemIndex = item.getAttribute('data-id')
        showModal()
    }

    // Build ToDo list for DOM
    function buildList() {
        const myList = myListItems.map((item, index) => {
            return `<li class="list-item" data-id="${index}">${item}<span class="edit-icon"></span><span class="cancel-icon"></span></li>`
        }).join("\n")

        itemsList.innerHTML = myList ? myList : '<div>Your list is empty.</div>';

        // Add Click event listener to each list item
        Array.from(listItems).forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                if (e.target.classList.contains('done')) {
                    e.target.classList.remove('done');
                } else {
                    e.target.classList.add('done');
                }
            })
        })

        // Add Click event listener to each cancel icons
        Array.from(cancelIcons).forEach((icon) => {
            icon.setAttribute('title', 'delete')
            icon.addEventListener('click', function (e) {
                const itemId = e.target.closest('li').getAttribute('data-id');
                deleteItem(itemId)
            });
        })

        // Add Click event listener to each edit icons
        Array.from(editIcons).forEach((icon) => {
            icon.setAttribute('title', 'edit')
            icon.addEventListener('click', function (e) {
                editItem(e.target.closest('li'))
            });
        })
    }

    // show modal
    function showModal() {
        overlay.classList.remove('d-none');
        modal.classList.remove('d-none');
    }

    // dismiss modal
    function closeModal() {
        overlay.classList.add('d-none');
        modal.classList.add('d-none');
        updateItemFormInput.value = ""
    }
})()