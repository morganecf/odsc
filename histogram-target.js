var histTargetData = [
    [353, 61],
    [181, 81],
    [101, 83],
    [80, 88],
    [45, 98],
    [36, 89],
    [23, 91],
    [14, 79],
    [12, 100],
    [7, 71],
    [4, 75],
    [2, 50],
    [3, 33],
    [1, 100],
];

function histTarget() {
    var jWidth = 800;
    var jHeight = 400;

    var margin = {top: 20, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#hist-target').html('');

    var svg = d3.select('#hist-target').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    var xextent = [0, 60];
    var yextent = [0, 1];
    var zextent = [0, 400];

    var barWidth = width / histTargetData.length;

    var xscale = d3.scale.linear().range([0, width]).domain(xextent);
    var yscale = d3.scale.linear().range([height, 0]).domain(yextent);
    var zscale = d3.scale.linear().range([height, 0]).domain(zextent);

    var xaxis = d3.svg.axis().scale(xscale).orient('bottom');
    var yaxis = d3.svg.axis().scale(yscale).orient('left');
    var zaxis = d3.svg.axis().scale(zscale).orient('right');

    var line = d3.svg.line()
        .x((d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .y((d) => yscale(d[1] / 100) + 20)
        .interpolate('cardinal');

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

    var targetPath = svg.append('path')
        .attr('class', 'tg-path')
        .attr('d', line(histTargetData))
        .attr('opacity', 0);

    var bars = svg.selectAll('.heart-bar')
        .data(histTargetData)
        .enter()
        .append('rect')
        .attr('class', 'heart-bar')
        .attr('width', barWidth)
        .attr('x', (d, i) => (i * barWidth) + margin.left)
        .attr('y', height + chartMargin.bottom)
        .attr('height', 0)
        .attr('opacity', 0.25);

    var points = svg.selectAll('.target-point')
        .data(histTargetData)
        .enter()
        .append('circle')
        .attr('class', 'target-point')
        .attr('r', 6)
        .attr('cx', (d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .attr('cy', 0)
        .attr('opacity', 0);

    // Labels
    svg.append('text')
        .attr('x', 75)
        .attr('y', height + chartMargin.bottom + 50)
        .attr('class', 'axis-label')
        .text('Length of relationship up until now');
    svg.append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90) translate(-' + (height + 25) + ', 35)')
        .text('1 - (break up rate)');

    // hidden label
    var zlabel = svg.append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90) translate(-' + (height + 25) + ', ' + (width + chartMargin.left + 25) + ')')
        .text('Frequency')
        .attr('opacity', 0);

    function showPoints() {
        points.transition()
            .duration(500)
            .delay((d, i) => i * 40)
            .attr('cy', (d) => yscale(d[1] / 100) + 20)
            .attr('opacity', 1);
    }

    function showLine() {
        animateLine(targetPath, 500);
    }

    function showBars() {
        taxisSvg.call(zaxis);
        zlabel.attr('opacity', 1);
        bars.transition()
            .duration(500)
            .delay((d, i) => (i / histTargetData.length) * 500)
            .attr('height', (d) => height - zscale(d[0]) + chartMargin.bottom - 20)
            .attr('y', (d) => zscale(d[0]) - chartMargin.bottom + 40);
    }

    var fnStack = [showPoints, showLine, showBars];
    $(document).keypress(function(e) {
        if (e.which === 109) {
            if (fnStack.length > 0) fnStack.shift()();
        }
    });
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
