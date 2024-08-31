document.getElementById('wrapper').onclick = function () {
    var className = ' ' + wrapper.className + ' ';

    this.className = ~className.indexOf(' active ')
        ? className.replace(' active ', ' ')
        : this.className + ' active';
};


// card section js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const section = document.querySelectorAll('.section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = document.querySelector(button.getAttribute('data-target'));

            section.forEach(section => {
                section.classList.remove('active');
            });
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            targetSection.classList.add('active');
            button.classList.add('active');
        });
    });
});

// chart board

var xValues = ["Today", "Tomorrow"];
var yValues = [35, 9, 4, 14];
var barColors = [
'rgb(54, 71, 188)',
'rgb(98, 20, 140)',
                                  
//   "#b91d47",
//   "#00aba9",
//   "#2b5797",
//   "#e8c3b9"
];

new Chart("myChart22", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]

  },
  options: {
    title: {
      display: true
    //   text: ""
    }
  }
});



// half chart

   