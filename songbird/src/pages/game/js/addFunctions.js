const blockCheckboxes = (checkboxes) => {
  for (let item of checkboxes) {
    if (item.checked) {
      item.setAttribute('disabled', true);
    }
  }
}

const blockAllCheckboxes = (checkboxes) => {
  const correctItem = document.querySelector('.answers__item_correct > input');
  correctItem.setAttribute('checked', 'true');
  for (let item of checkboxes) {      
    item.setAttribute('disabled', true);
  }
}

export { blockCheckboxes, blockAllCheckboxes };