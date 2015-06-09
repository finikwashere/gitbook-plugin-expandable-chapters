require(['gitbook', 'jQuery'], function(gitbook, $) {
  var TOGGLE_CLASSNAME = 'expanded',
      CHAPTER = '.chapter',
      ARTICLES = '.articles',
      TRIGGER_TEMPLATE = '<i class="exc-trigger fa"></i>';
  var init = function () {
    // adding the trigger element to each ARTICLES parent and binding the event
    $(ARTICLES)
      .parent(CHAPTER)
      .children('a')
      .append(
        $(TRIGGER_TEMPLATE)
          .on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggle($(e.target).closest(CHAPTER));
          })
      );
    //expand current selected chapter with it's parents
    var activeChapter = $('.active');
    expand(activeChapter);
    expand(activeChapter.parents(CHAPTER));


  } 
  var toggle = function ($chapter) {
    if ($chapter.hasClass('expanded')) {
      collapse($chapter);
    } else {
      expand($chapter);
    }
  }
  var collapse = function ($chapter) {
    if ($chapter.length) {
      $chapter.removeClass(TOGGLE_CLASSNAME);
    }
  }
  var expand = function($chapter) {
    if ($chapter.length) {
      $chapter.addClass(TOGGLE_CLASSNAME);
    }
  }
  gitbook.events.bind('page.change', function() {
    init()
  }); 
});