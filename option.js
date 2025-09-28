const idInput = document.getElementById('id');
const pwInput = document.getElementById('pw');
const saveBtn = document.getElementById('save');
function validateInput() {
  const id = idInput.value.trim();
  const pw = pwInput.value.trim();

  if (id === '') {
    alert('아이디를 입력해주세요.');
    idInput.focus();
    return false;
  }

  if (pw === '') {
    alert('비밀번호를 입력해주세요.');
    pwInput.focus();
    return false;
  }

  return true;
}

function saveData() {
  if (!validateInput()) {
    return;
  }

  chrome.storage.sync.set(
    {
      id: idInput.value,
      pw: pwInput.value,
    },
    () => {
      alert('저장되었습니다!');
    }
  );
}
saveBtn.addEventListener('click', saveData);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    chrome.storage.sync.set(
      {
        id: idInput.value,
        pw: pwInput.value,
      },
      () => alert('저장됨')
    );
  }
});
chrome.storage.sync.get(['id', 'pw'], (data) => {
  idInput.value = data.id || '';
  pwInput.value = data.pw || '';
});
