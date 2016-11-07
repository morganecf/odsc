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

var likeDistribution = [
    [6858, 16],
    [875, 162],
    [525, 296],
    [373, 421],
    [311, 553],
    [196, 682],
    [189, 809],
    [173, 850],
    [143, 940],
    [116, 1068],
    [112, 1188],
    [109, 1315],
    [74, 1446],
    [70, 1576],
    [65, 1707],
    [1359, 12383],
];

var likeOverTimeDistribution = [
    [50,2, new Date('2015-04-02')],
    [5,10, new Date('2015-05-02')],
    [1000,20, new Date('2015-06-02')],
    [4500,40, new Date('2015-07-02')],
    [350,14, new Date('2015-08-02')],
    [500,13, new Date('2015-09-02')],
    [550,35, new Date('2015-10-02')],
    [1500,39, new Date('2015-11-02')],
    [8000,20, new Date('2015-12-02')],
    [132,20, new Date('2016-01-02')],
    [3666,100, new Date('2016-02-02')],
    [2455,120, new Date('2016-03-02')],
    [2680,130, new Date('2016-04-02')],
    [6000,320, new Date('2016-05-02')],
    [6112,432, new Date('2016-06-02')],
    [3980,666, new Date('2016-07-02')],
    [800,1050, new Date('2016-08-02')],
    [900,1000, new Date('2016-09-02')],
    [1000,6500, new Date('2016-10-20')],
];

// actual likes, freq, predicted likes
var likesOverTopic9Distribution = [
    [2600,5200,2400],
    [1777,1450,1277],
    [1700,950,1650],
    [1000,880,1000],
    [1350,824,1250],
    [950,900,850],
    [600,755,888],
    [750,740,800],
    [750,730,800],
    [550,200,439],
    [760,1,2300],
    [1633,20,800],
    [2350,10,950],
    [3400,5,684],
];

likesOverTopic9Distribution.forEach((d, i) => {
    if (i > 0 && i < 11) d[1] += 200;
});

function likeHistogram() {
    var jWidth = 1400;
    var jHeight = 500;

    var margin = {top: 20, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#like-histogram').html('');

    var svg = d3.select('#like-histogram').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    var xextent = [0, 1900];
    var yextent = [0, 7000];

    var barWidth = width / likeDistribution.length;

    var xscale = d3.scale.linear().range([0, width]).domain(xextent);
    var yscale = d3.scale.linear().range([height, 0]).domain(yextent);

    var xaxis = d3.svg.axis().scale(xscale).orient('bottom');
    var yaxis = d3.svg.axis().scale(yscale).orient('left');

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

    var bars = svg.selectAll('.heart-bar')
        .data(likeDistribution)
        .enter()
        .append('rect')
        .attr('class', 'heart-bar')
        .attr('width', barWidth)
        .attr('x', (d, i) => (i * barWidth) + margin.left)
        .attr('y', height + chartMargin.bottom)
        .attr('height', 0);

    // Labels
    svg.append('text')
        .attr('x', 75)
        .attr('y', height + chartMargin.bottom + 50)
        .attr('class', 'axis-label')
        .text('Number of likes');
    svg.append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90) translate(-' + (height + 25) + ', 25)')
        .text('Number of memes');

    function showBars() {
        bars.transition()
            .duration(500)
            .delay((d, i) => (i / likeDistribution.length) * 500)
            .attr('height', (d) => height - yscale(d[0]) + chartMargin.bottom - 20)
            .attr('y', (d) => yscale(d[0]) - chartMargin.bottom + 40);
    }

    var fnStack = [showBars];
    $(document).keypress(function(e) {
        if (e.which === 109) {
            if (fnStack.length > 0) fnStack.shift()();
        }
    });
}

function likeOverTime() {
    var jWidth = 1400;
    var jHeight = 500;

    var margin = {top: 20, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#target-histogram').html('');

    var svg = d3.select('#target-histogram').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    var xextent = d3.extent(likeOverTimeDistribution, d => d[2]);
    var yextent = [0, 8500];
    var zextent = [0, 6600];

    var barWidth = width / likeOverTimeDistribution.length;

    var xscale = d3.scale.linear().range([0, width]).domain(xextent);
    var yscale = d3.scale.linear().range([height, 0]).domain(yextent);
    var zscale = d3.scale.linear().range([height, 0]).domain(zextent);

    var xaxis = d3.svg.axis().scale(xscale).orient('bottom').tickFormat(d => d3.time.format('%Y-%m-%d')(new Date(d)));
    var yaxis = d3.svg.axis().scale(yscale).orient('left').tickFormat(formatPrefix());
    var zaxis = d3.svg.axis().scale(zscale).orient('right').tickFormat(formatPrefix());

    var line = d3.svg.line()
        .x((d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .y((d) => yscale(d[0]) + 20)
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
        .attr('d', line(likeOverTimeDistribution))
        .attr('opacity', 0);

    var bars = svg.selectAll('.heart-bar')
        .data(likeOverTimeDistribution)
        .enter()
        .append('rect')
        .attr('class', 'heart-bar')
        .attr('width', barWidth)
        .attr('x', (d, i) => (i * barWidth) + margin.left)
        .attr('y', height + chartMargin.bottom)
        .attr('height', 0)
        .attr('opacity', 0.25);

    var points = svg.selectAll('.target-point')
        .data(likeOverTimeDistribution)
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
        .text('Date');
    svg.append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90) translate(-' + (height + 25) + ', 35)')
        .text('Average Likes');

    // hidden label
    var zlabel = svg.append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90) translate(-' + (height + 25) + ', ' + (width + chartMargin.left + 25) + ')')
        .text('Number of memes')
        .attr('opacity', 0);

    function showPoints() {
        points.transition()
            .duration(500)
            .delay((d, i) => i * 40)
            .attr('cy', (d) => yscale(d[0]) + 20)
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
            .delay((d, i) => (i / likeOverTimeDistribution.length) * 500)
            .attr('height', (d) => height - zscale(d[1]) + chartMargin.bottom - 20)
            .attr('y', (d) => zscale(d[1]) - chartMargin.bottom + 40);
    }

    var fnStack = [showPoints, showLine, showBars];
    $(document).keypress(function(e) {
        if (e.which === 109) {
            if (fnStack.length > 0) fnStack.shift()();
        }
    });
}

function topic9() {
    var jWidth = 1400;
    var jHeight = 600;

    var margin = {top: 20, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#topic-word-distribution').html('');

    var svg = d3.select('#topic-word-distribution').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    // var startpos = (margin.left + (width / 2) - 300);
    var startpos = margin.left + 50;

    // % Axis
    var extent = [0, 0.02];
    var scale = d3.scale.linear().range([0, width]).domain(extent);
    var axis = d3.svg.axis().scale(scale).orient('top');
    var axisSvg = svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + startpos + ', ' + (margin.top + 50) + ')')
      .call(axis);

   // The "self-referential deep internet alt-right" topic
    var words = [
        ['trump', 0.016],
        ['like', 0.009],
        ['white', 0.009],
        ['just', 0.006],
        ['frog', 0.005],
        ['cuck', 0.004],
        ['new', 0.004],
        ['meme', 0.004],
        ['somebody', 0.003],
        ['pepe', 0.0003],
    ];

    // Words
    svg.selectAll('.topic-word')
        .data(words)
        .enter()
        .append('text')
        .attr('x', margin.left - 50)
        .attr('y', (d, i) => (margin.top + 90) + (i * 40))
        .attr('class', 'topic-word')
        .attr('opacity', 1)
        .text(d => d[0]);

    // Background
    var bk = svg.selectAll('.topic-word-bk')
        .data(words)
        .enter()
        .append('rect')
        .attr('class', 'topic-word-bk')
        .attr('x', startpos)
        .attr('y', (d, i) => (margin.top + 70) + (i * 40))
        .attr('width', width)
        .attr('height', 21)
        .attr('opacity', 1);

    // Probabilities
    var imp = svg.selectAll('.topic-word-prob')
        .data(words)
        .enter()
        .append('rect')
        .attr('class', 'topic-word-prob')
        .attr('x', startpos)
        .attr('y', (d, i) => (margin.top + 70) + (i * 40) + 7)
        .attr('width', 0)
        .attr('height', 7)
        .attr('opacity', 0);

    function showProbabilities() {
        imp.transition()
            .duration(400)
            .delay((d, i) => i * 40)
            .attr('width', d => scale(d[1]))
            .attr('opacity', 1);
    }

    var fnStack = [showProbabilities];
    $(document).keypress(function(e) {
        if (e.which === 109) {
            if (fnStack.length > 0) fnStack.shift()();
        }
    });
}

function topic4() {
    var jWidth = 1400;
    var jHeight = 600;

    var margin = {top: 20, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#topic-word-distribution-4').html('');

    var svg = d3.select('#topic-word-distribution-4').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    // var startpos = (margin.left + (width / 2) - 300);
    var startpos = margin.left + 50;

    // % Axis
    var extent = [0, 0.08];
    var scale = d3.scale.linear().range([0, (width / 2) + 230]).domain(extent);
    var axis = d3.svg.axis().scale(scale).orient('top');
    var axisSvg = svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + startpos + ', ' + (margin.top + 50) + ')')
      .call(axis);

    var words = [
        ['trump', 0.065],
        ['donald', 0.017],
        ['wall', 0.012],
        ['hillary', 0.012],
        ['america', 0.011],
        ['will', 0.010],
        ['says', 0.009],
        ['great', 0.009],
        ['like', 0.008],
        ['make', 0.007],
    ];

    // Words
    svg.selectAll('.topic-word')
        .data(words)
        .enter()
        .append('text')
        .attr('x', margin.left - 50)
        .attr('y', (d, i) => (margin.top + 90) + (i * 40))
        .attr('class', 'topic-word')
        .attr('opacity', 1)
        .text(d => d[0]);

    // Background
    var bk = svg.selectAll('.topic-word-bk')
        .data(words)
        .enter()
        .append('rect')
        .attr('class', 'topic-word-bk')
        .attr('x', startpos)
        .attr('y', (d, i) => (margin.top + 70) + (i * 40))
        .attr('width', (width / 2) + 230)
        .attr('height', 21)
        .attr('opacity', 1);

    // Probabilities
    var imp = svg.selectAll('.topic-word-prob')
        .data(words)
        .enter()
        .append('rect')
        .attr('class', 'topic-word-prob')
        .attr('x', startpos)
        .attr('y', (d, i) => (margin.top + 70) + (i * 40) + 7)
        .attr('width', 0)
        .attr('height', 7)
        .attr('opacity', 0);

    function showProbabilities() {
        imp.transition()
            .duration(400)
            .delay((d, i) => i * 40)
            .attr('width', d => scale(d[1]))
            .attr('opacity', 1);
    }

    var fnStack = [showProbabilities];
    $(document).keypress(function(e) {
        if (e.which === 109) {
            if (fnStack.length > 0) fnStack.shift()();
        }
    });
}

function memeTopicDistribution() {
    var jWidth = 1400;
    var jHeight = 600;

    var margin = {top: 20, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#meme-topic-distribution').html('');

    var svg = d3.select('#meme-topic-distribution').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    var hillaryTopicText = svg.append('text')
        .attr('x', 1130)
        .attr('y', 150)
        .text('');
    var trumpTopicText = svg.append('text')
        .attr('x', 1130)
        .attr('y', 455)
        .text('');

    var topicDistribution = {
      hillary: [
        ['topic18', 0.37],
        ['topic13', 0.317421],
        ['topic19', 0.152813],
        ['topic11', 0.103851],
        ['topic15', 0.09],
        ['topic14', 0.04],
        ['topic12', 0.03],
      ],
      trump: [
        ['topic4', 0.475],
        ['topic3', 0.28],
        ['topic0', 0.15],
        ['topic6', 0.09],
        ['topic7', 0.05]],
    };

    var colors = {
        hillary: d3.scale.linear().domain([0, topicDistribution.hillary.length]).range(['#fff', '#0057b8']),
        trump: d3.scale.linear().domain([0, topicDistribution.trump.length]).range(['#fff', '#e4002b']),
    };

    var tau = 2 * Math.PI;

    var arc = d3.svg.arc()
        .innerRadius(95)
        .outerRadius(140)
        .startAngle(0);

    function addBackground(center, x, y) {
      var g = svg.append("g").attr("transform", "translate(" + x + "," + y + ")");
      var background1 = g.append("path")
        .datum({endAngle: tau})
        .style("fill", "#ddd")
        .attr("d", arc);
      return g;
    }

    function addArcs(candidate, group) {
      var data = topicDistribution[candidate];
      var data_reverse = data.slice().reverse();
      var topic_arcs = [];
      data_reverse.forEach((d, i) => {
        var topic_arc = group.append('path')
          .attr('id', d[0])
          .datum({endAngle: 0 * tau})
          .style('fill', colors[candidate](i + 1))
          .attr('d', arc);
        topic_arcs.push(topic_arc);
      });
      topic_arcs.reverse();
      return topic_arcs;
    }

    var startx = 950;
    var hillaryBg = addBackground(250, startx, 150);
    var trumpBg = addBackground(750, startx, 450);

    var hillaryArcs = addArcs('hillary', hillaryBg);
    var trumpArcs = addArcs('trump', trumpBg);

    function showTopic(topicArcs, candidate, i) {
      var angle = d3.sum(topicDistribution[candidate], (d, j) => {
        if (j <= i) return d[1];
        return 0;
      });
      topicArcs[i].transition()
        .duration(200)
        .attrTween('d', arcTween(angle * tau, arc));
    }

    function animateHillary() {
      setTimeout(() => showTopic(hillaryArcs, 'hillary', 0), 0);
      setTimeout(() => showTopic(hillaryArcs, 'hillary', 1), 200);
      setTimeout(() => showTopic(hillaryArcs, 'hillary', 2), 400);
      setTimeout(() => showTopic(hillaryArcs, 'hillary', 3), 600);
      setTimeout(() => showTopic(hillaryArcs, 'hillary', 4), 800);
      setTimeout(() => showTopic(hillaryArcs, 'hillary', 5), 1000);
      setTimeout(() => showTopic(hillaryArcs, 'hillary', 6), 1200);
      setTimeout(() => showTopic(hillaryArcs, 'hillary', 7), 1400);
    }

    function animateTrump() {
      setTimeout(() => showTopic(trumpArcs, 'trump', 0), 0);
      setTimeout(() => showTopic(trumpArcs, 'trump', 1), 200);
      setTimeout(() => showTopic(trumpArcs, 'trump', 2), 400);
      setTimeout(() => showTopic(trumpArcs, 'trump', 3), 600);
      setTimeout(() => showTopic(trumpArcs, 'trump', 4), 800);
    }

    function animate() {
      animateHillary();
      animateTrump();
    }

    function unhighlightArc(arcs, i) {
        arcs[i].transition()
            .duration(400)
            .attr('stroke-width', 0);
    }

    function highlightArc(arcs, i) {
        arcs[i].transition()
            .duration(400)
            .attr('stroke-opacity', 0.6)
            .attr('stroke', 'black')
            .attr('stroke-width', 3);
    }

    var fnStack = [
        animate,
        () => {
            hillaryTopicText.text('topic18');
            highlightArc(hillaryArcs, 0);
        },
        () => {
            hillaryTopicText.text('topic13');
            highlightArc(hillaryArcs, 1);
            unhighlightArc(hillaryArcs, 0);
        },
        () => {
            hillaryTopicText.text('');
            trumpTopicText.text('topic4');
            highlightArc(trumpArcs, 0),
            unhighlightArc(hillaryArcs, 1);
        },
    ];
    $(document).keypress(function(e) {
        if (e.which === 109) {
          if (fnStack.length > 0) fnStack.shift()();
        }
    });
}

function likesOverTopic4() {
    var jWidth = 1400;
    var jHeight = 400;

    var margin = {top: 20, right: 10, bottom: 30, left: 80};
    var width = jWidth - 200 - margin.left - margin.right;
    var height = jHeight - margin.top - margin.bottom;
    var chartMargin = {left: 100, bottom: 20};

    $('#topic-histogram').html('');

    var svg = d3.select('#topic-histogram').append('svg')
        .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
        .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 40);

    var xextent = [0, 1.0];
    var yextent = [0, 3500];
    var zextent = [0, 5500];

    var barWidth = width / likesOverTopic9Distribution.length;

    var xscale = d3.scale.linear().range([0, width]).domain(xextent);
    var yscale = d3.scale.linear().range([height, 0]).domain(yextent);
    var zscale = d3.scale.linear().range([height, 0]).domain(zextent);

    var xaxis = d3.svg.axis().scale(xscale).orient('bottom');
    var yaxis = d3.svg.axis().scale(yscale).orient('left').tickFormat(formatPrefix());
    var zaxis = d3.svg.axis().scale(zscale).orient('right').tickFormat(formatPrefix());

    var line = d3.svg.line()
        .x((d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .y((d) => yscale(d[0]) + 20)
        .interpolate('cardinal');

    var predLine = d3.svg.line()
        .x((d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .y((d) => yscale(d[2]) + 20)
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
        .attr('d', line(likesOverTopic9Distribution))
        .attr('opacity', 0);

    var predPath = svg.append('path')
        .attr('class', 'pred-path')
        .attr('d', predLine(likesOverTopic9Distribution))
        .attr('opacity', 0);

    var bars = svg.selectAll('.heart-bar')
        .data(likesOverTopic9Distribution)
        .enter()
        .append('rect')
        .attr('class', 'heart-bar')
        .attr('width', barWidth)
        .attr('x', (d, i) => (i * barWidth) + margin.left)
        .attr('y', height + chartMargin.bottom)
        .attr('height', 0)
        .attr('opacity', 0.25);

    var points = svg.selectAll('.target-point')
        .data(likesOverTopic9Distribution)
        .enter()
        .append('circle')
        .attr('class', 'target-point')
        .attr('r', 6)
        .attr('cx', (d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .attr('cy', 0)
        .attr('opacity', 0);

    var predPoints = svg.selectAll('.pred-point')
        .data(likesOverTopic9Distribution)
        .enter()
        .append('circle')
        .attr('class', 'pred-point')
        .attr('r', 6)
        .attr('cx', (d, i) => (i * barWidth) + (barWidth / 2) + margin.left)
        .attr('cy', 0)
        .attr('opacity', 0);

    // Labels
    svg.append('text')
        .attr('x', 75)
        .attr('y', height + chartMargin.bottom + 50)
        .attr('class', 'axis-label')
        .text('Percentage of Topic 4 in meme');
    svg.append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90) translate(-' + (height + 25) + ', 35)')
        .text('Average Likes');

    // hidden label
    var zlabel = svg.append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90) translate(-' + (height + 25) + ', ' + (width + chartMargin.left + 25) + ')')
        .text('Number of memes')
        .attr('opacity', 0);

    function showPoints() {
        points.transition()
            .duration(500)
            .delay((d, i) => i * 40)
            .attr('cy', (d) => yscale(d[0]) + 20)
            .attr('opacity', 1);
    }

    function showLine() {
        animateLine(targetPath, 500);
    }

    function showPredictPoints() {
        predPoints.transition()
            .duration(500)
            .delay((d, i) => i * 40)
            .attr('cy', d => yscale(d[2]) + 20)
            .attr('opacity', 1);
    }

    function showPredictLine() {
        animateLine(predPath, 500);
    }

    function showBars() {
        taxisSvg.call(zaxis);
        zlabel.attr('opacity', 1);
        bars.transition()
            .duration(500)
            .delay((d, i) => (i / likeOverTimeDistribution.length) * 500)
            .attr('height', (d) => height - zscale(d[1]) + chartMargin.bottom - 20)
            .attr('y', (d) => zscale(d[1]) - chartMargin.bottom + 40);
    }

    var fnStack = [showPoints, showLine, showPredictPoints, showPredictLine, showBars];
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

function formatPrefix(precision) {
    return d => {
        const prefix = d3.formatPrefix(d);
        const scaled = prefix.scale(d);
        return d3.round(scaled, precision || 0) + prefix.symbol;
    };
}

function arcTween(newAngle, arc) {
  return function(d) {
    var interpolate = d3.interpolate(d.endAngle, newAngle);
    return function(t) {
      d.endAngle = interpolate(t);
      return arc(d);
    };
  };
}