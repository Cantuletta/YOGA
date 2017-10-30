jQuery(function ($) {
    $("#trialForm").validate();

    $('.buy-link').hover(
        function () {
            $(this)
                .closest('.block-feature')
                .find('.basic-pro-premium')
                .addClass('hovered');
        },
        function () {
            $(this)
                .closest('.block-feature')
                .find('.basic-pro-premium')
                .removeClass('hovered');
        });
});
