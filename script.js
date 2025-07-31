const handleCTAClick = () => {
            const buttons = document.querySelectorAll('.read-more');
            
            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const destination = e.target.closest('.feature-card').querySelector('h2').textContent;
                    
                    
                    console.log(`Tracking CTA click for: ${destination}`);
                    
                    alert(`¡Gracias por tu interés en ${destination}! Pronto te contactaremos con más información.`);
                });
            });
        };
        
        document.addEventListener('DOMContentLoaded', handleCTAClick);