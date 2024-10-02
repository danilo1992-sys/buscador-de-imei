document.getElementById("form")
const OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'b9e2d7f868mshf9a025cb35dbb64p1b2a9djsn18ae8ef102a8',
    'x-rapidapi-host': 'kelpom-imei-checker1.p.rapidapi.com'
  }
}

const fetchIpInfo = ip => {
  return fetch(`https://kelpom-imei-checker1.p.rapidapi.com/api?service=model&imei=${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')
const $img = $('#img')

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const { value } = $input
  if (!value) return

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')

  const ipInfo = await fetchIpInfo(value)

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')

})
