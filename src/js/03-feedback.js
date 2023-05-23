import throttle from 'lodash.throttle';

const refs = {
    formEl: document.querySelector('.feedback-form'),
    inputEl: document.querySelector('input'),
    textareaEl: document.querySelector('textarea'),
  };

  const STORAGE_KEY = 'feedback-form-state';

  refs.formEl.addEventListener('input', throttle(onFormInput, 500));
  refs.formEl.addEventListener('submit', onFormSubmit);

  function onFormInput(evt) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        email: refs.inputEl.value,
        message: refs.textareaEl.value,
      })
    );
  }

  function populaitTextarea () {
    const saveMessage = localStorage.getItem ('feedback-form-state')

    if (saveMessage) {

    console.log(saveMessage)

    refs.textareaEl.value = saveMessage;
    }
  }

  function onFormSubmit(evt) {
    evt.preventDefault();
    const qwe = {
      email: refs.inputEl.value,
      message: refs.textareaEl.value,
    };
    console.log(qwe);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }


