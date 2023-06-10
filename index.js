// Store the reference to the dragged item
    let draggedItem = null;
const successMsg = document.getElementById('success-msg');
    // Add event listeners to draggable items
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });

    // Add event listeners to droppable container
    const droppableContainer = document.querySelector('.droppable-container');
    droppableContainer.addEventListener('dragover', dragOver);
    droppableContainer.addEventListener('dragenter', dragEnter);
    droppableContainer.addEventListener('dragleave', dragLeave);
    droppableContainer.addEventListener('drop', drop);

    // Drag start event handler
    function dragStart(e) {
      draggedItem = this;
      this.classList.add('dragging');
    }

    // Drag end event handler
    function dragEnd() {
      draggedItem = null;
      this.classList.remove('dragging');
    }

    // Drag over event handler
    function dragOver(e) {
      e.preventDefault();
    }

    // Drag enter event handler
    function dragEnter(e) {
      e.preventDefault();
      this.classList.add('droppable');
    }

    // Drag leave event handler
    function dragLeave() {
      this.classList.remove('droppable');
    }

    // Drop event handler
    function drop() {
      this.classList.remove('droppable');
      this.appendChild(draggedItem);
      showSuccessMessage();
      // You can perform additional actions here, like displaying a success message
    }

    // Reset containers to their original state
    function resetContainers() {
      const draggableContainer = document.querySelector('.draggable-container');
      draggableContainer.append(...items);
      droppableContainer.innerHTML = 'Drop here';

      hideSuccessMessage();
    }

    function showSuccessMessage() {
  successMsg.style.display = 'block';
}

// Hide success message
function hideSuccessMessage() {
  successMsg.style.display = 'none';
}
