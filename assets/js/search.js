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

getParam = function(param) {
  var queryString = window.location.search.substring(1);
  var queries = queryString.split('&');
  for (var i in queries) {
    var pair = queries[i].split('=');
    if (pair[0] === param) {
      // Decode the parameter value, replacing %20 with a space etc.
      return decodeURI(pair[1]);
    }
  }
  return null;
};

filterPostsByPropertyValue = function(posts, categories, tag) {
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
  }
return filteredPosts;
};

layoutResultsPage = function(posts) {
  // Loop through each post to format it
  results = $('.results');

  for (i=0; i<posts.length; i++) {
    // Create an unordered list of the post's tags
    var tagsList = '';
    var post     = posts[i];
    console.log(post);
    if (post == null) continue;
    var tags = post.tags;

    for (j=0; j<tags.length;j++) {
      if (tags[j]==null) continue;
     tagsList += '' + '<a class="label label-danger" href="/search/?tag=' + tags[j] + '&categories=' + post.category + '">' + tags[j] + '</a>' + '</li> ';
    }
    tagsList += '';

   results.append(
      '<section class="post">'
        // Page anchor
        + '<header class="entry-header">'
        + '<h3 class="entry-title">' + '<a href="' + post.href + '">' + post.title + '</a>' + '</h3>'
          // Post date
          + '<p class="entry-meta">'
          // Tags
          + tagsList + '</p>'
        + '</header>');
	   results.append(post.description);
     result.append('</section>');
  }
};

updateHeader = function (categories, tag){
  $('h1').html('Search for "' + tag + '" in ' + categories );
};

noResultsPage = function () {
  results = $('ul.results');
  results.append("No results");
};


var params = {
  'categories' : getParam('categories'),
  'tag'        : getParam('tag')
};
console.log(params);
$.getJSON('/search/search.json', function(data) {
  console.log(data);
  posts = filterPostsByPropertyValue(data, params.categories, params.tag);
  updateHeader(params.categories, params.tag);
 if (posts.length === 0) {
   // Display 'no results found' or similar here
    noResultsPage();
  } else {
    layoutResultsPage(posts);
  }
});
