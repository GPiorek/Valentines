document.addEventListener('DOMContentLoaded', function() {

    var dancing = document.getElementById('dancing');
    var dancing2 = document.getElementById('dancing2');
    var button = document.getElementById('button');

    document.getElementById('button').onclick = function() {
        dancing.style.display = 'block';
    };

    document.getElementById('button2').onclick = function() {
        dancing.style.display = 'block';
    };

})