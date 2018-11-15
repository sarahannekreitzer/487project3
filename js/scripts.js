$(function () {
  console.log('scripts loaded');

    	$("body").on('click', '.menu_icon', function() {
    		$("nav.menu").toggleClass("menu_show");
    	 }); // close click nav

        // DataTables
          $('#basic-table').DataTable();

      // TauCharts
        var defData = [{
          "ageRange": "18-34",
          "suicideRate": 45,
          "population": "Veteran"
        }, {
          "ageRange": "18-34",
          "suicideRate": 16.1,
          "population": "Civilian"
        }, {
          "ageRange": "35-54",
          "suicideRate": 33.1,
          "population": "Veteran"
        }, {
          "ageRange": "35-54",
          "suicideRate": 18.6,
          "population": "Civilian"
        }, {
          "ageRange": "55-74",
          "suicideRate": 25.9,
          "population": "Veteran"
        }, {
          "ageRange": "55-74",
          "suicideRate": 17.3,
          "population": "Civilian"
        }, {
          "ageRange": "75+",
          "suicideRate": 28.3,
          "population": "Veteran"
        }, {
          "ageRange": "75+",
          "suicideRate": 18.5,
          "population": "Civilian"
        }
      ];
      var chart = new Taucharts.Chart({
        data: defData,
        type: 'bar',
        x: 'ageRange',
        y: 'suicideRate',
        color: 'population',
        plugins: [Taucharts.api.plugins.get('legend')()],
      });

      chart.renderTo('#results-chart');

      // end TauCharts 1
      //TauCharts 2

      var defData = [{
  type:'diagnosedWithMentalHealthCondition', rate:77.6, date:'2001'
},{
  type:'diagnosedWithMentalHealthCondition', rate:74.1, date:'2002'
},{
  type:'diagnosedWithMentalHealthCondition', rate:63.5, date:'2003'
},{
  type:'diagnosedWithMentalHealthCondition', rate:62.1, date:'2004'
},{
  type:'diagnosedWithMentalHealthCondition', rate:59.4, date:'2005'
},{
  type:'diagnosedWithMentalHealthCondition', rate:59.0, date:'2006'
},{
  type:'diagnosedWithMentalHealthCondition', rate:57.7, date:'2007'
},{
  type:'diagnosedWithMentalHealthCondition', rate:60.4, date:'2008'
},{
  type:'diagnosedWithMentalHealthCondition', rate:57.7, date:'2009'
},{
  type:'diagnosedWithMentalHealthCondition', rate:55.3, date:'2010'
},{
  type:'diagnosedWithMentalHealthCondition', rate:58.2, date:'2011'
}, {
  type:'diagnosedWithMentalHealthCondition', rate:56.2, date:'2012'
},{
  type:'diagnosedWithMentalHealthCondition', rate:55.8, date:'2013'
},{
  type:'diagnosedWithMentalHealthCondition', rate:57.0, date:'2014'
},{
  type:'withoutMentalHealthCondition', rate:24.7, date:'2001'
},{
  type:'withoutMentalHealthCondition', rate:24.5, date:'2002'
},{
  type:'withoutMentalHealthCondition', rate:22.3, date:'2003'
},{
  type:'withoutMentalHealthCondition', rate:23.3, date:'2004'
},{
  type:'withoutMentalHealthCondition', rate:22.5, date:'2005'
},{
  type:'withoutMentalHealthCondition', rate:23.6, date:'2006'
},{
  type:'withoutMentalHealthCondition', rate:22.5, date:'2007'
},{
  type:'withoutMentalHealthCondition', rate:25.4, date:'2008'
},{
  type:'withoutMentalHealthCondition', rate:24.2, date:'2009'
},{
  type:'withoutMentalHealthCondition', rate:24.2, date:'2010'
},{
  type:'withoutMentalHealthCondition', rate:25.9, date:'2011'
}, {
  type:'withoutMentalHealthCondition', rate:25.3, date:'2012'
},{
  type:'withoutMentalHealthCondition', rate:26.7, date:'2013'
},{
  type:'withoutMentalHealthCondition', rate:26.3, date:'2014'
}];
var chart = new Taucharts.Chart({
            guide:{

              padding:{l:30, t:10, b:70,r:10},
              showGridLines:'xy',
              color:{
                brewer:{
                  diagnosedWithMentalHealthCondition:'color-diagnosedWithMentalHealthCondition',
                  withoutMentalHealthCondition:'color-withoutMentalHealthCondition'
                }
              },
              y:{
                label:{
                  text: 'Suicide Rate',
                  padding:0
                }
              },
              x:{
                label:{
                  text: 'Year',
                  padding:0}
                }
            },
            data: defData,
            type: 'line',
            x: 'date',
            y: 'rate',
            color: 'type',
            plugins: [Taucharts.api.plugins.get('legend')()]
        });

        chart.renderTo('#results-chart-2');

}); // close all
