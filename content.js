(async function () {
  const { id, pw } = await chrome.storage.sync.get(['id', 'pw']);
  const url = location.href;
  if (!confirm('로그인 하시겠습니까?')) return;
  if (url.includes('lms.induk.ac.kr/login.php')) {
    lmsLogin(id, pw);
  } else if (
    url.includes('https://sso.induk.ac.kr/svc/tk/Auth.eps?ac=Y&ifa=N&id=PORTAL')
  ) {
    portalLogin(id, pw);
  }
})();

function lmsLogin(id, pw) {
  const idInput = document.querySelector('input[name="username"]');
  const pwInput = document.querySelector('input[name="password"]');
  const loginBtn = document.querySelector('button[type="submit"]');

  if (idInput && pwInput && loginBtn) {
    idInput.value = id;
    pwInput.value = pw;
    loginBtn.click();
  }
}

function portalLogin(id, pw) {
  const idInput = document.querySelector('input[name="login_id"]');
  const pwInput = document.querySelector('input[name="user_password"]');
  const loginForm = document.querySelector('#loginFrm');

  if (idInput && pwInput) {
    idInput.value = id;
    pwInput.value = pw;
    loginForm.submit();
  }
}
