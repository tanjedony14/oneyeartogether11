function go(n) {
  document.querySelectorAll('.scene')
    .forEach(scene => scene.classList.remove('active'));

  document.getElementById('scene' + n)
    .classList.add('active');
}



