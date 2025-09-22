
document.getElementById('y').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in-view'); observer.unobserve(e.target); }
  })
},{threshold:0.2});
document.querySelectorAll('.reveal-up').forEach(el=>observer.observe(el));

function animateCount(el){
  const target = Number(el.dataset.count || 0);
  const dur = 1600;
  const start = performance.now();
  function tick(t){
    const p = Math.min(1,(t-start)/dur);
    el.textContent = Math.floor(target*p) + "+";
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll('.count').forEach(animateCount);
