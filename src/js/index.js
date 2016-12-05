var controls = document.querySelectorAll('.controls input[type="button"]');
var width = 500;
var height = 500;
var svg = d3.select('.rain').append('svg').attr('width', width).attr('height', height);

controls.forEach(function(e){
  e.addEventListener('click', function(){
    var value = parseInt(this.value);
    var randomArray = d3.range(value).map(Math.random);
    console.log(randomArray);

    svg.selectAll('path').remove();
    svg.selectAll('path')
    .data(randomArray).enter()
    .append('path')
    .attr("d", function(d, i) {
      var path = d3.path();
      var x = width*Math.random();
      path.moveTo(x, 0);
      path.lineTo(x, height);
      return path.toString();
    })
    .attr('stroke-width', function(d){
      return d * 5;
    })
    .attr('stroke-dasharray', function(d){
      return d * 50;
    })
    .transition()
        .duration(function(d) {
          return 100000-d*100000 + 20000;
        })
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", -10000);
  })
});



// for each state

  //for each hospital
    //if casemix
      //add to state-casemix list

  //for each hospital
    //if non_casemix
      //add to state-non_casemix list

//next state
