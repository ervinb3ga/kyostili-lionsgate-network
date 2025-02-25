
// Function to get the values of all checked checkboxes with a specific name attribute -- Given by Omri
function getCheckedValues(delimiter = ', ', formFieldId) {

  // Select all checked checkboxes within the form by their name attribute
  const checkedBoxes = document.querySelectorAll(`input[name="form_fields[${formFieldId}][]"]:checked`);

  // Map over the NodeList of checked checkboxes to get their values
  const values = Array.from(checkedBoxes).map(checkbox => checkbox.value);

  // Join the values array into a string, separated by the specified delimiter
  return values.join(delimiter);

}

// Function to get the value of the selected radio button with a specific name attribute -- Given by Omri
function getSelectedRadioValue(formFieldId) {

    // Construct the name attribute value to select the correct radio buttons
    const fieldName = `form_fields[${formFieldId}]`;
    const selectedRadio = document.querySelector(`input[type="radio"][name="${fieldName}"]:checked`);
  
    // Return the value of the selected radio button, or an empty string if none are selected
    return selectedRadio ? selectedRadio.value : '';

}

// Function to get the selected value(s) and convert them to a string - Given by Omri
function getSelectedOptionsAsString(selector, delimiter = ', ') {

    let selectedValues = jQuery(`select[name="form_fields[${selector}][]"]`).val(); // This could be a single value or an array of values
      
    // If selectedValues is not an array (single select), make it an array for consistency
    if (!Array.isArray(selectedValues)) {
        selectedValues = [selectedValues];
    }

    // Join the array into a string with the specified delimiter
    let valueString = selectedValues.join(delimiter);

    return valueString;
}