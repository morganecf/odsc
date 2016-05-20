function lift() {
  var data = {
    10: [{"x":1,"i":1,"Predicted":"0.5666689451241379","Actual":"0.6"},{"x":2,"i":2,"Predicted":"0.6585410922228083","Actual":"0.6521739130434783"},{"x":3,"i":3,"Predicted":"0.699755696012468","Actual":"0.7681159420289855"},{"x":4,"i":4,"Predicted":"0.7335452570000778","Actual":"0.7571428571428571"},{"x":5,"i":5,"Predicted":"0.7645841981452939","Actual":"0.7246376811594203"},{"x":6,"i":6,"Predicted":"0.791100268395204","Actual":"0.782608695652174"},{"x":7,"i":7,"Predicted":"0.8174220718110192","Actual":"0.7571428571428571"},{"x":8,"i":8,"Predicted":"0.8396714900747562","Actual":"0.7681159420289855"},{"x":9,"i":9,"Predicted":"0.8640668944544947","Actual":"0.8985507246376812"},{"x":10,"i":10,"Predicted":"0.8967682973598181","Actual":"0.9"}],
    15: [{"x":1,"i":1,"Predicted":"0.5413412362915678","Actual":"0.6170212765957447"},{"x":2,"i":2,"Predicted":"0.629895916797523","Actual":"0.5869565217391305"},{"x":3,"i":3,"Predicted":"0.667128505297254","Actual":"0.6739130434782609"},{"x":4,"i":4,"Predicted":"0.6939552290080111","Actual":"0.782608695652174"},{"x":5,"i":5,"Predicted":"0.7171414975939144","Actual":"0.782608695652174"},{"x":6,"i":6,"Predicted":"0.7387417359824929","Actual":"0.723404255319149"},{"x":7,"i":7,"Predicted":"0.7594931137674309","Actual":"0.7391304347826086"},{"x":8,"i":8,"Predicted":"0.7788179165234368","Actual":"0.7391304347826086"},{"x":9,"i":9,"Predicted":"0.7952156695198791","Actual":"0.782608695652174"},{"x":10,"i":10,"Predicted":"0.8127197510672133","Actual":"0.7872340425531915"},{"x":11,"i":11,"Predicted":"0.8297758945674355","Actual":"0.6521739130434783"},{"x":12,"i":12,"Predicted":"0.8432469215580101","Actual":"0.8478260869565217"},{"x":13,"i":13,"Predicted":"0.8608447052163275","Actual":"0.9130434782608695"},{"x":14,"i":14,"Predicted":"0.8749989660865828","Actual":"0.8913043478260869"},{"x":15,"i":15,"Predicted":"0.9052252692045429","Actual":"0.8936170212765957"}],
    20: [{"x":1,"i":1,"Predicted":"0.5218723102813589","Actual":"0.6285714285714286"},{"x":2,"i":2,"Predicted":"0.6114655799669169","Actual":"0.5714285714285714"},{"x":3,"i":3,"Predicted":"0.6457604558036922","Actual":"0.6764705882352942"},{"x":4,"i":4,"Predicted":"0.6709565676013782","Actual":"0.6285714285714286"},{"x":5,"i":5,"Predicted":"0.6911101780440587","Actual":"0.7428571428571429"},{"x":6,"i":6,"Predicted":"0.7086554939211248","Actual":"0.7941176470588235"},{"x":7,"i":7,"Predicted":"0.7253478402469596","Actual":"0.7428571428571429"},{"x":8,"i":8,"Predicted":"0.7417426737531958","Actual":"0.7714285714285715"},{"x":9,"i":9,"Predicted":"0.7568847091543682","Actual":"0.7352941176470589"},{"x":10,"i":10,"Predicted":"0.7720637017364785","Actual":"0.7142857142857143"},{"x":11,"i":11,"Predicted":"0.7850213977765398","Actual":"0.8"},{"x":12,"i":12,"Predicted":"0.7973579293261818","Actual":"0.7647058823529411"},{"x":13,"i":13,"Predicted":"0.8101672076496925","Actual":"0.7714285714285715"},{"x":14,"i":14,"Predicted":"0.8246769359723458","Actual":"0.7428571428571429"},{"x":15,"i":15,"Predicted":"0.8338459156427032","Actual":"0.6764705882352942"},{"x":16,"i":16,"Predicted":"0.8453306195230362","Actual":"0.8571428571428571"},{"x":17,"i":17,"Predicted":"0.8591389117758593","Actual":"0.9142857142857143"},{"x":18,"i":18,"Predicted":"0.8691398178001487","Actual":"0.8823529411764706"},{"x":19,"i":19,"Predicted":"0.8820876495733926","Actual":"0.8857142857142857"},{"x":20,"i":20,"Predicted":"0.9114489451462436","Actual":"0.9142857142857143"}],
    30: [{"x":1,"i":1,"Predicted":"0.49550906049229043","Actual":"0.625"},{"x":2,"i":2,"Predicted":"0.5891661153864658","Actual":"0.6086956521739131"},{"x":3,"i":3,"Predicted":"0.618425567521129","Actual":"0.5652173913043478"},{"x":4,"i":4,"Predicted":"0.6413662660739171","Actual":"0.6086956521739131"},{"x":5,"i":5,"Predicted":"0.6582927544987014","Actual":"0.6956521739130435"},{"x":6,"i":6,"Predicted":"0.6759642560958066","Actual":"0.6521739130434783"},{"x":7,"i":7,"Predicted":"0.6884540582897619","Actual":"0.7391304347826086"},{"x":8,"i":8,"Predicted":"0.6994563997262603","Actual":"0.8260869565217391"},{"x":9,"i":9,"Predicted":"0.7113566300213819","Actual":"0.7391304347826086"},{"x":10,"i":10,"Predicted":"0.7229263651664468","Actual":"0.8260869565217391"},{"x":11,"i":11,"Predicted":"0.7334817651437434","Actual":"0.5833333333333334"},{"x":12,"i":12,"Predicted":"0.744230401205536","Actual":"0.8695652173913043"},{"x":13,"i":13,"Predicted":"0.7545044802363866","Actual":"0.782608695652174"},{"x":14,"i":14,"Predicted":"0.7644817472984752","Actual":"0.6956521739130435"},{"x":15,"i":15,"Predicted":"0.7747663669010197","Actual":"0.6956521739130435"},{"x":16,"i":16,"Predicted":"0.7828694661458537","Actual":"0.782608695652174"},{"x":17,"i":17,"Predicted":"0.7909654508979491","Actual":"0.782608695652174"},{"x":18,"i":18,"Predicted":"0.799465888141809","Actual":"0.782608695652174"},{"x":19,"i":19,"Predicted":"0.8078563681676351","Actual":"0.782608695652174"},{"x":20,"i":20,"Predicted":"0.8173804930126426","Actual":"0.7916666666666666"},{"x":21,"i":21,"Predicted":"0.8270311620266225","Actual":"0.6956521739130435"},{"x":22,"i":22,"Predicted":"0.8325206271082485","Actual":"0.6086956521739131"},{"x":23,"i":23,"Predicted":"0.8385472464754252","Actual":"0.8695652173913043"},{"x":24,"i":24,"Predicted":"0.8479465966405949","Actual":"0.8260869565217391"},{"x":25,"i":25,"Predicted":"0.8568824481793523","Actual":"0.9130434782608695"},{"x":26,"i":26,"Predicted":"0.8648069622533028","Actual":"0.9130434782608695"},{"x":27,"i":27,"Predicted":"0.870511272930829","Actual":"0.8695652173913043"},{"x":28,"i":28,"Predicted":"0.8794866592423368","Actual":"0.9130434782608695"},{"x":29,"i":29,"Predicted":"0.8905590679818551","Actual":"0.9130434782608695"},{"x":30,"i":30,"Predicted":"0.919280378709619","Actual":"0.875"}],
    60: [{"x":1,"i":1,"Predicted":"0.4466415644830873","Actual":"0.6666666666666666"},{"x":2,"i":2,"Predicted":"0.5443765565014935","Actual":"0.5833333333333334"},{"x":3,"i":3,"Predicted":"0.5793921280029629","Actual":"0.6363636363636364"},{"x":4,"i":4,"Predicted":"0.5981256038213435","Actual":"0.5833333333333334"},{"x":5,"i":5,"Predicted":"0.610556085229107","Actual":"0.6363636363636364"},{"x":6,"i":6,"Predicted":"0.6256392596221492","Actual":"0.5"},{"x":7,"i":7,"Predicted":"0.6361114732214421","Actual":"0.36363636363636365"},{"x":8,"i":8,"Predicted":"0.6461831595220191","Actual":"0.8333333333333334"},{"x":9,"i":9,"Predicted":"0.6549483070568587","Actual":"0.8181818181818182"},{"x":10,"i":10,"Predicted":"0.6613584979870571","Actual":"0.5833333333333334"},{"x":11,"i":11,"Predicted":"0.6725370961777863","Actual":"0.5833333333333334"},{"x":12,"i":12,"Predicted":"0.6797029760063741","Actual":"0.7272727272727273"},{"x":13,"i":13,"Predicted":"0.6859815194974104","Actual":"0.75"},{"x":14,"i":14,"Predicted":"0.6911513733359637","Actual":"0.7272727272727273"},{"x":15,"i":15,"Predicted":"0.6962010742397942","Actual":"0.75"},{"x":16,"i":16,"Predicted":"0.7030076638933141","Actual":"0.9090909090909091"},{"x":17,"i":17,"Predicted":"0.7086819008490376","Actual":"0.6666666666666666"},{"x":18,"i":18,"Predicted":"0.7142745163912122","Actual":"0.8181818181818182"},{"x":19,"i":19,"Predicted":"0.7201860282740385","Actual":"0.9166666666666666"},{"x":20,"i":20,"Predicted":"0.7259158235945288","Actual":"0.7272727272727273"},{"x":21,"i":21,"Predicted":"0.7299890008179427","Actual":"0.5833333333333334"},{"x":22,"i":22,"Predicted":"0.7369745294695442","Actual":"0.5833333333333334"},{"x":23,"i":23,"Predicted":"0.7419884045483134","Actual":"1"},{"x":24,"i":24,"Predicted":"0.7462855648079899","Actual":"0.75"},{"x":25,"i":25,"Predicted":"0.7514529837092894","Actual":"0.7272727272727273"},{"x":26,"i":26,"Predicted":"0.7573016853862257","Actual":"0.8333333333333334"},{"x":27,"i":27,"Predicted":"0.7618615514374208","Actual":"0.6363636363636364"},{"x":28,"i":28,"Predicted":"0.7668835935044417","Actual":"0.75"},{"x":29,"i":29,"Predicted":"0.7723875279964972","Actual":"0.7272727272727273"},{"x":30,"i":30,"Predicted":"0.7769469692301653","Actual":"0.6666666666666666"},{"x":31,"i":31,"Predicted":"0.7809263155300507","Actual":"0.6666666666666666"},{"x":32,"i":32,"Predicted":"0.7849892668176388","Actual":"0.9090909090909091"},{"x":33,"i":33,"Predicted":"0.7891459334020213","Actual":"0.8333333333333334"},{"x":34,"i":34,"Predicted":"0.7929503790753248","Actual":"0.7272727272727273"},{"x":35,"i":35,"Predicted":"0.7974867099343156","Actual":"0.8333333333333334"},{"x":36,"i":36,"Predicted":"0.8016249916408927","Actual":"0.7272727272727273"},{"x":37,"i":37,"Predicted":"0.8055942844380719","Actual":"0.5833333333333334"},{"x":38,"i":38,"Predicted":"0.810324095872613","Actual":"1"},{"x":39,"i":39,"Predicted":"0.8145963166569694","Actual":"0.75"},{"x":40,"i":40,"Predicted":"0.8201646693683156","Actual":"0.8333333333333334"},{"x":41,"i":41,"Predicted":"0.8253507969862881","Actual":"0.8181818181818182"},{"x":42,"i":42,"Predicted":"0.828571496646929","Actual":"0.5833333333333334"},{"x":43,"i":43,"Predicted":"0.8311660633444553","Actual":"0.5454545454545454"},{"x":44,"i":44,"Predicted":"0.833762310558392","Actual":"0.6666666666666666"},{"x":45,"i":45,"Predicted":"0.8366169734874721","Actual":"0.8181818181818182"},{"x":46,"i":46,"Predicted":"0.8403166633810488","Actual":"0.9166666666666666"},{"x":47,"i":47,"Predicted":"0.8461644921408272","Actual":"0.7272727272727273"},{"x":48,"i":48,"Predicted":"0.8495801924320485","Actual":"0.9166666666666666"},{"x":49,"i":49,"Predicted":"0.8547481076835147","Actual":"0.9090909090909091"},{"x":50,"i":50,"Predicted":"0.8588389269672034","Actual":"0.9166666666666666"},{"x":51,"i":51,"Predicted":"0.8634638003358311","Actual":"0.9166666666666666"},{"x":52,"i":52,"Predicted":"0.8662722297996356","Actual":"0.9090909090909091"},{"x":53,"i":53,"Predicted":"0.8687371318572787","Actual":"0.75"},{"x":54,"i":54,"Predicted":"0.8724466995565201","Actual":"1"},{"x":55,"i":55,"Predicted":"0.8773380936439152","Actual":"0.9166666666666666"},{"x":56,"i":56,"Predicted":"0.8818305489860692","Actual":"0.9090909090909091"},{"x":57,"i":57,"Predicted":"0.8870728810412496","Actual":"0.8333333333333334"},{"x":58,"i":58,"Predicted":"0.89436218100797","Actual":"1"},{"x":59,"i":59,"Predicted":"0.9093665333364317","Actual":"0.9166666666666666"},{"x":60,"i":60,"Predicted":"0.9291942240828064","Actual":"0.8333333333333334"}],
  };

  var jWidth = 1000;
  var jHeight = 400;

  var margin = {top: 20, right: 10, bottom: 30, left: 80};
  var width = jWidth - 200 - margin.left - margin.right;
  var height = jHeight - margin.top - margin.bottom;
  var chartMargin = {left: 100, bottom: 20};

  $('#lift').html('');

  var svg = d3.select('#lift').append('svg')
      .attr('width', width + margin.left + margin.right + chartMargin.left + 40)
      .attr('height', height + margin.bottom + margin.top + chartMargin.bottom + 80);

  var xaxisSvg = svg.append('g')
    .attr('class', 'axis xaxis')
    .attr('transform', 'translate(' + margin.left + ',' + (height + 20) + ')');
  var yaxisSvg = svg.append('g')
    .attr('class', 'axis yaxis')
    .attr('transform', 'translate(' + margin.left + ', 20)');

  var xscale = d3.scale.linear().range([0, width]);
  var yscale = d3.scale.linear().range([height, 0]);

  var xaxis = d3.svg.axis().scale(xscale).orient('bottom');
  var yaxis = d3.svg.axis().scale(yscale).orient('left');

  var line = d3.svg.line()
    .x((d, i) => xscale(i + 1) + margin.left)
    .y((d) => yscale(d) + 20)
    .interpolate('cardinal');

  var pointScale = d3.scale.linear().domain([10, 60]).range([6, 3]);

  var actPointsSvg = svg.selectAll('.act-point');
  var predPointsSvg = svg.selectAll('.pred-point');
  var actLine = svg.append('path').attr('class', 'act-line');
  var predLine = svg.append('path').attr('class', 'pred-line');

  var actLine_init = svg.append('path').attr('class', 'act-line');
  var predLine_init = svg.append('path').attr('class', 'pred-line');

  // Labels
  svg.append('text')
      .attr('x', 75)
      .attr('y', height + chartMargin.bottom + 50)
      .attr('class', 'axis-label')
      .text('Percentile');
  svg.append('text')
      .attr('class', 'axis-label')
      .attr('transform', 'rotate(-90) translate(-' + (height + 25) + ', 35)')
      .text('1 - (break up rate)');

  // Explanation thing
  var liftExp = svg.append('text')
    .attr('x', 75)
    .attr('y', height + chartMargin.bottom + 100)
    .attr('class', 'lift-explanation');

  var actPoints;
  var predPoints;

  var rawData;
  var pred;
  var act;
  var xextent;
  var yextent = [0, 1];

  var drawActPoints = function(nbins) {
    actPoints = actPointsSvg.data(act)
      .enter()
      .append('circle')
      .attr('class', 'act-point')
      .attr('r', 0)
      .attr('cx', (d, i) => xscale(i + 1) + margin.left)
      .attr('cy', (d) => yscale(d) + 20);
    actPoints.transition()
      .duration(400)
      .attr('r', pointScale(nbins));
  };
  var drawPredPoints = function(nbins) {
    predPoints = predPointsSvg.data(pred)
      .enter()
      .append('circle')
      .attr('class', 'pred-point')
      .attr('r', 0)
      .attr('cx', (d, i) => xscale(i + 1) + margin.left)
      .attr('cy', (d) => yscale(d) + 20);
    predPoints.transition()
      .duration(400)
      .attr('r', pointScale(nbins));
  };

  var binStack = [];

  function drawLift(nbins, init) {
    binStack.push(nbins);

    rawData = data[nbins];
    pred = rawData.map((d) => parseFloat(d.Predicted));
    act = rawData.map((d) => parseFloat(d.Actual));

    xextent = [1, nbins];
    xscale.domain(xextent);
    yscale.domain(yextent);

    xaxisSvg.transition().duration(400).call(xaxis);
    yaxisSvg.transition().duration(400).call(yaxis);

    if (!init) {
      actPoints.transition()
        .duration(400)
        .attr('r', 0)
        .each('end', function(d, i) {
          if (i === binStack[binStack.length - 2] - 1) drawActPoints(nbins);
        });
      predPoints.transition()
        .duration(400)
        .attr('r', 0)
        .each('end', function(d, i) {
          if (i === binStack[binStack.length - 2] - 1) drawPredPoints(nbins);
        });

      actLine.transition().duration(400).attr('d', line(act));
      predLine.transition().duration(400).attr('d', line(pred));
    }
  }

  var tscale;
  var pscale;
  var nscale;

  drawLift(10, true);

  $('select').change(() => drawLift(parseInt($('select option:selected').text())));

  function createStats() {
    var stats = ['Positives', 'Negatives', 'True Positives', 'True Negatives', 'Accuracy', 'Precision'];
    var P = 100;
    var N = 100;
    var TP = 80;
    var TN = 70;
    var accuracy = (TP + TN) / (P + N);
    var precision = TP / P;
    var statVals = [P, N, TP, TN];

    var textStart = chartWidth + margin.left + 60;
    var barStart = textStart + 120;
    var barTotalWidth = width - chartWidth - 30;

    var textent = [0, P + N];
    var pextent = [0, P];
    var nextent = [0, N];

    var range = [0, barTotalWidth];

    tscale = d3.scale.linear().domain(textent).range(range);
    pscale = d3.scale.linear().domain(pextent).range(range);
    nscale = d3.scale.linear().domain(nextent).range(range);

    // Text
    svg.selectAll('.lift-stat')
      .data(stats)
      .enter()
      .append('text')
      .attr('class', 'lift-stat')
      .attr('x', textStart)
      .attr('y', (d, i) => (i * 50) + 50)
      .text((d) => d);

    // Bar stats - background
    svg.selectAll('.lift-bar-background')
      .data(stats.slice(0, 4))
      .enter()
      .append('rect')
      .attr('class', 'lift-bar-background')
      .attr('x', barStart)
      .attr('y', (d, i) => (i * 50) + 40)
      .attr('width', barTotalWidth)
      .attr('height', 10);

    // Bar stats - foreground
    svg.selectAll('.lift-bar')
      .data(statVals)
      .enter()
      .append('rect')
      .attr('class', (d, i) => {
        if (i < 2) return 'lift-bar lift-bar-act';
        return 'lift-bar lift-bar-pred';
      })
      .attr('id', (d, i) => 'lift-bar-' + i)
      .attr('x', barStart)
      .attr('y', (d, i) => (i * 50) + 40)
      .attr('width', 0)
      .attr('height', 10);
  }

  function showPred() {
    predPoints = predPointsSvg.data(pred)
      .enter()
      .append('circle')
      .attr('class', 'pred-point')
      .attr('r', 0)
      .attr('cx', (d, i) => xscale(i + 1) + margin.left)
      .attr('cy', 0);
    predPoints.transition()
      .duration(400)
      .delay((d, i) => i * 40)
      .attr('r', pointScale(10))
      .attr('cy', (d) => yscale(d) + 20);

    svg.selectAll('.lift-bar')
      .transition()
      .duration(400)
      .attr('width', (d, i) => {
        // if (i < 2) return tscale(d);
        if (i === 2) return pscale(d);
        if (i === 3) return nscale(d);
        return 0;
      });
  }
  function showAct() {
    actPoints = actPointsSvg.data(act)
      .enter()
      .append('circle')
      .attr('class', 'act-point')
      .attr('r', 0)
      .attr('cx', (d, i) => xscale(i + 1) + margin.left)
      .attr('cy', 0);
    actPoints.transition()
      .duration(400)
      .delay((d, i) => i * 40)
      .attr('r', pointScale(10))
      .attr('cy', (d) => yscale(d) + 20);
    svg.selectAll('.lift-bar')
      .transition()
      .duration(400)
      .attr('width', (d, i) => {
        if (i < 2) return tscale(d);
        if (i === 2) return pscale(d);
        if (i === 3) return nscale(d);
      });
  }

  function showLines() {
    actLine_init.attr('d', line(act)).attr('opacity', 0);
    predLine_init.attr('d', line(pred)).attr('opacity', 0);
    animateLine_lift(actLine_init, actLine, line(act), 400);
    animateLine_lift(predLine_init, predLine, line(pred), 400);
  }

  var r = (n) => {
    var o = Math.random() < 0.5 ? -1 : 1;
    return o * Math.random() * n;
  };

  function notConfident() {
    actPoints.transition().duration(200).attr('opacity', 0.2);
    predPoints.transition().duration(200).attr('opacity', 0.2);
    actLine.transition().duration(200).attr('opacity', 0.2);

    liftExp.text('Classifier is not confident');

    // flat prediction, similar actual
    var newPred = pred.map((d) => 0.7 + r(0.02));
    predLine.transition().duration(400).attr('d', line(newPred));
  }
  function notConfidentBadClassifier() {
    // actual more erratic
    predLine.transition().duration(200).attr('opacity', 0.2);
    var newAct = act.map((d) => d + r(0.1));
    actLine.transition().duration(400).attr('d', line(newAct)).attr('opacity', 1);

    liftExp.text('Classifier is bad and not confident');
  }
  function confidentBadClassifier() {
    // more lift, actual erratic
    var newPred = d3.range(10).map((d, i) => 0.4 + (i * 0.05) + r(0.05));
    newPred[newPred.length - 1] = 1;
    var newAct = act.map((d) => d + r(0.3));
    predLine.transition().duration(400).attr('d', line(newPred)).attr('opacity', 1);
    actLine.transition().duration(400).attr('d', line(newAct)).attr('opacity', 1);

    liftExp.text('Classifier suffers from Dunning-Kruger effect');
  }

  var fnStack = [showPred, showAct, showLines, notConfident, notConfidentBadClassifier, confidentBadClassifier];
  $(document).keypress(function(e) {
      if (e.which === 109) {
          if (fnStack.length > 0) fnStack.shift()();
      }
  });

  function animateLine_lift(path, path2, lineData, animationLength) {
    var pathLength = path.node().getTotalLength();
    path.attr("stroke-dasharray", pathLength + " " + pathLength)
        .attr("stroke-dashoffset", pathLength)
        .transition()
        .delay(animationLength)
        .duration(animationLength)
        .ease('linear')
        .attr("stroke-dashoffset", 0)
        .attr('opacity', 1)
        .each('end', function() {
          path.remove();
          path2.attr('d', lineData);
        });
  }
}

