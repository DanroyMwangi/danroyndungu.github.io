if($('.burger-icon')){
    const burgerIcon = $('.burger-icon');
    const closeIcon = $('.close-icon');
    const mobileNav = $('.mobile-nav-links');

    $(burgerIcon).click(()=>{
        $(burgerIcon).hide("slow","linear");
        $(closeIcon).show("slow","linear");
        $(mobileNav).show("fast","linear");
    });

    $(closeIcon).click(()=>{
        $(closeIcon).hide("slow","linear");
        $(mobileNav).hide("slow","linear");
        $(burgerIcon).show("slow","linear");
    });
}
if($('.show-contact')){
    const showContact = $('.show-contact')
    const closeContact = $('.close-contact')
    const contactBox  = $('.contact-box');

    $(showContact).click(()=>{
        contactBox.removeClass("hidden");
    });
    $(closeContact).click(()=>{
        contactBox.addClass("hidden");
    });
}

if($('.construction')){
    $('.construction').click(()=>{
        alert('The page is currently under construction');
    });
}

if($('.carousel')){
    var activeItem = $('.active');
    var carouselItems = document.querySelectorAll('.carousel-item');
    var itemsTotal = carouselItems.length;

    setInterval(
        function(){
            carouselChanger(activeItem, carouselItems, itemsTotal);
        }, 1000);
}

function carouselChanger(active, itemsList, listTotal){
    $(itemsList).each((index,item)=>{
        if($(item).hasClass("active") && $(item).hasClass("carousel-item") && index != (listTotal-1)){
            setTimeout(()=>{
                if($(item).hasClass("-translate-x-full")){
                    $(item).addClass("-translate-x-full");
                    $(item).addClass("hidden");
                    $(item).removeClass("active");
                    $(carouselItems[index+1]).addClass("active");
                    $(carouselItems[index+1]).removeClass("hidden");
                    $(carouselItems[index+1]).removeClass("-translate-x-full");
                    carouselChanger($(".active"),itemsList,listTotal)
                }
                else{
                    $(item).addClass("-translate-x-full");
                    $(item).addClass("hidden");
                    $(item).removeClass("active");
                    $(carouselItems[index+1]).addClass("active");
                    $(carouselItems[index+1]).removeClass("hidden");
                    $(carouselItems[index+1]).removeClass("translate-x-full");
                    carouselChanger($(".active"),itemsList,listTotal)
                }
            },3000);
        }
        else if($(item).hasClass("active") && $(item).hasClass("carousel-item") && index == (listTotal-1)){
            setTimeout(()=>{
                if($(item).hasClass("-translate-x-full")){
                    $(item).addClass("-translate-x-full");
                    $(item).addClass("hidden");
                    $(item).removeClass("active");
                    $(carouselItems[index+1]).addClass("active");
                    $(carouselItems[index+1]).removeClass("hidden");
                    $(carouselItems[index+1]).removeClass("translate-x-full");
                    carouselChanger($(".active"),itemsList,listTotal)
                }
                else{
                    $(item).addClass("-translate-x-full");
                    $(item).addClass("hidden");
                    $(item).removeClass("active");
                    $(carouselItems[0]).addClass("active");
                    $(carouselItems[0]).removeClass("hidden");
                    $(carouselItems[0]).removeClass("-translate-x-full");
                    carouselChanger($(".active"),itemsList,listTotal)
                }
            },3000);
        }
    });
}