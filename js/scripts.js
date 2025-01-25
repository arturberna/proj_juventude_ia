document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
  
        const increment = target / 100;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  
  function toggleDetalhes(button) {
    const detalhes = button.nextElementSibling;
    detalhes.classList.toggle("oculto");
    button.textContent = detalhes.classList.contains("oculto") 
      ? "Saiba Mais" 
      : "Mostrar Menos";
  }
  