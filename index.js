const NC_VALIDATION_MESSAGE = "NC deve ser menor ou igual a 10"
const NE_VALIDATION_MESSAGE = "NE é um campo obrigatório"
const TL_VALIDATION_MESSAGE = "TL deve ser menor ou igual a 30"
const CALCULATE_BUTTON_VALIDATION_MESSAGE = "TL deve ser menor ou igual a 30"

function calculateResult() {
  if(validateInputs()) {
    const nc = document.getElementById("nc").value
    const ne = document.getElementById("ne").value
    const tl = document.getElementById("tl").value
  
    let result = nc - (2 * (ne / tl))
    result = result < 0 ? 0 : result
    result = parseFloat(result).toFixed(3);
  
    document.getElementById("result").value = result;

    showCopyIcon()
  }
}

function copyResult() {
  const copyText = document.getElementById("result");
  copyText.select();

  navigator.clipboard.writeText(copyText.value);

  showSuccessIcon()
  setTimeout(function () { showCopyIcon() }, 600);
}

function showCopyIcon() {
  const copyIcon = document.getElementById("copy-icon")

  copyIcon.innerHTML = "content_copy"
  copyIcon.style.color = "black";
}

function showSuccessIcon() {
  const copyIcon = document.getElementById("copy-icon")

  copyIcon.innerHTML = "task_alt"
  copyIcon.style.color = "green";
}

function validateInputs() {
  const nc = document.getElementById("nc").value
  const ne = document.getElementById("ne").value
  const tl = document.getElementById("tl").value

  const validNC = validateNC(nc)
  const validNE = validateNC(ne)
  const validTL = validateTL(tl)

  return validNC && validNE && validTL
}

function validateNC(value) {
  const isValid = !value || value > 10
  return handleValidationResult(isValid, "nc-validation", NC_VALIDATION_MESSAGE)
}

function validateNE(value) {
  const isValid = !value
  return handleValidationResult(isValid, "ne-validation", NE_VALIDATION_MESSAGE)
}

function validateTL(value) {
  const isValid = !value || value > 30
  return handleValidationResult(isValid, "tl-validation", TL_VALIDATION_MESSAGE)
}

function handleValidationResult(isValid, labelId, message) {
  let validationLabel = document.getElementById(labelId)

  if(isValid){
    validationLabel.innerHTML = message;
    return false
  }
  
  validationLabel.innerHTML = "";
  return true
}
