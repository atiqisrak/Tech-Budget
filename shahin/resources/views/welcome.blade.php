<!doctype html>
<html lang="en">
  <head>
    <title>Chartbusters</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link id="stylee" rel="stylesheet" href="{{ asset('style.css') }}">
    <link rel="stylesheet" href="{{ asset('mailpdf.css') }}">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">


</head>
  <body>
    <div class="descriptions">
      <!-- <form action="/profile" id="form" class="bhd-form" autocomplete="off"> -->
    <div class="searchbar">
      <div class="lefty">
        <form id="inform" class="bhd-form" autocomplete="off">
        <span class="gradient">Budget &nbsp</span> BHD
        <input type="number" class="bhd-input" id="innervalue" min="1" max="9999" id="input" placeholder="2000">
        </form>
      </div>
      <div class="righty">

        <div class="table_value">
            <button class="show_button" id="show-button" onclick="myFunction()">Show</button>
        </div>
      </div>
    </div>

    <div class="describe-box">
      <div class="desbox">
          <div class="dummy-text1">
            Get an estimated media plan<br>
          </div>
          <div class="language-market">
            <div class="dummy-text2">
              <span class="bold-span">Language:</span> English & Arabic
            </div>

            <div class="dummy-text3">
              <span class="bold-span">Market:</span> Bahrain
            </div>

          </div>
    </div>

      <!-- Download pdf button -->
      <div class="desbox">
        <div class="pdf">
          <div class="mailpdf">
            <!-- mailpdf -->
            <a class="login-trigger" href="#" data-target="#login" data-toggle="modal">Get Quote</a>

            <div id="login" class="modal fade" role="dialog">
              <div class="modal-dialog">

                <div class="modal-content">
                  <div class="modal-body">
                    <button data-dismiss="modal" class="close">&times;</button>
                    <h4>Please enter your email address
                      to download the PDF</h4>
                    <form method="post" action="{{ route('form') }}">
                        @csrf
                      <input type="text"  class="username form-control" placeholder="Name"/ name="name">
                      <input type="text" name="username" class="username form-control" placeholder="Company name" />
                      <input type="text" name="email" class="username form-control" placeholder="Email address"/>
                      <!-- <input type="password" name="password" class="password form-control" placeholder="password"/> -->
                     <input class="btn login" type="submit" value="send mail" />
                      {{-- <a href="#">Mail</a> --}}
                    </form>
                  </div>
                </div>
              </div>
            </div>

  <!-- mailpdf -->
          </div>
          <div class="print2pdf">
            <button type="button" class="printpdf-button"
            id="btPrint" onclick="printTable();printChart1();printChart2();printChart3();printChart4();">
              Create PDF</button>
          </div>
        </div>

      </div>
    </div>
    </div>

    <!-- Table Part -->
    <div class="table-responsive tech-table">
    <table class="be_table" id="tab" border="1">
      <thead>
        <tr>
          <th scope="col">Portal/Site</th>
          <th scope="col">Placement/ Targeting</th>
          <th scope="col">Estimated Impressions</th>
          <th scope="col">Estimated Reach</th>
          <th scope="col">Estimated Clicks</th>
          <th scope="col">Estimated Leads </th>
          <th scope="col">Total Net to Media USD</th>
          <th scope="col">Total Net to Media BHD</th>
        </tr>
      </thead>
      <tbody>
        <!-- Facebook -->
          <tr>
              <td class="platforms" scope="row">Facebook <i class="fa fa-facebook" aria-hidden="true"></i>
              </td>
              <td>News Feed</td>
              <td id="estimated_impression_1">1,656,250</td>
              <td id="estimated_reach_1">450,000</td>
              <td id="estimated_clicks_1">1,767</td>
              <td id="estimated_leads_1">133</td>
              <td id="n2m_usd_1">$ 2,650.00</td>
              <td id="n2m_bhd_1">1,000</td>
          </tr>
          <!-- Instagram -->
          <tr>
              <td class="platforms" scope="row">Instagram <i class="fa fa-instagram" aria-hidden="true"></i></td>
              <td>News Feed</td>
              <td id="estimated_impression_2">1,892,857</td>
              <td id="estimated_reach_2">390,000</td>
              <td id="estimated_clicks_2">1,988</td>
              <td id="estimated_leads_2">99</td>
              <td id="n2m_usd_2"> $ 3,975.00 </td>
              <td id="n2m_bhd_2">1,500</td>
          </tr>

                <!-- SnapChat -->
                <tr>
                  <td class="platforms" scope="row">SnapChat</td>
                  <td>Feed</td>
                  <td id="estimated_impression_3">1,192,500</td>
                  <td id="estimated_reach_3">242,000</td>
                  <td id="estimated_clicks_3">1,704</td>
                  <td id="estimated_leads_3">149</td>
                  <td id="n2m_usd_3">$ 5,962.50</td>
                  <td id="n2m_bhd_3">2,250</td>
              </tr>
              <!-- Google Search -->
          <tr>
              <td class="platforms" scope="row">Google Search</td>
              <td>Google</td>
              <td id="estimated_impression_4">64,251</td>
              <td id="estimated_reach_4">As per Search</td>
              <td id="estimated_clicks_4">2,698</td>
              <td id="estimated_leads_4">199</td>
              <td id="n2m_usd_4">$5,962.50 </td>
              <td id="n2m_bhd_4">2,250</td>
          </tr>
              <!-- GA (display)  -->
              <tr>
                <td class="platforms" scope="row">GA (display)</td>
                <td>RON</td>
                <td id="estimated_impression_5">1,987,500</td>
                <td id="estimated_reach_5">450,000</td>
                <td id="estimated_clicks_5">1,775</td>
                <td id="estimated_leads_5">133</td>
                <td id="n2m_usd_5">$3,975.00</td>
                <td id="n2m_bhd_5">1,500</td>
            </tr>
            <!-- LinkedIn -->
            <tr>
                <td class="platforms" scope="row">LinkedIn</td>
                <td>RON</td>
                <td id="estimated_impression_6">1,987,500</td>
                <td id="estimated_reach_6">450,000</td>
                <td id="estimated_clicks_6">1,775</td>
                <td id="estimated_leads_6">80</td>
                <td id="n2m_usd_6">$3,975.00</td>
                <td id="n2m_bhd_6">1,500</td>
            </tr>
      </tbody>
    </table>
   </div>


   <div class="chartsjs">
    <div class="ro1">
      <div class="kolam left">
        <h6>Estimated Impressions vs Portal/Site</h6>
        <div id="canvas-holder">
          <canvas class="chart" id="chart-area1"/>
        </div>
      </div>

      <div class="piechart kolam right">
        <h6>Total Net to Media BHD</h6>
        <div id="canvas-holder">
          <canvas class="d-chart" id="chart-area2"/>
        </div>
      </div>
    </div>

    <div class="ro2">
      <div class="kolam left">
        <h6> Estimated Leads per channel</h6>
        <div id="canvas-holder">
          <canvas class="chart" id="chart-area3"/>
        </div>
      </div>
      <div class="kolam right">
        <h6>Estimated Clicks vs Portal/Site</h6>
        <div id="canvas-holder">
          <canvas class="chart" id="chart-area4"/>
        </div>
      </div>
    </div>
   </div>


    <!-- <div id="piechart" style="z-index: 9999;"></div> -->

        <!-- Optional JavaScript -->
        <!-- <script src="script-main.js"></script> -->
        <script src="{{ asset('print2pdf.js') }}"></script>
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" ></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js'></script>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script src="{{ asset('script.js') }}"></script>
        <!-- <script src="https://gist.github.com/johannesjo/6b11ef072a0cb467cc93a885b5a1c19f.js"></script> -->
    </body>
    </html>
