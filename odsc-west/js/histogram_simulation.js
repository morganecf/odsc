d3.selection.prototype.moveToFront = function() {
  return this.each(function() {
    this.parentNode.appendChild(this);
  });
};
d3.selection.prototype.moveToBack = function() {
  return this.each(function() {
    var firstChild = this.parentNode.firstChild;
    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
};

function histogramSimulation() {
    var data = momDifferenceData.map((d) => [parseFloat(d[0]), d[1]]);

    var jWidth = 800;
    var jHeight = 400;

    var margin = {top: 20, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    var binSuggestion = 30;

    $('#histogram').html('');
    $('#histogram-num-datapoints').html('');
    $('#histogram-num-still').html('');
    $('#histogram-num-brokeup').html('');
    $('#histogram-num-bins').html('');

    var svg = d3.select('#histogram').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    var xextent = d3.extent(data, (d) => d[0]);
    var xScale = d3.scale.linear().domain(xextent).range([0, width]);
    var hist = d3.layout.histogram().bins(xScale.ticks(binSuggestion)).value(d => d[0])(data);
    var yextent = [0, d3.max(hist, (bin) => bin.length)];

    var textent = [0, 1];

    var total = d3.sum(hist, (d) => d.length);
    var probabilities = hist.map((d) => d.length / total);

    var numBins = hist.length;
    var barWidth = width / numBins;

    var xscale = d3.scale.linear().range([0, width]).domain(xextent);
    var yscale = d3.scale.linear().range([height, 0]).domain(yextent);
    var tscale = d3.scale.linear().range([height, 0]).domain(textent);

    var xaxis = d3.svg.axis().scale(xscale).orient('bottom');
    var yaxis = d3.svg.axis().scale(yscale).orient('left');
    var taxis = d3.svg.axis().scale(tscale).orient('right');

    var line = d3.svg.line()
        .x((d) => xscale(d.x) + margin.left + barWidth / 2)
        .y((d) => yscale(d.y) - 20)
        .interpolate('cardinal');
    var tline = d3.svg.line()
        .x((d) => xscale(d.x) + chartMargin.left)
        .y((d) => tscale(1 - d.tgMean) + chartMargin.bottom)
        .interpolate('monotone');

    var xaxisSvg = svg.append('g')
        .attr('class', 'axis xaxis')
        .attr('transform', 'translate(' + margin.left + ',' + (height + chartMargin.bottom) + ')')
        .call(xaxis);
    var yaxisSvg = svg.append('g')
        .attr('class', 'axis yaxis')
        .attr('transform', 'translate(' + margin.left + ', 20)')
        .call(yaxis);
    var taxisSvg = svg.append('g')
        .attr('class', 'axis taxis')
        .attr('transform', 'translate(' + (width + margin.left) + ', 20)');

    var sample = getSample(hist, yscale, height);

    var densityPath = svg.append('path')
        .attr('class', 'heart-path')
        .attr('d', line(hist))
        .attr('opacity', 0);
    var targetPath = svg.append('path')
        .attr('class', 'tg-path')
        .attr('d', tline(hist))
        .attr('opacity', 0);

    var bars = svg.selectAll('.heart-bar')
        .data(hist)
        .enter()
        .append('rect')
        .attr('class', 'heart-bar')
        .attr('width', barWidth)
        .attr('x', (d) => xscale(d.x) + margin.left)
        .attr('y', height + chartMargin.bottom)
        .attr('height', 0)
        .attr('opacity', 0.85);

    var points = svg.selectAll('.heart-point')
        .data(sample)
        .enter()
        .append('circle')
        .attr('class', (d) => brokeUp(d.val) ? 'heart-point broke-up' : 'heart-point still-together')
        .attr('r', 0)
        .attr('cx', (d) => xscale(d.x) + chartMargin.left + randPad(10))
        .attr('cy', 0)
        .attr('opacity', 0);

    function showPoints() {
        var numDatapoints = 0;
        points.transition()
            .duration(3000)
            .ease('bounce')
            .delay((d, i) => (i / sample.length) * 3000)
            .attr('r', 6)
            .attr('cy', (d) => d.yj + chartMargin.bottom - 7)
            .attr('opacity', 0.15)
            .each('end', function(d, i) {
                numDatapoints += 1;
                $('#histogram-num-datapoints').text(numDatapoints + ' datapoints');
            });
    }

    function showBars() {
        points.transition()
            .duration(500)
            .attr('r', 0)
            .delay((d, i) => (i / sample.length) * 500)
            .each('end', function(d, i) {
                if (i === parseInt(sample.length / 2)) {
                    bars.transition()
                        .duration(500)
                        .delay((d, i) => (i / hist.length) * 500)
                        .attr('height', (d) => height - yscale(d.y) + chartMargin.bottom + 20)
                        .attr('y', (d) => yscale(d.y) - chartMargin.bottom);
                    $('#histogram-num-bins').text('30 bins');
                }
            });
    }

    function toDensity() {
        bars.transition()
            .duration(500)
            .attr('opacity', 0.15)
            .each('end', function(d, i) {
                // Transition axis to density plot
                yscale.domain(d3.extent(probabilities));
                yaxisSvg.transition().duration(500).call(yaxis);
                animateLine(densityPath, 500);
            });
    }

    function toBar() {
        densityPath.transition().duration(500).attr('opacity', 0);
        yscale.domain(yextent);
        yaxisSvg.transition().duration(500).call(yaxis);
        bars.transition()
            .duration(500)
            .attr('opacity', 0.45);
        points.attr('cx', function() {
                return d3.select(this).attr('cx') - 10;
            })
            .transition()
            .duration(500)
            .attr('r', 6)
            .each('end', function() {
                d3.select(this).moveToFront();
                svg.selectAll('.heart-bar').moveToBack();
            });
    }

    function showBrokeUp() {
        var ns = 0;
        var nb = 0;
        svg.selectAll('.still-together')
            .transition()
            .duration(500)
            .delay((d, i) => (i / 500) * 500)
            .attr('stroke', '#fff')
            .attr('stroke-width', 2)
            .attr('fill', '#F64747')
            .attr('opacity', 1)
            .each('end', function(d, i) {
                d3.select(this).moveToFront();

                ns += 1;
                $('#histogram-num-still').text(ns + ' still together');

                if (i === svg.selectAll('.still-together')[0].length - 1) {
                    svg.selectAll('.broke-up')
                        .transition()
                        .duration(500)
                        .delay((d, i) => (i / 200) * 500)
                        .attr('stroke', '#fff')
                        .attr('stroke-width', 2)
                        .attr('opacity', 0.85)
                        .attr('fill', '#4B77BE')
                        .each('end', function() {
                            d3.select(this).moveToFront();

                            nb += 1;
                            $('#histogram-num-brokeup').text(nb + ' broke up, ');
                        });
                }
            });
    }

    function showTarget() {
        svg.selectAll('.still-together')
            .transition()
            .duration(500)
            .delay((d, i) => (i / 500) * 500)
            .attr('cx', (d) => xscale(d.x) + chartMargin.left)
            .attr('cy', (d) => tscale(1 - d.tgMean) + chartMargin.bottom)
            .each('end', function(d, i) {
                if (i === svg.selectAll('.still-together')[0].length - 1) {
                    svg.selectAll('.broke-up')
                        .transition()
                        .duration(500)
                        .delay((d, i) => (i / 200) * 500)
                        .attr('r', 0);
                }
            });

        // Show target axis
        taxisSvg.call(taxis);

        // Animate line
        animateLine(targetPath, 500);
    }

    var fnStack = [showPoints, showBars, toDensity, toBar, showBrokeUp, showTarget];
    $(document).keypress(function(e) {
        if (e.which === 109) {
            if (fnStack.length > 0) fnStack.shift()();
        }
    });
}

function randPad(px) {
    return (Math.random() > 0.5 ? -1 : 1) * Math.random() * px;
}

function brokeUp(dp) {
    return dp[1] === 'broke up';
}

function getSample(histogram, yscale, height) {
    var sample = [];
    var scale, targetMean;
    histogram.forEach((points, i) => {
        targetMean = points.filter(brokeUp).length / points.length;
        targetMean = isNaN(targetMean) ? 0 : targetMean;
        scale = d3.scale.linear().range([height, yscale(points.y)]).domain([0, points.length]);
        points.forEach((p, j) => {
            sample.push({val: p, x: points.x, y: points.y, yj: scale(j), tgMean: targetMean});
        });
        points.tgMean = targetMean;
    });
    return d3.shuffle(sample);
}

function animateLine(path, animationLength) {
    var pathLength = path.node().getTotalLength();
    path.attr("stroke-dasharray", pathLength + " " + pathLength)
        .attr("stroke-dashoffset", pathLength)
        .transition()
        .delay(animationLength)
        .duration(animationLength)
        .ease('linear')
        .attr("stroke-dashoffset", 0)
        .attr('opacity', 1);
}
