var pdData = {
  excellent: {
    freq: 66,
    act: 0.82,
    pred: 0.84,
    pd: 0.83,
  },
  good: {
    freq: 48,
    act: 0.84,
    pred: 0.77,
    pd: 0.76,
  },
  fair: {
    freq: 18,
    act: 0.465,
    pred: 0.614,
    pd: 0.63,
  },
  poor: {
    freq: 10,
    act: 0.25,
    pred: 0.43,
    pd: 0.49,
  },
};

d3.selection.prototype.moveToFront = function() {
  return this.each(function() {
    this.parentNode.appendChild(this);
  });
};

function partialDependence() {
  var jWidth = 1000;
  var jHeight = 400;

  var margin = {top: 30, right: 10, bottom: 30, left: 80};
  var width = jWidth - 200 - margin.left - margin.right;
  var height = jHeight - margin.top - margin.bottom;
  var chartMargin = {left: 100, bottom: 20};

  $('#pd').html('');

  var svg = d3.select('#pd').append('svg')
      .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
      .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

  var features = d3.keys(pdData);

  var yextent = [0, 70];
  var xextent = features.slice();
  var yscale = d3.scale.linear().range([height, 0]).domain(yextent);
  var xscale = d3.scale.linear().range([0, width]).domain(xextent);
  var yaxis = d3.svg.axis().scale(yscale).orient('left');
  var xaxis = d3.svg.axis().scale(xscale).orient('bottom');

  var tscale = d3.scale.linear().range([height, 0]).domain([0, 1]);
  var taxis = d3.svg.axis().scale(tscale).orient('right');

  var barSpacing = width / features.length;

  svg.append('g')
    .attr('class', 'axis yaxis')
    .attr('transform', 'translate(' + (chartMargin.left - 5) + ', 20)')
    .call(yaxis);
  svg.append('g')
    .attr('class', 'axis xaxis')
    .attr('transform', 'translate(' + chartMargin.left + ', ' + (height + 20) + ')')
    .call(xaxis);

  var taxisSvg = svg.append('g')
    .attr('class', 'axis taxis')
    .attr('transform', 'translate(' + (chartMargin.left + width) + ', 20)');

  svg.append('text')
    .attr('class', 'axis-label')
    .attr('transform', 'rotate(-90) translate(-' + (height + 20) + ', 50)')
    .text('Frequency');

  // target axis labels
  var labelPre = 'rotate(-90) translate(-' + (height + 80) + ', ' + (width + chartMargin.left + 55) + ')';
  var labelStart = 'rotate(-90) translate(-' + (height + 20) + ', ' + (width + chartMargin.left + 55) + ')';
  var labelEnd = 'rotate(-90) translate(0, ' + (width + chartMargin.left + 55) + ')';
  svg.append('text')
    .attr('class', 'axis-label')
    .attr('transform', labelPre)
    .text('Average actual PRQ')
    .attr('id', 'act-label')
    .attr('opacity', 0);
  svg.append('text')
    .attr('class', 'axis-label')
    .attr('id', 'pred-label')
    .attr('transform', labelPre)
    .text('Predicted avg. PRQ (FULL)')
    .attr('opacity', 0);
  svg.append('text')
    .attr('class', 'axis-label')
    .attr('id', 'pd-label')
    .attr('transform', labelPre)
    .text('Predicted avg. PRQ (PDP)')
    .attr('opacity', 0);

  svg.append('text')
    .attr('id', 'feature-label')
    .attr('x', (width / 2) + 50)
    .attr('y', height + 80)
    .text('');

  svg.selectAll('.bar')
    .data(features)
    .enter()
    .append('rect')
    .attr('id', (d) => d + '-rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => chartMargin.left + (barSpacing * i) + 10)
    .attr('width', barSpacing - 20)
    .attr('y', height + 20)
    .attr('height', 0)
    .attr('opacity', 0);

  svg.selectAll('.act-circle')
    .data(features)
    .enter()
    .append('circle')
    .attr('id', (d) => d + '-act')
    .attr('class', 'act-circle')
    .attr('r', 8)
    .attr('cx', (d, i) => chartMargin.left + (barSpacing * i) + (barSpacing / 2))
    .attr('cy', height)
    .attr('opacity', 0);

  svg.selectAll('.pred-circle')
    .data(features)
    .enter()
    .append('circle')
    .attr('id', (d) => d + '-pred')
    .attr('class', 'pred-circle')
    .attr('r', 8)
    .attr('cx', (d, i) => chartMargin.left + (barSpacing * i) + (barSpacing / 2))
    .attr('cy', height)
    .attr('opacity', 0);

  svg.selectAll('.pd-circle')
    .data(features)
    .enter()
    .append('circle')
    .attr('id', (d) => d + '-pd')
    .attr('class', 'pd-circle')
    .attr('r', 8)
    .attr('cx', (d, i) => chartMargin.left + (barSpacing * i) + (barSpacing / 2))
    .attr('cy', height)
    .attr('opacity', 0);

  var labelPos = {
    excellent: 80,
    fair: 120,
    good: 200,
    poor: 250,
  };

  function show(feature) {
    svg.select('#feature-label').text(feature).attr('opacity', 1);
    svg.select('#' + feature + '-rect')
      .transition()
      .duration(400)
      .attr('y', yscale(pdData[feature].freq) + 20)
      .attr('height', height - yscale(pdData[feature].freq))
      .attr('opacity', 1)
      .each('end', function() {
        // Centered
        var b = barSpacing - 20;
        var w = svg.select('#feature-label').node().getBBox().width;
        var s = parseFloat(d3.select(this).attr('x'));
        var x = s + (b / 2) - (w / 2);
        svg.select('#feature-label')
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', x)
          .attr('y', height + 40)
          .each('end', function() {
            svg.select('#feature-label')
              .attr('opacity', 0)
              .attr('x', (width / 2) + 50)
              .attr('y', height + 80);
            svg.append('text')
              .attr('class', 'feature-tick-label')
              .attr('x', x)
              .attr('y', height + 40)
              .text(feature);
          });
      });
  }

  function showExcellent() {
    show('excellent');
  }
  function showFair() {
    show('fair');
  }
  function showGood() {
    show('good');
  }
  function showPoor() {
    show('poor');
  }
  function showAct() {
    svg.selectAll('.bar')
      .transition()
      .duration(500)
      .attr('opacity', 0.35)
      .each('end', function(d, i) {
        if (i === 3) {
          taxisSvg.transition().duration(300).call(taxis);
          svg.select('#act-label')
            .transition()
            .duration(300)
            .attr('transform', labelStart)
            .attr('opacity', 1);

          svg.selectAll('.act-circle')
            .transition()
            .duration(500)
            .delay((d, i) => (i * 200))
            .attr('cy', (d) => tscale(pdData[d].act) + 20)
            .attr('opacity', 1);
        }
      });
  }
  function showPred() {
    svg.selectAll('.act-circle')
      .transition()
      .duration(500)
      .attr('opacity', 0.55)
      .each('end', function(d, i) {
        if (i === 3) {
          svg.selectAll('.pred-circle')
            .transition()
            .duration(500)
            .delay((d, i) => (i * 200))
            .attr('cy', (d) => tscale(pdData[d].pred) + 20)
            .attr('opacity', 1);

          svg.select('#act-label')
            .transition()
            .duration(300)
            .attr('transform', labelEnd)
            .attr('opacity', 0);
          svg.select('#pred-label')
            .transition()
            .duration(300)
            .attr('transform', labelStart)
            .attr('opacity', 1);
        }
      });
  }
  function showPd() {
    svg.selectAll('.pred-circle')
      .transition()
      .duration(500)
      .attr('opacity', 0.55)
      .each('end', function(d, i) {
        if (i === 3) {
          svg.selectAll('.pd-circle')
            .transition()
            .duration(500)
            .delay((d, i) => (i * 200))
            .attr('cy', (d) => tscale(pdData[d].pd) + 20)
            .attr('opacity', 1);

          svg.select('#pred-label')
            .transition()
            .duration(300)
            .attr('transform', labelEnd)
            .attr('opacity', 0);
          svg.select('#pd-label')
            .transition()
            .duration(300)
            .attr('transform', labelStart)
            .attr('opacity', 1);
        }
      });
  }

  var fnStack = [showExcellent, showGood, showFair, showPoor, showAct, showPred, showPd];
  $(document).keypress(function(e) {
      if (e.which === 109) {
          if (fnStack.length > 0) fnStack.shift()();
      }
  });

}

function pdMatrix() {
  var jWidth = 1000;
  var jHeight = 400;

  var margin = {top: 100, right: 10, bottom: 30, left: 80};
  var width = jWidth - 200 - margin.left - margin.right;
  var height = jHeight - margin.top - margin.bottom;
  var chartMargin = {left: 100, bottom: 20};

  $('#pd-matrix').html('');

  var svg1 = d3.select('#pd-matrix').append('svg')
      .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
      .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

  var features = FEATURES.slice();
  var columns = mostImportantFeatures.slice();

  features[features.indexOf('marital_status')] = 'grandfather_acquainted';
  features[features.indexOf('married')] = 'higher_earner';
  features[features.indexOf('still_together_after_2_years')] = 'parents_acquainted';

  var fixedColIndex = features.indexOf('relationship_quality');

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
    .attr('id', (d) => 'feature-label-' + d)
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

  function fix() {
    svg1.select('#feature-label-relationship_quality').attr('fill', '#F64747').attr('stroke', 'none');
    svg1.selectAll('.poor')
      .data(d3.range(35))
      .enter()
      .append('text')
      .attr('class', 'poor')
      .attr('x', 800)
      .attr('y', (d, i) => (i * 10) + margin.top + 10)
      .attr('font-size', '14px')
      .text('poor')
      .attr('opacity', 0)
      .transition()
      .duration(300)
      .delay((d, i) => (i / 35) * 300)
      .attr('opacity', 1);
  }

  var fnStack = [fix];
  $(document).keypress(function(e) {
      if (e.which === 109) {
          if (fnStack.length > 0) fnStack.shift()();
      }
  });
}