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
