
        const input = document.querySelector("#input");
        const h1 = document.querySelector(".autoUpdateText");
        
        const a1 = document.querySelector(".estimated_impression_1");
        const a2 = document.querySelector(".estimated_reach_1");
        const a3 = document.querySelector(".estimated_clicks_1");
        const a4 = document.querySelector(".estimated_leads_1");
        const a5 = document.querySelector(".n2m_usd_1");
        const a6 = document.querySelector(".n2m_bhd_1");
        
        const b1 = document.querySelector(".estimated_impression_2");
        const b2 = document.querySelector(".estimated_reach_2");
        const b3 = document.querySelector(".estimated_clicks_2");
        const b4 = document.querySelector(".estimated_leads_2");
        const b5 = document.querySelector(".n2m_usd_2");
        const b6 = document.querySelector(".n2m_bhd_2");
        

        const form = document.querySelector("#form");

        const l1 = 1.6;
        const l2 = 2.1;
        const l3 = 5;
        const l4 = 92.8;
        const l5 = 2;
        const l6 = 2;
        
        const m1 = 1.5;
        const m2 = 2;
        const m3 = 3.5;
        const m4 = 2.21;
        const m5 = 2.24;
        const m6 = 2.24;

        const n1 = 20;
        const n2 = 40;
        const n3 = 40;
        const n4 = 30;
        const n5 = 30;
        const n6 = 50;

        // Facebook
        input.addEventListener("input", function (e) {
        // h1.innerHTML = input.value;
        document.getElementById("n2m_bhd_1").innerHTML = Math.round(Number(input.value)*0.2);
        document.getElementById("n2m_usd_1").innerHTML = ((Number(input.value)*0.2)*2.65).toFixed(2);
        document.getElementById("estimated_leads_1").innerHTML = Math.round(((Number(input.value)*0.2)*2.65)/n1);
        document.getElementById("estimated_clicks_1").innerHTML = Math.round(((Number(input.value)*0.2)*2.65)/m1);
        document.getElementById("estimated_impression_1").innerHTML = Math.round((((Number(input.value)*0.2)*2.65)/l1)*1000);


        // Instagram

        document.getElementById("n2m_bhd_2").innerHTML = Math.round(Number(input.value)*0.3);
        document.getElementById("n2m_usd_2").innerHTML = ((Number(input.value)*0.3)*2.65).toFixed(2);
        document.getElementById("estimated_leads_2").innerHTML = Math.round(((Number(input.value)*0.2)*2.65)/n2);
        document.getElementById("estimated_clicks_2").innerHTML = Math.round(((Number(input.value)*0.2)*2.65)/m2);
        document.getElementById("estimated_impression_2").innerHTML = Math.round((((Number(input.value)*0.2)*2.65)/l2)*1000);

        // SnapChat

        document.getElementById("n2m_bhd_3").innerHTML = Math.round(Number(input.value)*0.15);
        document.getElementById("n2m_usd_3").innerHTML = ((Number(input.value)*0.15)*2.65).toFixed(2);
        document.getElementById("estimated_leads_3").innerHTML = Math.round(((Number(input.value)*0.15)*2.65)/n3);
        document.getElementById("estimated_clicks_3").innerHTML = Math.round(((Number(input.value)*0.15)*2.65)/m3);
        document.getElementById("estimated_impression_3").innerHTML = Math.round((((Number(input.value)*0.15)*2.65)/l3)*1000);

        // Google Search

        document.getElementById("n2m_bhd_4").innerHTML = Math.round(Number(input.value)*0.15);
        document.getElementById("n2m_usd_4").innerHTML = ((Number(input.value)*0.15)*2.65).toFixed(2);
        document.getElementById("estimated_leads_4").innerHTML = Math.round(((Number(input.value)*0.15)*2.65)/n4);
        document.getElementById("estimated_clicks_4").innerHTML = Math.round(((Number(input.value)*0.15)*2.65)/m4);
        document.getElementById("estimated_impression_4").innerHTML = Math.round((((Number(input.value)*0.15)*2.65)/l4)*1000);

        // GA (display)

        document.getElementById("n2m_bhd_5").innerHTML = Math.round(Number(input.value)*0.1);
        document.getElementById("n2m_usd_5").innerHTML = ((Number(input.value)*0.1)*2.65).toFixed(2);
        document.getElementById("estimated_leads_5").innerHTML = Math.round(((Number(input.value)*0.1)*2.65)/n5);
        document.getElementById("estimated_clicks_5").innerHTML = Math.round(((Number(input.value)*0.1)*2.65)/m5);
        document.getElementById("estimated_impression_5").innerHTML = Math.round((((Number(input.value)*0.1)*2.65)/l5)*1000);

        // LinkedIn

        document.getElementById("n2m_bhd_6").innerHTML = Math.round(Number(input.value)*0.1);
        document.getElementById("n2m_usd_6").innerHTML = ((Number(input.value)*0.1)*2.65).toFixed(2);
        document.getElementById("estimated_leads_6").innerHTML = Math.round(((Number(input.value)*0.1)*2.65)/n6);
        document.getElementById("estimated_clicks_6").innerHTML = Math.round(((Number(input.value)*0.1)*2.65)/m6);
        document.getElementById("estimated_impression_6").innerHTML = Math.round((((Number(input.value)*0.1)*2.65)/l6)*1000);

        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();
        });





        // Chart JS

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(231,233,237)'
};

var chart1 = document.getElementById('chart-area1');
var chart2 = document.getElementById('chart-area2');
var chart3 = document.getElementById('chart-area3');
var chart4 = document.getElementById('chart-area4');

// chart2.height = 30;

const myChart1 = new Chart(chart1.getContext("2d"), {
  type: 'bar',
  data: {
    labels: ['Facebook', 'Instagram', 'SnapChat', 'Google Search', 'GA (display)', 'LinkedIn'],
    datasets: [{
      label: 'My data',
      data: [662500, 504762, 159000, 8567, 265000, 265000],
      backgroundColor: '#656D8F',
      borderColor: '#656D8F',
      borderWidth: 1
    }]
  },
  options: {
  	animation: {
    	duration: 1500,
    }
  }
});


const myChart2 = new Chart(chart2.getContext("2d"), {
  type: 'doughnut',
  data: {
    labels: ['Facebook', 'Instagram', 'SnapChat', 'Google Search', 'GA (display)', 'LinkedIn'],
    datasets: [{
      label: 'My data',
      data: [400, 600, 300, 300, 200, 200],
      backgroundColor: ['#EA4335', '#FBBC04', '#34A853', '#FF6D01', '#27F0FF', '#83A7E5', ]
    }]
  },
  options: {
    // maintainAspectRatio:true,
    maintainAspectRatio:false,
    responsive:true,
    height:200,
    // weight:200,
  	animation: {
    	duration: 1500,
    }
  }
});


const myChart3 = new Chart(chart3.getContext("2d"), {
  type: 'bar',
  data: {
    labels: ['Facebook', 'Instagram', 'SnapChat', 'Google Search', 'GA (display)', 'LinkedIn'],
    datasets: [{
      label: 'Estimated Leads',
      data: [53,27,20,27,18,11],
      backgroundColor: '#656D8F',
      borderColor: '#656D8F',
      borderWidth: 1
    }]
  },
  options: {
  	animation: {
    	duration: 1500,
    }
  }
});


const myChart4 = new Chart(chart4.getContext("2d"), {
  type: 'bar',
  data: {
    labels: ['Facebook', 'Instagram', 'SnapChat', 'Google Search', 'GA (display)', 'LinkedIn'],
    datasets: [{
      label: 'Estimated Clicks',
      data: [707,530,227,360,237,237],
      backgroundColor: '#656D8F',
      borderColor: '#656D8F',
      borderWidth: 1
    }]
  },
  options: {
  	animation: {
    	duration: 1500,
    }
  }
});
