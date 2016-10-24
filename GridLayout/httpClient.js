
window.curProject = window.curProject||{};

(function () {

    function HTTPClient() {
        this.def = $.Deferred();
    }
    HTTPClient.prototype.requestWithURL = function (url) {
        console.log(this);
        var self = this;
     $.get(url,function (data) {
         console.log(data);
        self.def.resolve(data);
     });
        return this.def;
    };

    curProject.HTTPClient = HTTPClient;
})();
