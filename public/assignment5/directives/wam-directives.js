/**
 * Created by zhangyuxi on 2016/6/12.
 */
(function () {
    angular.module("MyDirectives", [])
        .directive("wamSortable", wamSortable);

    function wamSortable() {
        function linker(scope,element,attributes){
            var data=scope.data;
            var myScope=scope;
            var startIndex=-1;
            var endIndex=-1;
            $(element)
                .find(".container")
                .sortable({
                        axis:'y',
                        start:function(event,ui){
                            startIndex=ui.item.index();
                        },
                        stop:function(event,ui){
                            endIndex=ui.item.index();
                            myScope.callback({start:startIndex,end:endIndex});
                        }
                    }
                );
        }
        return {
            templateUrl: "./directives/wam-directives.html",
            scope: {
                widgets:"=",
                data:"=",
                callback:"&"
            },
            link: linker
        }
    }
})();