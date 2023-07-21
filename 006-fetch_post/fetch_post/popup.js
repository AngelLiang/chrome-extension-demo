const button = document.getElementById('button');
button.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      alert(`post data from ${response.url}`)
      return response.json()
    })
    .then((json) => {
      console.log(json);
    });
});

