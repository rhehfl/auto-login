const idInput = document.getElementById('id');
const pwInput = document.getElementById('pw');
const saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', () => {
  chrome.storage.sync.set(
    {
      id: idInput.value,
      pw: pwInput.value,
    },
    () => alert('저장됨')
  );
});

chrome.storage.sync.get(['id', 'pw'], (data) => {
  idInput.value = data.id || '';
  pwInput.value = data.pw || '';
});
