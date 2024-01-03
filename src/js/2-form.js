const feedbackForm = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const input = feedbackForm.elements.email;
const textarea = feedbackForm.elements.message;
feedbackForm.addEventListener("input", fieldUserInfo);
feedbackForm.addEventListener("submit", sendUserInfo);
populateTextarea();
function fieldUserInfo() {
  const formObj = {
    email: input.value.trim(),
    message: textarea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formObj));
}

function sendUserInfo(event) {
  event.preventDefault();

  if (!input.value || !textarea.value) {
    alert("All fields must be fill in");
    return;
  }
  localStorage.removeItem(localStorageKey);
  console.log({
    email: input.value.trim(),
    message: textarea.value.trim(),
  }); 
  event.currentTarget.reset(); 
}
function populateTextarea() {
  const localInfo = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
  input.value = localInfo.email || "";
  textarea.value = localInfo.message || "";
}
