function lift() {
  // 60 bins
  var data = {60: [{"Predicted": "-480.805753643382", "x": 0, "Actual": "61.544502617801044", "i": 0}, {"Predicted": "-309.6694204240863", "x": 1, "Actual": "3.7853403141361257", "i": 1}, {"Predicted": "-285.49411125468026", "x": 2, "Actual": "1.4659685863874345", "i": 2}, {"Predicted": "-276.6946777103781", "x": 3, "Actual": "0.4293193717277487", "i": 3}, {"Predicted": "-267.0193842136607", "x": 4, "Actual": "1.4345549738219896", "i": 4}, {"Predicted": "-256.3204122258743", "x": 5, "Actual": "0.518324607329843", "i": 5}, {"Predicted": "-242.93237614137087", "x": 6, "Actual": "3.136125654450262", "i": 6}, {"Predicted": "-229.26445032083632", "x": 7, "Actual": "4.659685863874346", "i": 7}, {"Predicted": "-212.46418636781652", "x": 8, "Actual": "3.3350785340314135", "i": 8}, {"Predicted": "-190.7034302497534", "x": 9, "Actual": "113.30890052356021", "i": 9}, {"Predicted": "-164.13365566307388", "x": 10, "Actual": "39.303664921465966", "i": 10}, {"Predicted": "-137.56762710276166", "x": 11, "Actual": "101.31413612565446", "i": 11}, {"Predicted": "-116.35165384815058", "x": 12, "Actual": "48.109947643979055", "i": 12}, {"Predicted": "-96.8199924537059", "x": 13, "Actual": "55.06282722513089", "i": 13}, {"Predicted": "-75.81711745764171", "x": 14, "Actual": "92.52879581151832", "i": 14}, {"Predicted": "-57.47553089520779", "x": 15, "Actual": "67.38219895287958", "i": 15}, {"Predicted": "-39.22362865084761", "x": 16, "Actual": "109.66492146596859", "i": 16}, {"Predicted": "-18.435326072948442", "x": 17, "Actual": "81.04188481675392", "i": 17}, {"Predicted": "0.7340275009215649", "x": 18, "Actual": "76.35078534031413", "i": 18}, {"Predicted": "21.363695464765538", "x": 19, "Actual": "122.18848167539267", "i": 19}, {"Predicted": "42.95924294818427", "x": 20, "Actual": "266.7434554973822", "i": 20}, {"Predicted": "67.11508940106071", "x": 21, "Actual": "148.53403141361255", "i": 21}, {"Predicted": "92.54434965815784", "x": 22, "Actual": "214.76439790575915", "i": 22}, {"Predicted": "119.60562068848124", "x": 23, "Actual": "251.17277486910996", "i": 23}, {"Predicted": "146.6019072624523", "x": 24, "Actual": "262.5759162303665", "i": 24}, {"Predicted": "172.98306064864525", "x": 25, "Actual": "293.75392670157066", "i": 25}, {"Predicted": "200.13778842649378", "x": 26, "Actual": "314.81675392670155", "i": 26}, {"Predicted": "227.66149773146662", "x": 27, "Actual": "362.3717277486911", "i": 27}, {"Predicted": "256.60336193976707", "x": 28, "Actual": "665.7853403141361", "i": 28}, {"Predicted": "284.0711752503118", "x": 29, "Actual": "391.9842931937173", "i": 29}, {"Predicted": "316.7384907452592", "x": 30, "Actual": "410.83769633507853", "i": 30}, {"Predicted": "346.65299085897834", "x": 31, "Actual": "722.5706806282723", "i": 31}, {"Predicted": "376.36527085296376", "x": 32, "Actual": "888.696335078534", "i": 32}, {"Predicted": "411.25942262530526", "x": 33, "Actual": "623.020942408377", "i": 33}, {"Predicted": "446.37523422421606", "x": 34, "Actual": "624.4293193717277", "i": 34}, {"Predicted": "484.1150474598392", "x": 35, "Actual": "451.9633507853403", "i": 35}, {"Predicted": "520.2277319754645", "x": 36, "Actual": "460.0418848167539", "i": 36}, {"Predicted": "561.2902198663645", "x": 37, "Actual": "506.4397905759162", "i": 37}, {"Predicted": "601.4619751965358", "x": 38, "Actual": "527.2094240837696", "i": 38}, {"Predicted": "639.5920959323969", "x": 39, "Actual": "391.17277486910996", "i": 39}, {"Predicted": "677.0654019817063", "x": 40, "Actual": "347.35078534031413", "i": 40}, {"Predicted": "715.5859368341671", "x": 41, "Actual": "850.6073298429319", "i": 41}, {"Predicted": "756.7994534901766", "x": 42, "Actual": "568.5549738219895", "i": 42}, {"Predicted": "816.56941837237", "x": 43, "Actual": "1086.455497382199", "i": 43}, {"Predicted": "910.0466924147227", "x": 44, "Actual": "820.020942408377", "i": 44}, {"Predicted": "1055.6057774070719", "x": 45, "Actual": "1466.1727748691098", "i": 45}, {"Predicted": "1271.6821325093745", "x": 46, "Actual": "1694.8219895287957", "i": 46}, {"Predicted": "1576.1372640403185", "x": 47, "Actual": "1443.5497382198953", "i": 47}, {"Predicted": "1879.680056807353", "x": 48, "Actual": "1512.7748691099475", "i": 48}, {"Predicted": "2194.829543963061", "x": 49, "Actual": "1560.6492146596859", "i": 49}, {"Predicted": "2532.6273526963655", "x": 50, "Actual": "1963.151832460733", "i": 50}, {"Predicted": "2884.633809353582", "x": 51, "Actual": "1951.5183246073298", "i": 51}, {"Predicted": "3228.2033190119764", "x": 52, "Actual": "2462.109947643979", "i": 52}, {"Predicted": "3707.536246631089", "x": 53, "Actual": "2779.0680628272253", "i": 53}, {"Predicted": "4309.742056315394", "x": 54, "Actual": "5395.664921465968", "i": 54}, {"Predicted": "5010.095355957504", "x": 55, "Actual": "2821.083769633508", "i": 55}, {"Predicted": "5867.112175948273", "x": 56, "Actual": "4560.51832460733", "i": 56}, {"Predicted": "7412.26412775821", "x": 57, "Actual": "6201.507853403142", "i": 57}, {"Predicted": "11819.57822999528", "x": 58, "Actual": "12395.020942408377", "i": 58}, {"Predicted": "35882.763933864706", "x": 59, "Actual": "36849.86910994764", "i": 59}]};

  // 30 bins
  // data[30] = data[60].slice(29);
  data[30] = [{'Predicted': '3.2942860404389265', 'act_bottom10': '0.0', 'act_top25': '0.0', 'Actual': '-0.08786610878661087', 'act_bottom25': '0.0', 'act_top10': '0.0', 'act_median': '0.0', 'pred_median': '3.44993541736'}, {'Predicted': '9.811099686518359', 'act_bottom10': '0.0', 'act_top25': '0.0', 'Actual': '12.935010482180294', 'act_bottom25': '0.0', 'act_top10': '0.0', 'act_median': '0.0', 'pred_median': '9.77080049374'}, {'Predicted': '17.529239760633455', 'act_bottom10': '0.0', 'act_top25': '0.0', 'Actual': '12.786610878661088', 'act_bottom25': '0.0', 'act_top10': '0.0', 'act_median': '0.0', 'pred_median': '17.57515304415'}, {'Predicted': '28.32232283550861', 'act_bottom10': '0.0', 'act_top25': '0.0', 'Actual': '2.9769392033542976', 'act_bottom25': '0.0', 'act_top10': '0.0', 'act_median': '0.0', 'pred_median': '27.954501938299998'}, {'Predicted': '45.22815711315691', 'act_bottom10': '0.0', 'act_top25': '0.0', 'Actual': '2.1087866108786613', 'act_bottom25': '0.0', 'act_top10': '0.0', 'act_median': '0.0', 'pred_median': '44.3278395619'}, {'Predicted': '73.99557499619688', 'act_bottom10': '0.0', 'act_top25': '0.0', 'Actual': '41.312368972746334', 'act_bottom25': '0.0', 'act_top10': '3.0', 'act_median': '0.0', 'pred_median': '72.60208028609999'}, {'Predicted': '117.29197376829498', 'act_bottom10': '0.0', 'act_top25': '15.0', 'Actual': '28.88284518828452', 'act_bottom25': '0.0', 'act_top10': '53.900000000000034', 'act_median': '1.0', 'pred_median': '117.327281094'}, {'Predicted': '159.8036461156897', 'act_bottom10': '0.0', 'act_top25': '32.0', 'Actual': '37.094339622641506', 'act_bottom25': '0.0', 'act_top10': '69.0', 'act_median': '10.0', 'pred_median': '159.631845116'}, {'Predicted': '197.55681041610276', 'act_bottom10': '0.0', 'act_top25': '56.5', 'Actual': '60.55230125523013', 'act_bottom25': '2.0', 'act_top10': '168.60000000000002', 'act_median': '15.0', 'pred_median': '197.96912324599998'}, {'Predicted': '236.28641290827684', 'act_bottom10': '0.0', 'act_top25': '63.0', 'Actual': '82.31656184486373', 'act_bottom25': '3.0', 'act_top10': '174.2000000000001', 'act_median': '20.0', 'pred_median': '235.56553990900002'}, {'Predicted': '280.0452678460378', 'act_bottom10': '0.0', 'act_top25': '146.0', 'Actual': '226.4225941422594', 'act_bottom25': '6.25', 'act_top10': '435.3', 'act_median': '40.5', 'pred_median': '280.333119512'}, {'Predicted': '326.2732149330819', 'act_bottom10': '0.0', 'act_top25': '172.0', 'Actual': '322.42348008385744', 'act_bottom25': '6.0', 'act_top10': '446.4000000000004', 'act_median': '36.0', 'pred_median': '325.352531649'}, {'Predicted': '378.1220872165982', 'act_bottom10': '1.0', 'act_top25': '185.5', 'Actual': '237.99163179916317', 'act_bottom25': '6.0', 'act_top10': '466.3000000000001', 'act_median': '40.0', 'pred_median': '377.4934166885'}, {'Predicted': '425.9497586036394', 'act_bottom10': '1.0', 'act_top25': '227.0', 'Actual': '305.3312368972746', 'act_bottom25': '7.0', 'act_top10': '644.0000000000005', 'act_median': '53.0', 'pred_median': '426.24566148699995'}, {'Predicted': '470.55387018553955', 'act_bottom10': '1.0', 'act_top25': '302.5', 'Actual': '421.77196652719664', 'act_bottom25': '8.0', 'act_top10': '1057.300000000001', 'act_median': '65.5', 'pred_median': '470.52114673899996'}, {'Predicted': '513.4171049952784', 'act_bottom10': '2.6000000000000014', 'act_top25': '375.0', 'Actual': '692.2327044025158', 'act_bottom25': '10.0', 'act_top10': '1071.600000000001', 'act_median': '73.0', 'pred_median': '513.653577885'}, {'Predicted': '556.2472892145445', 'act_bottom10': '3.0', 'act_top25': '314.25', 'Actual': '572.8535564853556', 'act_bottom25': '11.0', 'act_top10': '1162.5', 'act_median': '77.5', 'pred_median': '555.3783382015'}, {'Predicted': '603.6304005694045', 'act_bottom10': '3.0', 'act_top25': '381.0', 'Actual': '615.9266247379455', 'act_bottom25': '10.0', 'act_top10': '1082.0000000000005', 'act_median': '79.0', 'pred_median': '604.147294707'}, {'Predicted': '656.3294884488349', 'act_bottom10': '3.0', 'act_top25': '463.0', 'Actual': '517.6924686192468', 'act_bottom25': '14.0', 'act_top10': '1236.6', 'act_median': '107.5', 'pred_median': '655.043175642'}, {'Predicted': '717.3011012156346', 'act_bottom10': '3.0', 'act_top25': '484.0', 'Actual': '542.2054507337526', 'act_bottom25': '14.0', 'act_top10': '1301.6000000000001', 'act_median': '95.0', 'pred_median': '714.7788436689999'}, {'Predicted': '798.326568027574', 'act_bottom10': '2.0', 'act_top25': '498.5', 'Actual': '677.6987447698745', 'act_bottom25': '13.0', 'act_top10': '1275.0', 'act_median': '93.0', 'pred_median': '796.505195265'}, {'Predicted': '924.1462074152614', 'act_bottom10': '2.0', 'act_top25': '382.0', 'Actual': '797.7610062893082', 'act_bottom25': '9.0', 'act_top10': '1416.0000000000014', 'act_median': '75.0', 'pred_median': '918.919603027'}, {'Predicted': '1150.943194730189', 'act_bottom10': '2.0', 'act_top25': '575.75', 'Actual': '1298.1694560669457', 'act_bottom25': '14.25', 'act_top10': '1689.1000000000004', 'act_median': '140.5', 'pred_median': '1139.4372581849998'}, {'Predicted': '1601.9228649395382', 'act_bottom10': '7.0', 'act_top25': '1131.0', 'Actual': '1322.1928721174004', 'act_bottom25': '82.0', 'act_top10': '2818.4000000000015', 'act_median': '399.0', 'pred_median': '1601.13340098'}, {'Predicted': '2143.8875889584106', 'act_bottom10': '25.10000000000001', 'act_top25': '1788.0', 'Actual': '2357.713389121339', 'act_bottom25': '205.0', 'act_top10': '4082.8000000000006', 'act_median': '686.5', 'pred_median': '2132.54674701'}, {'Predicted': '2757.430298322473', 'act_bottom10': '42.0', 'act_top25': '2191.0', 'Actual': '2249.8343815513626', 'act_bottom25': '260.0', 'act_top10': '4347.000000000003', 'act_median': '900.0', 'pred_median': '2740.5871808'}, {'Predicted': '3493.3907619486627', 'act_bottom10': '94.4', 'act_top25': '2496.25', 'Actual': '2656.945606694561', 'act_bottom25': '353.25', 'act_top10': '4889.600000000001', 'act_median': '1085.5', 'pred_median': '3490.2543936949996'}, {'Predicted': '4482.483399082722', 'act_bottom10': '98.4', 'act_top25': '4054.0', 'Actual': '4082.6184486373168', 'act_bottom25': '537.0', 'act_top10': '7761.600000000002', 'act_median': '1659.0', 'pred_median': '4439.02626023'}, {'Predicted': '6297.416343801213', 'act_bottom10': '117.10000000000004', 'act_top25': '5539.0', 'Actual': '5554.188284518828', 'act_bottom25': '811.75', 'act_top10': '11069.3', 'act_median': '2389.0', 'pred_median': '6165.98204797'}, {'Predicted': '19708.19958404818', 'act_bottom10': '508.90000000000003', 'act_top25': '19525.0', 'Actual': '23210.458158995814', 'act_bottom25': '2347.0', 'act_top10': '44651.8', 'act_median': '8340.0', 'pred_median': '15614.219169150001'}];

  data[10] = data[30].slice(20);

  // 10 bins w/ median and quantile
  // data[10] = [{'act_bottom25': '0.0', 'act_top10': '0.0', 'pred_median': '9.77080049374', 'Actual': '8.54152128401954', 'act_median': '0.0', 'act_top25': '0.0', 'act_bottom10': '0.0', 'Predicted': '10.211821272422805'}, {'act_bottom25': '0.0', 'act_top10': '0.0', 'pred_median': '44.3278395619', 'Actual': '15.456703910614525', 'act_median': '0.0', 'act_top25': '0.0', 'act_bottom10': '0.0', 'Predicted': '49.17925723869596'}, {'act_bottom25': '0.0', 'act_top10': '95.0', 'pred_median': '159.631845116', 'Actual': '42.18004187020237', 'act_median': '7.0', 'act_top25': '35.0', 'act_bottom10': '0.0', 'Predicted': '158.21636987950208'}, {'act_bottom25': '5.0', 'act_top10': '358.0', 'pred_median': '280.333119512', 'Actual': '210.39874301675977', 'act_median': '30.5', 'act_top25': '116.0', 'act_bottom10': '0.0', 'Predicted': '280.8677238203449'}, {'act_bottom25': '6.0', 'act_top10': '681.5999999999997', 'pred_median': '426.24566148699995', 'Actual': '321.70969993021635', 'act_median': '54.0', 'act_top25': '236.0', 'act_bottom10': '1.0', 'Predicted': '424.8744888291399'}, {'act_bottom25': '10.0', 'act_top10': '1107.3000000000006', 'pred_median': '555.3783382015', 'Actual': '626.9664804469273', 'act_median': '77.0', 'act_top25': '359.5', 'act_bottom10': '3.0', 'Predicted': '557.7638717869454'}, {'act_bottom25': '14.0', 'act_top10': '1268.0', 'pred_median': '714.7788436689999', 'Actual': '579.2247034193998', 'act_median': '97.0', 'act_top25': '487.0', 'act_bottom10': '3.0', 'Predicted': '723.9903840024983'}, {'act_bottom25': '18.0', 'act_top10': '2014.700000000004', 'pred_median': '1139.4372581849998', 'Actual': '1139.4853351955308', 'act_median': '171.0', 'act_top25': '775.5', 'act_bottom10': '3.0', 'Predicted': '1225.6185716440443'}, {'act_bottom25': '260.0', 'act_top10': '4367.5999999999985', 'pred_median': '2740.5871808', 'Actual': '2421.6175854849967', 'act_median': '904.0', 'act_top25': '2213.0', 'act_bottom10': '42.0', 'Predicted': '2798.264692277319'}, {'act_bottom25': '869.0', 'act_top10': '28569.799999999952', 'pred_median': '6166.12960903', 'Actual': '10953.879972086532', 'act_median': '2880.0', 'act_top25': '8088.0', 'act_bottom10': '174.0', 'Predicted': '10166.663639130842'}];

  var jWidth = 1400;
  var jHeight = 500;

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
  var yaxis = d3.svg.axis().scale(yscale).orient('left').tickFormat(formatPrefix());

  var line = d3.svg.line()
    .x((d, i) => xscale(i + 1) + margin.left)
    .y((d) => yscale(d) + 20)
    .interpolate('monotone');

  var lineForFill = d3.svg.line()
    .x((d, i) => {
      if (i <= 9) return xscale(i + 1) + margin.left;
      return xscale(20 - i) + margin.left;
    })
    .y(d => yscale(d) + 20)
    .interpolate('linear');

  var lineForFill_zoomed = d3.svg.line()
    .x((d, i) => {
      // lol ugh
      if (i === 0) return xscale(1) + margin.left;
      else if (i === 1) return xscale(2) + margin.left;
      else if (i === 2) return xscale(3) + margin.left;
      else if (i === 3) return xscale(3) + margin.left;
      else if (i === 4) return xscale(2) + margin.left;
      else if (i === 5) return xscale(1) + margin.left;
    })
    .y(d => yscale(d) + 20)
    .interpolate('linear');

  var pointScale = d3.scale.linear().domain([10, 60]).range([6, 3]);

  var actPointsSvg = svg.selectAll('.act-point');
  var predPointsSvg = svg.selectAll('.pred-point');
  var predMedianPointsSvg = svg.selectAll('.pred-median-point');
  var actMedianPointsSvg = svg.selectAll('.act-median-point');
  var actTop10PointsSvg = svg.selectAll('.act-point-top10');
  var actBottom10PointsSvg = svg.selectAll('.act-point-bottom10');
  var actTop25PointsSvg = svg.selectAll('.act-point-top25');
  var actBottom25PointsSvg = svg.selectAll('.act-point-bottom25');

  var actLine = svg.append('path').attr('class', 'act-line');
  var predLine = svg.append('path').attr('class', 'pred-line');

  var actMedianLine = svg.append('path').attr('class', 'act-median-line');
  var actTop10Line = svg.append('path').attr('class', 'act-top10-line');
  var actTop25Line = svg.append('path').attr('class', 'act-top25-line');
  var actBottom10Line = svg.append('path').attr('class', 'act-bottom10-line');
  var actBottom25Line = svg.append('path').attr('class', 'act-bottom25-line');

  var top10FillLine = svg.append('path').attr('class', 'top10-fill-line');
  var bottom10FillLine = svg.append('path').attr('class', 'bottom10-fill-line');
  var top25FillLine = svg.append('path').attr('class', 'top25-fill-line');
  var bottom25FillLine = svg.append('path').attr('class', 'bottom25-fill-line');

  var actLine_init = svg.append('path').attr('class', 'act-line');
  var predLine_init = svg.append('path').attr('class', 'pred-line');

  // Labels
  svg.append('text')
      .attr('x', 75)
      .attr('y', height + chartMargin.bottom + 50)
      .attr('class', 'axis-label')
      .text('Percentile (sorted and binned predictions)');
  svg.append('text')
      .attr('class', 'axis-label')
      .attr('transform', 'rotate(-90) translate(-' + (height + 25) + ', 35)')
      .text('Average likes');

  // Explanation thing
  var liftExp = svg.append('text')
    .attr('x', 75)
    .attr('y', height + chartMargin.bottom + 100)
    .attr('class', 'lift-explanation');

  var actPoints;
  var predPoints;
  var predMedianPoints;
  var actMedianPoints;
  var actTop10Points;
  var actBottom10Points;
  var actTop25Points;
  var actBottom25Points;

  var rawData;
  var pred;
  var act;
  var pred_median;
  var act_median;
  var act_top25;
  var act_top10;
  var act_bottom10;
  var act_bottom25;
  var top10_fill;
  var bottom10_fill;
  var top25_fill;
  var bottom25_fill;

  var xextent;
  var yextent = [-500, 30000];

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
    pred = rawData.map(d => parseFloat(d.Predicted));
    act = rawData.map(d => parseFloat(d.Actual));

    pred_median = rawData.map(d => parseFloat(d.pred_median));
    act_median = rawData.map(d => parseFloat(d.act_median));
    act_top10 = rawData.map(d => parseFloat(d.act_top10));
    act_top25 = rawData.map(d => parseFloat(d.act_top25));
    act_bottom10 = rawData.map(d => parseFloat(d.act_bottom10));
    act_bottom25 = rawData.map(d => parseFloat(d.act_bottom25));

    top10_fill = act_top10.slice();
    top10_fill.push(...act_top25.slice().reverse());

    bottom10_fill = act_bottom25.slice();
    bottom10_fill.push(...act_bottom10.slice().reverse());

    top25_fill = act_top25.slice();
    top25_fill.push(...act_median.slice().reverse());

    bottom25_fill = act_median.slice();
    bottom25_fill.push(...act_bottom25.slice().reverse());

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

  function showPoints(points, pointsSvg, pointsData, selector) {
    points = pointsSvg.data(pointsData)
      .enter()
      .append('circle')
      .attr('class', selector)
      .attr('r', 0)
      .attr('cx', (d, i) => xscale(i + 1) + margin.left)
      .attr('cy', 0);
    points.transition()
      .duration(400)
      .delay((d, i) => i * 40)
      .attr('r', 3)
      .attr('cy', d => yscale(d) + 20);
    return points;
  }

  function showLines() {
    actLine_init.attr('d', line(act)).attr('opacity', 0);
    predLine_init.attr('d', line(pred)).attr('opacity', 0);
    animateLine_lift(actLine_init, actLine, line(act), 400);
    animateLine_lift(predLine_init, predLine, line(pred), 400);
  }

  var r = n => {
    var o = Math.random() < 0.5 ? -1 : 1;
    return o * Math.random() * n;
  };

  function notConfident() {
    actPoints.transition().duration(200).attr('opacity', 0.2);
    predPoints.transition().duration(200).attr('opacity', 0.2);
    actLine.transition().duration(200).attr('opacity', 0.2);

    liftExp.text('Classifier is not confident');

    // flat prediction, similar actual
    var newPred = pred.map((d) => 2000 + r(500));
    predLine.transition().duration(400).attr('d', line(newPred));
  }
  function notConfidentBadClassifier() {
    // actual more erratic
    predLine.transition().duration(200).attr('opacity', 0.2);
    var newAct = act.map((d) => Math.max(0, d + r(20000)));
    newAct[newAct.length - 1] = 10000;
    actLine.transition().duration(400).attr('d', line(newAct)).attr('opacity', 1);

    liftExp.text('Classifier is bad and not confident');
  }
  function confidentBadClassifier() {
    // more lift, actual erratic
    var newPred = d3.range(10).map((d, i) => 2000 + (i * 2000) + r(2000));
    newPred[newPred.length - 1] = 25000;
    var newAct = act.map((d) => Math.max(0, d + r(20000)));
    newAct[newAct.length - 1] = 10000;
    predLine.transition().duration(400).attr('d', line(newPred)).attr('opacity', 1);
    actLine.transition().duration(400).attr('d', line(newAct)).attr('opacity', 1);

    liftExp.text('Classifier suffers from Dunning-Kruger effect');
  }

  function restoreToNormal() {
    predLine.transition().duration(400).attr('d', line(pred)).attr('opacity', 0.2);
    actLine.transition().duration(400).attr('d', line(act)).attr('opacity', 0.2);
    liftExp.text('');
  }

  function showMedians() {
    line.interpolate('linear');
    // showPoints(predMedianPoints, predMedianPointsSvg, pred_median, 'pred-median-point');
    actMedianPoints = showPoints(actMedianPoints, actMedianPointsSvg, act_median, 'act-median-point');
    actMedianLine.attr('d', line(act_median)).attr('opacity', 0);
    animateLine(actMedianLine, 400);
  }

  function show25() {
    actTop25Points = showPoints(actTop25Points, actTop25PointsSvg, act_top25, 'act-point-top25');
    actBottom25Points = showPoints(actBottom25Points, actBottom25PointsSvg, act_bottom25, 'act-point-bottom25');

    actTop25Line.attr('d', line(act_top25)).attr('opacity', 0);
    actBottom25Line.attr('d', line(act_bottom25)).attr('opacity', 0);
    animateLine(actTop25Line, 400);
    animateLine(actBottom25Line, 400, () => {
      // Fill in
      top25FillLine.attr('d', lineForFill(top25_fill)).attr('opacity', 0.3);
      bottom25FillLine.attr('d', lineForFill(bottom25_fill)).attr('opacity', 0.3);
    });
  }

  function show10() {
    // TODO will have to expand axis to view the top 10%
    actTop10Points = showPoints(actTop10Points, actTop10PointsSvg, act_top10, 'act-point-top10');
    actBottom10Points = showPoints(actBottom10Points, actBottom10PointsSvg, act_bottom10, 'act-point-bottom10');

    actTop10Line.attr('d', line(act_top10)).attr('opacity', 0);
    actBottom10Line.attr('d', line(act_bottom10)).attr('opacity', 0);
    animateLine(actTop10Line, 400);
    animateLine(actBottom10Line, 400, () => {
      top10FillLine.attr('d', lineForFill(top10_fill)).attr('opacity', 0.3);
      bottom10FillLine.attr('d', lineForFill(bottom10_fill)).attr('opacity', 0.3);
    });
  }

  function transitionLine(l, data) {
    l.transition().duration(400).attr('d', line(data));
  }
  function transitionFill(l, data, fillGenerator) {
    if (fillGenerator) l.attr('d', fillGenerator(data));
    else l.transition().duration(400).attr('d', lineForFill(data));
  }
  function showFill(l) {
    l.transition().duration(600).attr('opacity', 0.3);
  }
  function transitionPoints(points) {
    points.transition().duration(400).attr('cy', d => yscale(d) + 20);
  }
  function contractPoints(points) {
    points.transition().duration(400).attr('r', 0);
  }

  function zoomOut() {
    var newExtent = [yextent[0], 50000];
    yscale.domain(newExtent);
    yaxisSvg.transition().duration(400).ease('sin-in-out').call(yaxis);

    transitionLine(predLine, pred);
    transitionLine(actLine, act);
    transitionLine(actTop10Line, act_top10);
    transitionLine(actTop25Line, act_top25);
    transitionLine(actBottom10Line, act_bottom10);
    transitionLine(actBottom25Line, act_bottom25);
    transitionLine(actMedianLine, act_median);

    transitionFill(top10FillLine, top10_fill);
    transitionFill(top25FillLine, top25_fill);
    transitionFill(bottom10FillLine, bottom10_fill);
    transitionFill(bottom25FillLine, bottom25_fill);

    transitionPoints(actPoints);
    transitionPoints(predPoints);
    transitionPoints(actTop10Points);
    transitionPoints(actBottom10Points);
    transitionPoints(actTop25Points);
    transitionPoints(actBottom25Points);
    transitionPoints(actMedianPoints);
  }

  var zoomData = {};

  function zoomIn() {
    contractPoints(actPoints);
    contractPoints(predPoints);
    contractPoints(actTop10Points);
    contractPoints(actBottom10Points);
    contractPoints(actTop25Points);
    contractPoints(actBottom25Points);
    contractPoints(actMedianPoints);

    var lineList = [
      [predLine, pred],
      [actLine, act],
      [actTop10Line, act_top10],
      [actTop25Line, act_top25],
      [actBottom10Line, act_bottom10],
      [actBottom25Line, act_bottom25],
      [actMedianLine, act_median],
    ];

    var yExt = [yextent[0], 15000];
    var xExt = [1, 3];
    yscale.domain(yExt);
    xscale.domain(xExt);

    xaxis.tickValues([6, 7, 8]).tickFormat(d => parseInt(d));

    yaxisSvg.transition().duration(400).ease('sin-in-out').call(yaxis);
    xaxisSvg.transition().duration(400).ease('sin-in-out').call(xaxis);

    lineList.forEach((l, i) => {
      var lineSlice = l[1].slice(5, 8);
      lineSlice[0] += 200;
      lineSlice[1] += 1500;
      lineSlice[2] += 3000;
      lineList[i].push(lineSlice);
      transitionLine(l[0], lineSlice);
    });

    top10FillLine.transition().duration(400).attr('opacity', 0);
    top25FillLine.transition().duration(400).attr('opacity', 0);
    bottom10FillLine.transition().duration(400).attr('opacity', 0);
    bottom25FillLine.transition().duration(400).attr('opacity', 0)
      .each('end', () => {
        var constructFillSlice = (topSlice, bottomSlice) => {
          var fillSlice = topSlice.slice();
          fillSlice.push(...bottomSlice.slice().reverse());
          return fillSlice;
        };
        var fillList = [
          [top10FillLine, constructFillSlice(lineList[2][2], lineList[3][2])],
          [top25FillLine, constructFillSlice(lineList[3][2], lineList[6][2])],
          [bottom10FillLine, constructFillSlice(lineList[5][2], lineList[4][2])],
          [bottom25FillLine, constructFillSlice(lineList[6][2], lineList[5][2])],
        ];
        fillList.forEach(l => {
          transitionFill(l[0], l[1], lineForFill_zoomed);
        });
      });

    zoomData.prediction = lineList[0][2][1];
    zoomData.top = lineList[2][2][1];
    zoomData.bottom = lineList[4][2][1];
  }

  function showZoomedFill() {
    showFill(top10FillLine);
    showFill(top25FillLine);
    showFill(bottom10FillLine);
    showFill(bottom25FillLine);
  }

  function contractZoomedPrediction() {
    svg.append('circle')
      .attr('cx', xscale(2) + margin.left)
      .attr('cy', yscale(zoomData.prediction) + 20)
      .attr('r', 0)
      .transition()
      .duration(400)
      .attr('r', 8)
      .attr('fill', '#0057b8')
      .attr('stroke', '#fff')
      .attr('stroke-width', 3);
  }
  function contractZoomedTop10() {
    svg.append('circle')
      .attr('cx', xscale(2) + margin.left)
      .attr('cy', yscale(zoomData.top) + 20)
      .attr('r', 0)
      .transition()
      .duration(400)
      .attr('r', 8)
      .attr('fill', '#e4002b')
      .attr('stroke', '#fff')
      .attr('stroke-width', 3);
    svg.append('circle')
      .attr('cx', xscale(2) + margin.left)
      .attr('cy', yscale(zoomData.bottom) + 20)
      .attr('r', 0)
      .transition()
      .duration(400)
      .attr('r', 8)
      .attr('fill', '#e4002b')
      .attr('stroke', '#fff')
      .attr('stroke-width', 3);
  }

  var fnStack = [
    showPred,
    showAct,
    showLines,
    notConfident,
    notConfidentBadClassifier,
    confidentBadClassifier,
    restoreToNormal,
    showMedians,
    show25,
    show10,
    zoomOut,
    zoomIn,
    showZoomedFill,
    contractZoomedPrediction,
    contractZoomedTop10,
  ];
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


function formatPrefix(precision) {
    return d => {
        const prefix = d3.formatPrefix(d);
        const scaled = prefix.scale(d);
        return d3.round(scaled, precision || 0) + prefix.symbol;
    };
}

function animateLine(path, animationLength, callback) {
    var pathLength = path.node().getTotalLength();
    path.attr("stroke-dasharray", pathLength + " " + pathLength)
        .attr("stroke-dashoffset", pathLength)
        .transition()
        .delay(animationLength)
        .duration(animationLength)
        .ease('linear')
        .attr("stroke-dashoffset", 0)
        .attr('opacity', 1)
        .each('end', () => {
          if (callback) callback();
        });
}