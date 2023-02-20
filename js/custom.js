
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-0;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
            },
            767:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });
  
  })(window.jQuery);


let wrap = document.getElementById('wrap');

let api = new XMLHttpRequest();
api.open('GET','https://samnurasia.uz/api/?format=json',true);

api.onload = function () {
  let data =JSON.parse( this.response );
  data.forEach(e => {
    if(data.length == e.id){
      document.getElementById('title1').textContent = e.title;
      document.getElementById('name1').textContent = e.post_uploader.first_name +" " +e.post_uploader.last_name;
      document.getElementById('disc1').textContent = e.description;
    }
    if(data.length-1 == e.id){
      document.getElementById('title2').textContent = e.title;
      document.getElementById('name2').textContent = e.post_uploader.first_name +" " +e.post_uploader.last_name;
      document.getElementById('disc2').textContent = e.description;
    }
    if(data.length-3 == e.id){
      document.getElementById('title3').textContent = e.title;
      document.getElementById('name3').textContent = e.post_uploader.first_name +" " +e.post_uploader.last_name;
      document.getElementById('disc3').textContent = e.description;
    }
    // *********************************************
    let div = document.createElement('div');
    div.setAttribute('class','col-lg-6 col-12 mb-4 mb-lg-0 my-3')
    wrap.appendChild(div);

    let customBlok = document.createElement('div');
    customBlok.setAttribute('class','custom-block d-flex')
    div.appendChild(customBlok);

    let customBlokInfo = document.createElement('div');
    customBlokInfo.setAttribute('class','custom-block-info')
    customBlok.appendChild(customBlokInfo);
    
    let h5 = document.createElement('h5');
    h5.setAttribute('class','mb-2');
    customBlokInfo.appendChild(h5);

    let a1 =document.createElement('a');
    a1.setAttribute('class','api-title');
    a1.setAttribute('href',e.file);
    a1.textContent = e.title;
    h5.appendChild(a1);

    let  p1 = document.createElement('p');
    p1.setAttribute('class','mb-0 api-desc');
    p1.textContent = e.description;
    customBlokInfo.appendChild(p1);

    let reaction = document.createElement('div');
    reaction.setAttribute('class','custom-block-bottom d-flex justify-content-between mt-3');
    customBlokInfo.appendChild(reaction);

    reaction.innerHTML += `<a href="#" class="bi-heart me-1">
    <span>42.5k</span>
</a>

<a href="#" class="bi-chat me-1">
    <span>11k</span>
</a>`;

    let biDownload = document.createElement('a');
    biDownload.setAttribute('class','bi-download');
    biDownload.href = e.file;
    reaction.appendChild(biDownload);

    let span = document.createElement('span');
    span.textContent = '50K';
    biDownload.appendChild(span);
    
    customBlok.innerHTML += `<div class="d-flex flex-column ms-auto">
    <a href="#" class="badge ms-auto">
        <i class="bi-heart"></i>
    </a>
    <a href="#" class="badge ms-auto">
        <i class="bi-bookmark"></i>
    </a>
</div>`

  });
}

api.send();