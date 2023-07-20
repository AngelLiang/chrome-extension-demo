const button = document.getElementById('button');
button.addEventListener('click', () => {
  fetch("http://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    console.log(response)
    alert(`get data from ${response.url}`)
    return response.json();
  })
  .then((data) => {
      console.log(data)
      // alert(data.title)
  })
  .catch((error) => {
      console.log(error)
  });
});

