// Attendre que le contenu de la page soit chargé avant de manipuler le DOM




document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');

    // Gérer le clic sur chaque élément du menu
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionName = this.dataset.section;
            const section = document.getElementById(`${sectionName}Section`);

            // Si la section est déjà ouverte, on la ferme
            if (section.style.display === 'block') {
                section.style.display = 'none';
            } else {
                // Sinon, on masque toutes les sections et on affiche uniquement celle cliquée
                sections.forEach(sec => {
                    sec.style.display = 'none';
                });
                section.style.display = 'block';
            }
        });
    });

    // Gérer le clic sur le titre pour rétracter la section actuellement ouverte
    const title = document.querySelector('.title h1');
    title.addEventListener('click', function() {
        const openSection = document.querySelector('.section[style="display: block;"]');
        if (openSection) {
            openSection.style.display = 'none';
        }
    });
});
