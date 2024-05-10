var reportsWidget = {
  options: {
    containerSelector: ".reports",
    template:
      "{{#.}}" +
      '<article class="reports_item">' +
      '<a href="{{cover}}" target="_blank">' +
      '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover" title="{{title}} Cover"/>' +
      "</a>" +
      '<footer class="reports_docs">' +
      "{{#documents}}" +
      '<h3 class="reports_title">' +
      '<a href="{{url}}" target="_blank" title="{{title}}">{{title}} <span>({{file_size}} {{file_type}})</span></a>' +
      "</h3>" +
      "{{/documents}}" +
      "</footer>" +
      "</article>" +
      "{{/.}}",
  },

  init: function ($) {
    this.renderReports(reportData || [], $);
  },

  renderReports: function (reports, $) {
    var options = this.options;
    var $container = $(options.containerSelector);

    if (!reports || reports.length === 0) {
      $container.empty(); 
      return;
    }

    var html = Mustache.render(options.template, reports);
    $container.html(html);
  },
};

$(document).ready(function () {
  reportsWidget.init(jQuery); 
});
