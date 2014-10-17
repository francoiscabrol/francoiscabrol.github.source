// A part of this code come from https://github.com/alexpearce/alexpearce.github.com/blob/master/assets/js/alexpearce.js

Array.prototype.contains = function (v) {
    if (v === Array){
      for (var i in v){
        if (this.indexOf(v[i]))
          return true;
      }
      return false;
    }else{
      return this.indexOf(v) > -1;
    }
};

/**
* @param params = { 'categories'=, 'tag'= }
* @param callback if a function with one argument: the filtered posts
*/
function searchByProperty(params, callback){

    var tag        = params.tag;
    var categories = params.categories;

    $.getJSON('/search/search.json', function(data) {
        var posts = data;
        var filteredPosts = [];
        for (i=0; i<posts.length; i++) {
            var post = posts[i-1];
            if (post == null)
                continue;
            var post_tags = post["tags"];
            var post_categories = post["category"];

            // The property could be a string, such as a post's category,
            // or an array, such as a post's tags
            if (post_categories === Array && post_categories.contains(categories) || categories === Array && categories.contains(post_categories) || categories == post_categories){
                if (post_tags.contains(tag)){
                    filteredPosts.push(post);
                }
            }
            else if (categories == undefined){
                if (post_tags.contains(tag) || post_categories == tag){
                    filteredPosts.push(post);
                }
            }
        }
        callback && callback(filteredPosts);
    });

};
