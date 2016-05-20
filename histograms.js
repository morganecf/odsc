function drawHistograms(selector) {
  var features = Object.keys(DATA_TARGET);
  // var nrows = Math.ceil(features.length / 4);
  var histFeatures_unordered = new Set(features.filter((f) => isHistogram(DATA, f)));
  var histFeatures = ['age_difference', 'education_difference', 'education_mom_difference', 'how_long_ago_first_met'];
  histFeatures.forEach((f) => histFeatures_unordered.delete(f));
  histFeatures_unordered.forEach((f) => histFeatures.push(f));

  var nrows = histFeatures.length;

  // Create containing divs
  var container = $(selector);

  // Clear preexisting
  container.html('');
  for (var i = 0; i < nrows; i++) {
    container.append($(rowStr(histFeatures, i)));
  }

  histFeatures.forEach((feature) => {
    createHistogram(DATA_TARGET, feature);
  });

  function rowStr(features, index) {
    var f1 = features[index * 3];
    var f2 = features[index * 3 + 1];
    var f3 = features[index * 3 + 2];
    // var f4 = features[index * 4 + 3];
    var s = '<div class="row">';
    if (f1) s += '<div id="' + (f1 + '-cell') + '" class="col-md-4 cell"><div class="distribution-title">' + f1 + '</div></div>';
    if (f2) s += '<div id="' + (f2 + '-cell') + '" class="col-md-4 cell"><div class="distribution-title">' + f2 + '</div></div>';
    if (f3) s += '<div id="' + (f3 + '-cell') + '" class="col-md-4 cell"><div class="distribution-title">' + f3 + '</div></div>';
    // if (f4) s += '<div id="' + (f4 + '-cell') + '" class="col-md-3 cell"><div class="distribution-title">' + f4 + '</div></div>';
    s += '</div>';
    return s;
  }

  function isHistogram(features, feature) {
    var data = features[feature];
    if (feature === 'parental_approval' || feature === 'met_through_as_coworkers') return false;
    return !isNaN(data[0][0]);
  }

  function createHistogram(features, feature) {
    var chartMargin = {left: 40, bottom: 20};

    var cellId = '#' + feature + '-cell';
    var width = $(cellId).width() - chartMargin.left - 5;
    var height = width / 1.5;

    var svg = d3.select(cellId)
      .append('svg')
      .attr('width', width + chartMargin.left + 10)
      .attr('height', height + chartMargin.bottom);

    var data = features[feature].map((d) => [parseFloat(d[0]), d[1]]);
    var numBins = 30;

    // Extents, scales, hist function
    var featureExtent = d3.extent(data, (d) => d[0]);
    var xScale = d3.scale.linear().domain(featureExtent).range([0, width]);
    var hist = d3.layout.histogram().bins(xScale.ticks(numBins)).value(d => d[0])(data);
    var freqExtent = [0, d3.max(hist, (bin) => bin.length) + 10];
    var yScale = d3.scale.linear().domain(freqExtent).range([height, 0]);

    var textent = [0, 1];
    var tscale = d3.scale.linear().domain(textent).range([height, 0]);

    // Axis functions
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom').ticks(3);
    var yAxis = d3.svg.axis().scale(yScale).orient('left').ticks(3);
    var tAxis = d3.svg.axis().scale(tscale).orient('right').ticks(3);

    var barWidth = width / hist.length;

    var targetMean;
    hist.forEach((points, i) => {
      targetMean = points.filter((d) => d[1] !== 'broke up').length / points.length;
      targetMean = isNaN(targetMean) ? 0 : targetMean;
      points.tgMean = targetMean;
      points.ty = tscale(targetMean);
    });

    var line = d3.svg.line()
      .x((d) => xScale(d.x) + chartMargin.left + barWidth / 2)
      .y((d) => yScale(d.y) - 20)
      .interpolate('cardinal');

    var tline = d3.svg.line()
      .x((d) => xScale(d.x) + chartMargin.left - (barWidth / 2))
      .y((d) => tscale(d.tgMean))
      .interpolate('monotone');

    // Create the histogram
    var bars = svg.selectAll('.bar')
        .data(hist)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('width', barWidth)
        .attr('x', (d) => xScale(d.x) + chartMargin.left)
        .attr('height', (d) => height - yScale(d.y) + chartMargin.bottom)
        .attr('y', (d) => yScale(d.y) - chartMargin.bottom);

    var densityPath = svg.append('path')
        .attr('id', feature + '-path')
        .attr('class', 'hist-path')
        .attr('d', line(hist))
        .attr('opacity', 0);

    // Create points
    svg.selectAll('.target-point')
      .data(hist)
      .enter()
      .append('circle')
      .attr('class', 'target-point')
      .attr('r', 3)
      .attr('cx', (d, i) => xScale(d.x) + chartMargin.left - (barWidth / 2))
      .attr('cy', 0)
      .attr('opacity', 0);

    var targetPath = svg.append('path')
      .attr('id', feature + '-tgPath')
      .attr('class', 'tg-path')
      .attr('d', tline(hist))
      .attr('opacity', 0);

    // Render axes
    svg.append('g')
        .attr('class', 'axis xaxis')
        .attr('transform', 'translate(' + chartMargin.left + ', ' + height + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'axis yaxis')
        .attr('transform', 'translate(' + (chartMargin.left - 5) + ', 0)')
        .call(yAxis);

  }

  function showMeans() {
    histFeatures.forEach(function(f) {
      d3.selectAll('#' + f + '-cell .target-point')
        .transition()
        .duration(400)
        .delay((d, i) => (i / 30) * 400)
        .attr('cy', (d) => d.ty)
        .attr('opacity', 1)
        .each('end', function() {
          animateLine(d3.select('#' + f + '-tgPath'), 300);
        });
    });

  }

  var nameMapping = {
    age_difference: 'Age difference',
    education_difference: 'Difference in years of education',
    education_mom_difference: "Difference in mothers' years of education",
    how_long_ago_first_met: 'Time since first met',
  };

  function highlight(name, changeName) {
    var path = d3.select('#' + name + '-path');
    if (changeName) $('#bird-eye-histogram-title').text(nameMapping[name]);
    else $('#bird-eye-histogram-title').text('A sample of numeric features');
    d3.selectAll('#' + name + '-cell ' + '.bar')
      .transition()
      .duration(2000)
      // .delay(400)
      .attr('opacity', 0.35);
    animateLine(path, 400);
  }

  function doRest() {
    var fs = histFeatures.slice(4, histFeatures.length);
    fs.forEach(highlight);
  }

  var fnStack = histFeatures.slice(0, 4).map((f) => { return () => highlight(f, true); });
  fnStack.push(...[doRest, showMeans]);
  $(document).keypress(function(e) {
      if (e.which === 109) {
          if (fnStack.length > 0) fnStack.shift()();
      }
  });

  function animateLine(path, animationLength) {
    var pathLength = path.node().getTotalLength();
    path.attr("stroke-dasharray", pathLength + " " + pathLength)
        .attr("stroke-dashoffset", pathLength)
        .transition()
        // .delay(animationLength)
        .duration(animationLength)
        .ease('linear')
        .attr("stroke-dashoffset", 0)
        .attr('opacity', 1);
  }
}