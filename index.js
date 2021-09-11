const VALID_NC_MESSAGE = "NC deve ser menor ou igual a 10"
const VALID_NE_MESSAGE = ""
const VALID_TL_MESSAGE = "TL deve ser menor ou igual a 30"

const INVALID_NC_MESSAGE = "NC deve ser menor ou igual a 10"
const INVALID_NE_MESSAGE = "NE é um campo obrigatório"
const INVALID_TL_MESSAGE = "TL deve ser menor ou igual a 30"

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
  return handleValidationResult(isValid, "nc-validation", VALID_NC_MESSAGE, INVALID_NC_MESSAGE)
}

function validateNE(value) {
  const isValid = !value
  return handleValidationResult(isValid, "ne-validation", VALID_NE_MESSAGE, INVALID_NE_MESSAGE)
}

function validateTL(value) {
  const isValid = !value || value > 30
  return handleValidationResult(isValid, "tl-validation", VALID_TL_MESSAGE, INVALID_TL_MESSAGE)
}

function handleValidationResult(notValid, labelId, valid_message, invalid_message) {
  let validationLabel = document.getElementById(labelId)

  if(notValid){
    validationLabel.innerHTML = invalid_message;
    validationLabel.style.color =  "#f15b47";

    return false
  }
  
  validationLabel.innerHTML = valid_message;
  validationLabel.style.color = "grey";
  return true
}
