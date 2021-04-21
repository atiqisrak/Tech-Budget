
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
        document.getElementById("n2m_bhd_1").innerHTML = (Number(input.value)*0.2).toFixed(2);
        document.getElementById("n2m_usd_1").innerHTML = ((Number(input.value)*0.2)*2.65).toFixed(2);
        document.getElementById("estimated_leads_1").innerHTML = (((Number(input.value)*0.2)*2.65)/n1).toFixed(2);
        document.getElementById("estimated_clicks_1").innerHTML = (((Number(input.value)*0.2)*2.65)/m1).toFixed(2);
        document.getElementById("estimated_impression_1").innerHTML = ((((Number(input.value)*0.2)*2.65)/l1)*1000).toFixed(2);


        // Instagram

        document.getElementById("n2m_bhd_2").innerHTML = (Number(input.value)*0.3).toFixed(2);
        document.getElementById("n2m_usd_2").innerHTML = ((Number(input.value)*0.3)*2.65).toFixed(2);
        document.getElementById("estimated_leads_2").innerHTML = (((Number(input.value)*0.2)*2.65)/n2).toFixed(2);
        document.getElementById("estimated_clicks_2").innerHTML = (((Number(input.value)*0.2)*2.65)/m2).toFixed(2);
        document.getElementById("estimated_impression_2").innerHTML = ((((Number(input.value)*0.2)*2.65)/l2)*1000).toFixed(2);

        // SnapChat

        document.getElementById("n2m_bhd_2").innerHTML = (Number(input.value)*0.15).toFixed(2);
        document.getElementById("n2m_usd_2").innerHTML = ((Number(input.value)*0.3)*2.65).toFixed(2);
        document.getElementById("estimated_leads_2").innerHTML = (((Number(input.value)*0.2)*2.65)/n2).toFixed(2);
        document.getElementById("estimated_clicks_2").innerHTML = (((Number(input.value)*0.2)*2.65)/m2).toFixed(2);
        document.getElementById("estimated_impression_2").innerHTML = ((((Number(input.value)*0.2)*2.65)/l2)*1000).toFixed(2);

        // Google Search

        document.getElementById("n2m_bhd_2").innerHTML = (Number(input.value)*0.3).toFixed(2);
        document.getElementById("n2m_usd_2").innerHTML = ((Number(input.value)*0.3)*2.65).toFixed(2);
        document.getElementById("estimated_leads_2").innerHTML = (((Number(input.value)*0.2)*2.65)/n2).toFixed(2);
        document.getElementById("estimated_clicks_2").innerHTML = (((Number(input.value)*0.2)*2.65)/m2).toFixed(2);
        document.getElementById("estimated_impression_2").innerHTML = ((((Number(input.value)*0.2)*2.65)/l2)*1000).toFixed(2);

        // GA (display)

        document.getElementById("n2m_bhd_2").innerHTML = (Number(input.value)*0.3).toFixed(2);
        document.getElementById("n2m_usd_2").innerHTML = ((Number(input.value)*0.3)*2.65).toFixed(2);
        document.getElementById("estimated_leads_2").innerHTML = (((Number(input.value)*0.2)*2.65)/n2).toFixed(2);
        document.getElementById("estimated_clicks_2").innerHTML = (((Number(input.value)*0.2)*2.65)/m2).toFixed(2);
        document.getElementById("estimated_impression_2").innerHTML = ((((Number(input.value)*0.2)*2.65)/l2)*1000).toFixed(2);

        // LinkedIn

        document.getElementById("n2m_bhd_2").innerHTML = (Number(input.value)*0.3).toFixed(2);
        document.getElementById("n2m_usd_2").innerHTML = ((Number(input.value)*0.3)*2.65).toFixed(2);
        document.getElementById("estimated_leads_2").innerHTML = (((Number(input.value)*0.2)*2.65)/n2).toFixed(2);
        document.getElementById("estimated_clicks_2").innerHTML = (((Number(input.value)*0.2)*2.65)/m2).toFixed(2);
        document.getElementById("estimated_impression_2").innerHTML = ((((Number(input.value)*0.2)*2.65)/l2)*1000).toFixed(2);

        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();
        });