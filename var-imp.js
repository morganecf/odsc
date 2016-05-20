
function shuffleMatrix() {
  var jWidth = 1000;
  var jHeight = 400;

  var margin = {top: 100, right: 10, bottom: 30, left: 80};
  var width = jWidth - 200 - margin.left - margin.right;
  var height = jHeight - margin.top - margin.bottom;
  var chartMargin = {left: 100, bottom: 20};

  $('#var-imp1').html('');

  var svg1 = d3.select('#var-imp1').append('svg')
      .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
      .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

  var features = FEATURES.slice();
  var columns = mostImportantFeatures.slice();

  features[features.indexOf('marital_status')] = 'grandfather_acquainted';
  features[features.indexOf('married')] = 'higher_earner';
  features[features.indexOf('still_together_after_2_years')] = 'parents_acquainted';

  // Draw columns
  columns.forEach((col, index) => {
    svg1.selectAll('.col .col-' + index)
      .data(col.slice(0, 35))
      .enter()
      .append('rect')
      .attr('class', 'col col-' + index)
      .attr('width', 10)
      .attr('height', 10)
      .attr('x', (index * 10) + margin.left)
      .attr('y', (d, i) => (i * 10) + margin.top)
      .attr('fill', '#ECECEC')
      .attr('stroke', '#fff');
  });

  // Add feature labels
  svg1.selectAll('.feature-label')
    .data(features)
    .enter()
    .append('text')
    .attr('font-size', '10px')
    .attr('transform', (d, i) => 'translate(' + ((i * 10) + margin.left + 8) + ',' + (margin.top - 5) + ') rotate(-90)')
    .text((d) => d.length > 15 ? d.slice(0, 15) : d)
    .on('mouseover', function(d, i) {
      svg1.selectAll('.col-' + i)
        .transition()
        .duration(200)
        .delay((d, i) => i * 10)
        .attr('fill', (d, i) => d[1] === 'still together' ? '#F64747' : '#59ABE3');
    })
    .on('mouseout', function(d, i) {
      svg1.selectAll('.col-' + i)
        .transition()
        .attr('fill', '#ECECEC');
    });
  // Add respondent
  svg1.selectAll('.respondent-label')
    .data(columns[0].slice(0, 35))
    .enter()
    .append('text')
    .attr('font-size', '10px')
    .attr('x', 8)
    .attr('y', (d, i) => (i * 10) + margin.top + 8)
    .text((d, i) => 'respondent' + (i + 43));

  function shuffle() {
    var n = 35;
    var rand_indices = d3.shuffle(d3.range(n));
    // Parental approval
    svg1.selectAll('.col-69')
      .transition()
      .duration(200)
      .delay((d, i) => i * 10)
      .attr('fill', (d, i) => d[1] === 'still together' ? '#F64747' : '#59ABE3')
      .each('end', function(d, i) {
        if (i === n - 1) {
          // Shuffle
          svg1.selectAll('.col-69')
            .transition()
            .duration(1000)
            .delay((d, i) => i * 20)
            .attr('y', (d, i) => (rand_indices[i] * 10) + margin.top)
            .attr('x', margin.left + 690);
        }
      });
  }

  var fnStack = [shuffle];
  $(document).keypress(function(e) {
      if (e.which === 109) {
          if (fnStack.length > 0) fnStack.shift()();
      }
  });
}

function showDistributions() {
    var jWidth = 1000;
    var jHeight = 600;

    var margin = {top: 100, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#var-imp2').html('');

    var svg2 = d3.select('#var-imp2').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    var predOld = importanceData.original_predictions;
    var predNew = d3.shuffle(importanceData.top_feature.predictions).slice(0, 175);

    var xextent = d3.extent(predNew);
    var xscale = d3.scale.linear().range([0, width]).domain(xextent);

    var hist = d3.layout.histogram().bins(25);
    var histOld = hist(predOld);
    var histNew = hist(predNew);
    var predNull = histOld.map((d) => { return {x: d.x, y: 0}; });

    var yextent = d3.extent(histNew, (d) => d.length);
    yextent[1] += 5;
    var yscale = d3.scale.linear().range([height, 0]).domain(yextent);

    var xaxis = d3.svg.axis().scale(xscale).orient('bottom');
    var yaxis =d3.svg.axis().scale(yscale).orient('left');

    var distribOld = [{x: xextent[0], y: 0}];
    distribOld.push(...histOld);
    distribOld.push({x: xextent[1], y: 0});
    var distribNew = [{x: xextent[0], y: 0}];
    distribNew.push(...histNew);
    distribNew.push({x: xextent[1], y: 0});

    var curve = d3.svg.line()
      .x((d) => xscale(d.x) + margin.left)
      .y((d) => yscale(d.y))
      .interpolate('monotone');

    var xaxisSvg = svg2.append('g')
      .attr('class', 'xaxis axis')
      .attr('transform', 'translate(' + margin.left + ', ' + height + ')')
      .call(xaxis);
    var yaxisSvg = svg2.append('g')
      .attr('class', 'yaxis axis')
      .attr('transform', 'translate(' + margin.left + ', 0)')
      .call(yaxis);

    // Diagonal hatch pattern definition
    var defs = svg2.append('defs');
    defs.append('pattern')
      .attr('id', 'diagonalHatch-OG')
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('width', 4)
      .attr('height', 4)
      .append('path')
      .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2');
    defs.append('pattern')
      .attr('id', 'diagonalHatch-new')
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('width', 4)
      .attr('height', 4)
      .append('path')
      .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2');

    function showFirst() {
      svg2.append('path')
        .attr('id', 'original-prediction')
        .attr('d', curve(predNull))
        .attr('opacity', 0)
        .transition()
        .duration(1000)
        .attr('opacity', 1)
        .attr('d', curve(distribOld));
    }

    function showSecond() {
      svg2.append('path')
        .attr('id', 'new-prediction')
        .attr('d', curve(predNull))
        .attr('opacity', 0)
        .transition()
        .duration(1000)
        .attr('opacity', 1)
        .attr('d', curve(distribNew));
    }

  // Legend
  svg2.append('rect')
    .attr('class', 'legend-old')
    .attr('x', 80)
    .attr('y', 520)
    .attr('width', 40)
    .attr('height', 10);
  svg2.append('rect')
    .attr('class', 'legend-new')
    .attr('x', 80)
    .attr('y', 540)
    .attr('width', 40)
    .attr('height', 10);

  svg2.append('text')
    .attr('class', 'legend-text')
    .attr('x', 125)
    .attr('y', 530)
    .text('Full model (ENET Blender)');
  svg2.append('text')
    .attr('class', 'legend-text')
    .attr('x', 125)
    .attr('y', 550)
    .text('Model with parental_approval shuffled (ENET Blender)');


  var fnStack = [showFirst, showSecond];
  $(document).keypress(function(e) {
      if (e.which === 109) {
          if (fnStack.length > 0) fnStack.shift()();
      }
  });
}

function showVarImp() {
    var jWidth = 1000;
    var jHeight = 600;

    var margin = {top: 40, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#var-imp3').html('');

    var svg3 = d3.select('#var-imp3').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    var importances = importanceData.importances.slice(0, 23);

    var iextent = d3.extent(importances, (d) => d[2]);
    var iextent_n = d3.extent(importances, (d) => d[1]);
    var iscale = d3.scale.linear().range([0, width]).domain(iextent);
    var iscale_n = d3.scale.linear().range([0, width]).domain(iextent_n);

    var iaxis = d3.svg.axis().scale(iscale).orient('top');

    var iaxisSvg = svg3.append('g')
      .attr('class', 'importance-axis')
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
      .call(iaxis);

    svg3.append('rect')
      .attr('class', 'importance-background')
      .attr('x', margin.left)
      .attr('y', margin.top)
      .attr('width', width)
      .attr('height', 20);

  function showMostImportant() {
    svg3.append('rect')
      .attr('id', 'most-important-var')
      .attr('class', 'importance')
      .attr('x', margin.left)
      .attr('y', margin.top)
      .attr('width', 0)
      .attr('height', 20)
      .attr('fill', '#3FC380')
      .transition()
      .duration(300)
      .delay(100)
      .attr('width', width);
  }

  function normalize() {
    d3.select('#most-important-var').transition().duration(300).attr('fill', '#2ECC71');
    iaxis.scale(iscale_n).tickFormat(d3.format('%'));
    iaxisSvg.transition().duration(400).call(iaxis);
  }

  var IMPORTANCES_CORRECT_ORDER = [
    'how_long_relationship',
    'relationship_quality',
    'age_ratio',
    'age_difference',
    'education_count',
    'religion16',
    'education',
    'religion',
    'education_mom_ratio',
    'education_ratio',
    'party',
    'education_mom_difference',
    'parental_approval',
    'same_college',
    'race',
    'gender',
    'coresident',
    'education_difference',
    'housesize_respondent',
    'same_sex_couple',
    'higher_earner',
    'work_respondent',
  ];

  function showRest() {
    var barHeight = 20;
    // Display rest of importances
    var bk = svg3.selectAll('.importance-background .non-impt');
    var imp = svg3.selectAll('.importance .non-impt')
      .data(importances)
      .enter()
      .append('rect')
      .attr('class', 'importance non-impt')
      .attr('id', (d, i) => 'importance-' + i)
      .attr('x', margin.left)
      .attr('y', (d, i) => margin.top + ((i + 1) * ((barHeight) + 1)) + 5)
      .attr('width', 0)
      .attr('height', barHeight)
      .attr('opacity', 0)
      .attr('fill', '#2ECC71');

    bk.data(importances)
      .enter()
      .append('rect')
      .attr('class', 'importance-background non-impt')
      .attr('x', margin.left)
      .attr('y', margin.top + barHeight)
      .attr('width', width)
      .attr('height', barHeight)
      .attr('opacity', 0)
      .transition()
      .duration(1000)
      .delay((d, i) => i * barHeight)
      .attr('y', (d, i) => margin.top + ((i + 1) * (barHeight + 1)) + 5)
      .attr('opacity', (d, i) => i >= IMPORTANCES_CORRECT_ORDER.length - 1 ? 0 : 0.5)
      .each('end', function(d, i) {
        var ypos = margin.top + ((i + 1) * (barHeight + 1)) + 5;
        var impName = IMPORTANCES_CORRECT_ORDER[i + 1];
        if (i < IMPORTANCES_CORRECT_ORDER.length - 1) {
          d3.select("#importance-" + i)
            .transition()
            .duration(500)
            .attr('opacity', 1)
            .attr('width', (d) => iscale_n(d[1]))
            .each('end', function() {
              svg3.append('text')
                .attr('class', 'importance-label')
                .attr('x', margin.left + 5)
                .attr('y', ypos + 14)
                .text(impName)
                .attr('opacity', 0)
                .transition()
                .duration(300)
                .attr('opacity', 1);
            });
        }
      });

      svg3.append('text')
        .attr('x', margin.left + 5)
        .attr('y', 55)
        .attr('class', 'importance-label')
        .attr('opacity', 0)
        .transition()
        .duration(300)
        .attr('opacity', 1)
        .text('how_long_relationship');
  }

  var fnStack = [showMostImportant, normalize, showRest];
  $(document).keypress(function(e) {
      if (e.which === 109) {
          if (fnStack.length > 0) fnStack.shift()();
      }
  });

}
