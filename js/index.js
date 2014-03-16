(function () {
    "use strict";

    function highlitingColumn() {
        $(this).parents('table')
               .find('col:eq(' + $(this).index() + ')')
               .toggleClass('hover');
    }


    $(document).ready(function () {
        $('td').hover(highlitingColumn);
        $('th').hover(highlitingColumn);
    });
}());