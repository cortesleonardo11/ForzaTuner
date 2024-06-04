document.getElementById('FrontSpringSlider').addEventListener('input', function() {
    document.getElementById('FrontSpringValue').textContent = this.value + 'lbs';
});

document.getElementById('RearSpringSlider').addEventListener('input', function() {
    document.getElementById('RearSpringValue').textContent = this.value + 'lbs';
});