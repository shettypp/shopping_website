
// Assuming you have multiple color palettes and want to add the click functionality to all of them
const colorPalettes = document.querySelectorAll('.colorpallete');
colorPalettes.forEach(palette => {
    palette.addEventListener('click', function() {
        // Remove 'active' class from all palettes
        colorPalettes.forEach(p => p.classList.remove('active'));
        // Add 'active' class to the clicked palette
        this.classList.add('active');
    });
});

