function choose() {
    const mainContainer = document.getElementById('main-container');
    // const choose=document.getElementById()
    mainContainer.innerHTML = `
        <p class="why">Australia is located between the Indian Ocean and the South Pacific Ocean with territory of
                7,692,024
                km2.Total
                population is about 23, 5 million people. Canberra is the capital of Australia, Sydney is the largest
                city. The climate
                is temperate in south and east, tropical in north and varies from sandy beaches and to deserts.
                Australia is a very
                diverse country in aspects of culture, languages, traditions, nationalities. Being a student in this
                country brings you
                many opportunities to discover Australia's beauty.Australia is often chosen by international students
                as a study abroad
    direction.About 20 % of Australian students are represented by international students.Australian Higher
    education
                system is generally considered as one of the best in the world and includes state, private and
                independent universities.
                Australian universities offers quality and internationally recognized education.There are 38 public
                universities and 3
                private universities in Australia where you can get your undergraduate or graduate degree</p >
        <div class="grid">
            <div class="change">

                <div class="cover">
                    <i class="fa-solid fa-building-columns coverIcon"></i>

                </div>
                <div class="">
                    <h4>Top Universities</h4>
                    <p>Most universities are ranked <br>high in the global <br>university rankings.</p>
                    </div>

                </div>
                <div class="change">

                    <div class="cover">

                        <i class="fa-solid fa-graduation-cap coverIcon"></i>

                    </div>
                    <div class="">
                        <h4>Field of Study</h4>
                        <p>Choose from a vast no. of courses that <br>suit you the most and enhance your career.</p>
                    </div>

                </div>
                <div class="change">

                    <div class="cover">

                        <i class="fa-solid fa-user coverIcon"></i>

                    </div>
                    <div class="">
                        <h4>Student Support
                        </h4>
                        <p>All universities provide excellent <br>support for international students.</p>
                    </div>

                </div>
                <div class="change">

                    <div class="cover">

                        <i class="fa-solid fa-earth-americas coverIcon"></i>

                    </div>
                    <div class="">
                        <h4>Great Lifestyle
                        </h4>
                        <p>Experience living in <br>the most livable and vibrant <br>cities in the world.</p>
                        </div>

                    </div>
                    <div class="change">

                        <div class="cover">

                            <i class="fa-solid fa-user-tie coverIcon"></i>

                        </div>
                        <div class="">
                            <h4>Placement
                            </h4>
                            <p>Graduates from Australian universities<br> are placed in the most renowned<br>organizations
                                of the
                                world.</p>
                            </div>

                        </div>
                        <div class="change">

                            <div class="cover">

                                <i class="fa-regular fa-thumbs-up coverIcon"></i>

                            </div>
                            <div class="">
                                <h4>Successful Alumni
                                </h4>
                                <p>Students have achieved good <br>success after getting <br>their Australian degree.</p>
                                </div>

                            </div>
                        </div>
        `;
    const study = document.getElementById('study');
    const choose = document.getElementById('choose');
    const living = document.getElementById('living');

    study.style.borderBottom = '2px solid white';
    choose.style.borderBottom = '2px solid rgb(204,12,12)';
    living.style.borderBottom = '2px solid white';
}
function study() {
    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = `
       <div class="scost">
        <div>
        <div class="how">
          <div class="cover2">
              <h4 class="coverIcon2">
                          How
               </h4>
          </div>

          <div>
              <h4 class="pt-2">
                 Much Does it Cost
              </h4>
          </div>
          


       </div>
       <ul class="pt-2">
       <li>
<p><b>Undergraduate Bachelor Degree </b>- $15,000 to $33,000*</p>
       </li>
<li>
<p><b>Postgraduate Masters Degree </b>- $20,000 to $37,000*</p>
       </li>
      
       </ul>
       <p class="ps-2"><b>Note:</b> High value courses like medical and veterinary are not included</p>
        </div>
       <div class="">
       <h4 class="ind">In-Depth Details</h4>
       <p class="p3">As international student you have to pay your tuition fee first before you study.<br> Normally all university take about 50% in advance from the 1st year's tuition fee.<br> Overseas Student Health Cover (OSHC) also has to be paid with the tuition fee.</p>
       <p class="p3"class="pt-2">Other additional costs like course materials and access to institution<br> facilities will be charged when you are at your designated univesity.</p>
       </div>
       </div>
        `;
    const study = document.getElementById('study');
    const choose = document.getElementById('choose');
    const living = document.getElementById('living');

    study.style.borderBottom = '2px solid rgb(204,12,12)';
    choose.style.borderBottom = '2px solid white';
    living.style.borderBottom = '2px solid white';


}
function living() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
    <div class="lcost">
    <div class="gridL">

         <div class="first">
<h4 class="py-3">Single Person</h4>
<h2 style="color:rgb(204,12,12);" class="pb-3">$18,610</h2>
<h4 class="pb-3">Per Year</h4>
         </div>
         <div class="second">
                 <h3 class="text-center">Accommodation Cost</h3>
                 <ul>
                 <li><b>Hostels and Guesthouses</b> - $80 to $135 per week</li>
                 <li><b>Shared Rental</b> - $70 to $250 per week</li>
                 <li><b>On campus</b>- $80 to $250 per week</li>
                 <li><b>Homestay </b>- $110 to $270 per week</li>
                 <li><b>Rental</b> - $100 to $400 per week</li>
                 </ul>
         </div>
         <div class="third">
<h3 class="text-center">Other Living Expenses</h3>
                 <ul>
                 <li><b>Groceries and eating out</b> - $80 to $200 per week</li>
                 <li><b>Gas, electricity</b> - $60 to $100 per week</li>
                 <li><b>Phone and Internet </b>- $20 to $50 per week</li>
                 <li><b>Public transport</b>- $10 to $50 per week</li>
                 <li><b>Car (after purchase)</b> - $150 to $250 per week</li>
                 </ul>
         </div>
    
    </div>
    `;
    const study = document.getElementById('study');
    const choose = document.getElementById('choose');
    const living = document.getElementById('living');

    study.style.borderBottom = '2px solid white';
    choose.style.borderBottom = '2px solid white';
    living.style.borderBottom = '2px solid rgb(204,12,12)';

}