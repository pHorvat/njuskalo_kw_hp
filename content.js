function convertKwToHp(kw) {
  return kw * 1.34102;
}

function addHpContainer() {
  // Find the element containing the kW value
  const kwElement = document.querySelector('.ClassifiedDetailHighlightedAttributes-text abbr[title="kilovati"]');
  
  if (kwElement) {
    const listItem = kwElement.closest('.ClassifiedDetailHighlightedAttributes-listItem');
    const kwValue = parseFloat(kwElement.parentElement.textContent);

    if (!isNaN(kwValue)) {
      const hpValue = convertKwToHp(kwValue).toFixed(2);
      
      // Create a new list item for HP
      const newListItem = document.createElement('li');
      newListItem.className = 'ClassifiedDetailHighlightedAttributes-listItem';
      
      // Create the inner structure
      newListItem.innerHTML = `
        <dl class="ClassifiedDetailHighlightedAttributes-listItemInner">
          <dt class="ClassifiedDetailHighlightedAttributes-label">Snaga motora</dt>
          <dd class="ClassifiedDetailHighlightedAttributes-text">${hpValue} <abbr class="ClassifiedDetailHighlightedAttributes-abbreviation" title="konjske snage">KS</abbr></dd>
        </dl>
      `;
      
      // Insert the new list item after the kW list item
      listItem.parentNode.insertBefore(newListItem, listItem.nextSibling);
    }
  }
}

// Run the function when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addHpContainer);
} else {
  addHpContainer();
}