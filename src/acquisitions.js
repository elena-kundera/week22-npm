import Chart from 'chart.js/auto'



(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();


  //Дорогой кот,
  // я думаю, ты сочтешь эту домашку не по заданию, но я с самого начала js хотела научиться 
  // делать систему публикации отзывов на сайте, поэтому я решила подзабить на кристалл и
  // и сделать отзывы )))) Они некрасивые, но я в восторге, что всё работает!! 


const btn = document.querySelector("#btn");

document.addEventListener("DOMContentLoaded", function(event) {
  fetch("http://localhost:3001/comments")
  .then(response => response.json())
  .then(data => getPosts(data))
})

btn.addEventListener('click', function(event) {

  event.preventDefault();
  const post = {
  comment: document.querySelector("#commentInput").value
}
  fetch("http://localhost:3001/comments",{
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'}
  })
  .then (response => response.json())
  .then (data => postPost(data))

  document.querySelector("#commentInput").value = "";
});

function getPosts(a){
  const commentContainer = document.querySelector("#commentContainer");
  a.forEach((item) => {
    const comment = commentInput.value;
      const newComment = document.createElement('div');
      commentContainer.append(newComment);
      const p = document.createElement('p');
      p.innerHTML = item.id + " " +item.comment;
      newComment.append(p);
  }
  );}

  function postPost(b) {
    const commentContainer = document.querySelector("#commentContainer");
      const newComment = document.createElement('div');
      commentContainer.append(newComment);
      const p = document.createElement('p');
      p.innerHTML = b.id + " " + b.comment;
      newComment.append(p);
  }


