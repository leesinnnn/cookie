function setCookie(key, value, time) {
  const date = new Date()
  date.setTime(date.getTime() + time * 1000 * 60 * 60 * 24)
  const expires = date.toUTCString()
  document.cookie = `${key}=${value};expires=${expires};path=/;`
}

function getCookie(key) {
  const cookie = document.cookie
  // age=18; name=liqing;
  for (let item of cookie.split(' ')) {
    const arr = item.split('=')
    if (arr[0] === key) {
      const length = arr[1].length
      return arr[1][length - 1] === ';' ? arr[1].slice(0, length - 1) : arr[1]
    }
  }
}

function deleteCookie(key) {
  const value = getCookie(key)
  if (!value) return
  const date = new Date()
  date.setTime(new Date().getTime() - 1)
  const expires = date.toUTCString()
  document.cookie = `${key}=${value};expires=${expires};path=/`
}