updateView();
function updateView() {
  let div = document.getElementById('app');

  let html = /*html*/ `
    <h1>
      you type <span>I read</span> 
    </h1>
    <textarea placeholder="Your text here..."></textarea>
    <div class="row">
      <select></select>
      <button><img src="img/play.png" />Listen</button>
    </div> 
  `;
  div.innerHTML = html;
}
