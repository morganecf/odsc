var predActData = {
    pred: [0.74, 0.83, 0.7, 0.77, 0.775, 0.768, 0.77, 0.49],
    act: [0.75, 0.85, 0.55, 0.67, 0.99, 0.5, 0.99, 0.5],
    freq: [45, 65, 25, 25, 7, 5, 2, 3],
};

function predAct() {
    var jWidth = 800;
    var jHeight = 400;

    var margin = {top: 20, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#pred-act').html('');

    var svg = d3.select('#pred-act').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    var xextent = [0, 10];
    var yextent = [0, 1];
    var zextent = [0, 70];

    var barWidth = width / 8;

    var xscale = d3.scale.linear().range([0, width]).domain(xextent);
    var yscale = d3.scale.linear().range([height, 0]).domain(yextent);
    var zscale = d3.scale.linear().range([height, 0]).domain(zextent);

    var xaxis = d3.svg.axis().scale(xscale).orient('bottom');
    var yaxis = d3.svg.axis().scale(yscale).orient('left');
    var zaxis = d3.svg.axis().scale(zscale).orient('right');

    var line = d3.svg.line()
        .x((d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .y((d) => yscale(d) + 20)
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

    var actPath = svg.append('path')
        .attr('class', 'act-path')
        .attr('d', line(predActData.act))
        .attr('opacity', 0);
    var predPath = svg.append('path')
        .attr('class', 'pred-path')
        .attr('d', line(predActData.pred))
        .attr('opacity', 0);

    var bars = svg.selectAll('.bar')
        .data(predActData.freq)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('width', barWidth)
        .attr('x', (d, i) => (i * barWidth) + margin.left)
        .attr('y', height + chartMargin.bottom)
        .attr('height', 0)
        .attr('opacity', 0.15);

    svg.selectAll('.pred-point')
        .data(predActData.pred)
        .enter()
        .append('circle')
        .attr('class', 'pred-point')
        .attr('r', 6)
        .attr('cx', (d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .attr('cy', 0)
        .attr('opacity', 0);

    svg.selectAll('.act-point')
        .data(predActData.act)
        .enter()
        .append('circle')
        .attr('class', 'act-point')
        .attr('r', 6)
        .attr('cx', (d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .attr('cy', 0)
        .attr('opacity', 0);

    // Labels
    svg.append('text')
        .attr('x', 75)
        .attr('y', height + chartMargin.bottom + 50)
        .attr('class', 'axis-label')
        .text('Household size');
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

    function showPredPoints() {
        svg.selectAll('.pred-point')
            .transition()
            .duration(500)
            .delay((d, i) => i * 40)
            .attr('cy', (d) => yscale(d) + 20)
            .attr('opacity', 1);
        animateLine(predPath, 500);
    }
    function showActPoints() {
        svg.selectAll('.act-point')
            .transition()
            .duration(500)
            .delay((d, i) => i * 40)
            .attr('cy', (d) => yscale(d) + 20)
            .attr('opacity', 1);
        animateLine(actPath, 500);
    }

    function showBars() {
        taxisSvg.call(zaxis);
        zlabel.attr('opacity', 1);
        bars.transition()
            .duration(500)
            .delay((d, i) => (i / predActData.freq.length) * 500)
            .attr('height', (d) => height - zscale(d) + chartMargin.bottom - 20)
            .attr('y', (d) => zscale(d) - chartMargin.bottom + 40);
    }

    var fnStack = [showActPoints, showPredPoints, showBars];
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
            .delay(200)
            .duration(animationLength)
            .ease('linear')
            .attr("stroke-dashoffset", 0)
            .attr('opacity', 1);
    }
}
