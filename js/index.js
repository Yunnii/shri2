(function () {
    "use strict";

    function highlitingColumn() {
        $(this).parents('table')
               .find('col:eq(' + $(this).index() + ')')
               .toggleClass('hover');
    }

    $(document).ready(function () {
        $("td:nth-child(even)")
            .toggleClass("even");

        $("tr:nth-child(even)")
            .toggleClass("even");

        $('td').hover(highlitingColumn);
        $('th').hover(highlitingColumn);

    });
}());