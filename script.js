
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

        function maximize(){
            document.getElementById('input').setAttribute('maxLength',4);    
        }
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