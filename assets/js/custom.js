$(document).ready(function () {
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('body').delay(350).css({
        'overflow': 'visible'
    });
  
    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
            if($(this).hasClass('act')) {
                $('.main-menu').addClass('act');
            }
            else {
                $('.main-menu').removeClass('act');
            }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        event.preventDefault();
        var anco = $(this).attr('href');
       window.location.href = anco;
        $('.navbar-toggle').toggleClass('act');
            if($(this).hasClass('act')) {
                $('.main-menu').addClass('act');
            }
            else {
                $('.main-menu').removeClass('act');
            }
    });

    // Highlight the top nav as scrolling occurs
    $('body').scroll({
        target: '.site-header',
        offset: 10
    });
     // Navigation overlay
     var s = skrollr.init({
        forceHeight: false,
        smoothScrolling: false,
        mobileDeceleration: 0.004,
        mobileCheck: function() {
            //hack - forces mobile version to be off
            return false;
        }
});

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

   //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions:{
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });
let data = [
        {
            "id": 1,
            "image":{
                "url":"p1_wide.png",
                "alt":"image"
            },
            "title":"Records Studio",
            "subtitle":"Music and Song Writing Studio",
            "desc":"Learn how to practice and read music, through famous songs and folk melodies. Students will choose the main instrument of focus and gain basic competence in Guitar, Piano and Voice.",
            "sidenote":"This is a site based around music comosing. It was created at december 2018. and is one of the first I built.",
            "link":"http://records-studio.netlify.app"
        },
        {
            "id": 2,
            "image":{
                "url":"p2_wide.png",
                "alt":"image"
            },
            "title":"Old First-made Portfolio",
            "subtitle":"Web Site Project",
            "desc":"Hi there so, this is a  firstmade portfolio that was created, so fill free to look around..",
            "sidenote":"This was based around creating a self-site with the knolage at that time. It was created at the and at may 2018. and it does look like it needs a lot of work.",
            "link":"https://old-portfolio-dj.netlify.app"
        },
        {
            "id": 3,
            "image":{
                "url":"p5_wide.png",
                "alt":"image"
            },
            "title":"Maxim-Product Branding Company",
            "subtitle":"Web Site Project",
            "desc":"We offer a wide range of professional tailor-made design solutions, from Brand design and Illustration to Full Product Marketing ,Infographics and a lot of verient service for beter outcome.",
            "sidenote":"This was a One of the newer sites created and the general theme is about a company for branding and designing products. It was created at december 2020."
            ,"link":"https://maxim-products.netlify.app"
        },
        {
            "id": 4,
            "image":{
                "url":"p3_wide.png",
                "alt":"image"
            },
            "title":"CampFireHikers-Hiking Agency",
            "subtitle":"Web Site Project",
            "desc":"If climbing experience is what you are searching for then you've come to the right place",
            "sidenote":"General theme is about a hiking agency that is bassed in balcan area. Being a site that i worked the most so far, I was really seatisfied with this one. It was created at june 2019.",
            "link":"https://camp-fire-fikers.netlify.app"
        },
        {
            "id": 5,
            "image":{
                "url":"p4_wide.png",
                "alt":"image"
            },
            "title":"Harington's Club",
            "subtitle":"Web Site Project",
            "desc":"The Harrington's Club is a private members club formed in 1985 at a 16-century mansion located outside the city of London.",
            "sidenote":"Theme for this is about a vintage hotel that is used to be a club back in the day. It was created at march 2021.",
            "link":"https://harringtons-club.netlify.app"
        },
        {
            "id": 6,
            "image":{
                "url":"mustache.png",
                "alt":"image"
            },
            "title":"Mustache logo",
            "subtitle":"Logo Design",
            "desc":"Logo that is a personal creation with a inscape software. Witch is made espacialy for the Harington's Club site.",
            "sidenote":null,
            "link":null
        },
        {
            "id": 7,
            "image":{
                "url":"clickbooks.png",
                "alt":"image"
            },
            "title":"Bookstore logo",
            "subtitle":"Logo Design",
            "desc":"Logo that is a personal creation with a inscape software. It is made for the book club.",
            "sidenote":null,
            "link":null
        },
        {
            "id": 8,
            "image":{
                "url":"upwork_logo.png",
                "alt":"image"
            },
            "title":"Page logo",
            "subtitle":"Logo Design",
            "desc":"Logo that is a personal creation with a inscape software. Witch is made espacialy for the group.",
            "sidenote":null,
             "link":null
        },
        {
            "id": 9,
            "image":{
                "url":"p6_wide.png",
                "alt":"image"
            },
            "title":"Bannington Watches",
            "subtitle":"Web Site Project",
            "desc":"Best deal on Watches you can get at all time.Our stor is throbing to sell you quality goods.",
            "sidenote":"Theme for this is about a Watch Store selling customers available products. It was created at may 2021.",
            "link":"http://bannington-watches.epizy.com"
        },
        {
            "id": 10,
            "image":{
                "url":"p7_wide.png",
                "alt":"image"
            },
            "title":"Drink-Up Store",
            "subtitle":"Web Site Project",
            "desc":"Desire Meets A New Taste! Sometimes, you're in the mood to do one thing and one thing only: drink.",
            "sidenote":"Theme for this is about a Liquor Store selling customers available products. It was created at may 2021.",
            "link":"http://drink-up-store.epizy.com"
        },
    {
            "id": 11,
            "image":{
                "url":"p8_wide.png",
                "alt":"image"
            },
            "title":"Bllissful Blogger",
            "subtitle":"Web Site Project",
            "desc":"Submit your ideas, add your opinion on the newest stories on bloger site.Expolre and lear something revolutionary.",
            "sidenote":"Theme for this is about a Blogger Site designed for blog listing and based on a news oriented site. It was created at may 2021.",
            "link":"http://arsenal-blogger.epizy.com"
        }
        ]
  ispisProjekata(data);
function ispisProjekata(){
    html='';
    for(const e of data) {
        html+=` <div class="col-sm-6 col-md-4"> 
                        <div class="portfolio-item">
                            <img src="assets/img/portfolio/${e.image.url}"alt="${e.image.alt}"
                             class="img-res">
                            <div class="portfolio-item-info">
                                <h4>${e.title}</h4>
                                <h5>${e.subtitle}</h5>
                                <a href="#portfolio" class="modal-btn"
                                 onclick="openmodal(${e.id})">View more</a>
                               
                            </div>
                        </div>
                    </div>`
    };
    if($('.portfolio_container').length){
        document.querySelector(".portfolio_container").innerHTML = html;
    }

}
//modal Ispis
 modalispis(data);
function modalispis(){
    var ispis ="";
     for (const i of data) {
      ispis+=`   <div class="modal-div card${i.id}">
                            <div>
                                <div>
                                      <a href="#" class="close">
                                      <i class="fa fa-window-close" aria-hidden="true"></i>
                                      </a>
                                            <h2>${i.title}</h2>
                                            <h3>${i.subtitle}</h3>
                                            <div class="h-25"></div>
                                            <p>${i.desc}
                                            ${i.sidenote ?i.sidenote:""}
                                            </p>
                                            <br/>
                                 ${i.link ? '<a href="'+i.link+'" target="blank_"><h4>Check Out The Site</h4></a><br/>' : ""}
                                           
                                            <div class="modal-img">
                                                <img src="assets/img/portfolio/${i.image.url}"alt="${i.image.alt}"
                                                class="img-res">
                                            </div>
                                            </div>
                                    </div>
                                </div>`
     }
            if($('.modal-in').length){
            document.querySelector(".modal-in").innerHTML = ispis;
            }
   }

  
});//ready
  function openmodal(ID){
     var modal = $("#my-modal");
      // console.log(ID)
       modal.show();
     $('.modal-div').hide();
     $('.card'+ID).show();
     
   
   $(".close").click(function(e){
       e.preventDefault()
     modal.hide();
   });
   
}
