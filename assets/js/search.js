// A part of this code come from https://github.com/alexpearce/alexpearce.github.com/blob/master/assets/js/alexpearce.js

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

filterPostsByPropertyValue = function(posts, property, value) {
  var filteredPosts = [];
  // The last element is a null terminator
  posts.pop();
  for (var i in posts) {
    var post = posts[i];
    var prop = post[property];

    // Last element of tags is null
    post.tags.pop();

    // The property could be a string, such as a post's category,
    // or an array, such as a post's tags
    if (prop !== undefined){
     if (prop.constructor === String) {
      if (prop.toLowerCase() === value.toLowerCase()) {
        filteredPosts.push(post);
      }
     }
     else if (prop.constructor === Array) {
        for (var j in prop) {
            if (prop[j].toLowerCase() === value.toLowerCase()) {
              filteredPosts.push(post);
            }
        }
     }
 }
}

return filteredPosts;
};

layoutResultsPage = function(posts) {
  // Loop through each post to format it
  results = $('.results');

  for (var i in posts) {
    // Create an unordered list of the post's tags
    var tagsList = '',
        post     = posts[i],
        tags     = post.tags;

    for (var j in tags) {
      tagsList += '' + '<a class="label label-danger" href="/search.html?tags=' + tags[j] + '">' + tags[j] + '</a>' + '</li>';
    }
    tagsList += '';

	  console.log(post.date);
    results.append(
      '<section class="post">'
        // Page anchor
        + '<header class="entry-header">'
        + '<h3 class="entry-title">' + '<a href="' + post.href + '">' + post.title + '</a>' + '</h3>'
          // Post date
          + '<p class="entry-meta">Posted on <span class="entry-date">' + post.date.day + " " + post.date.month + " " + post.date.year + '</span>'
          // Tags
          + tagsList + '</p>'
        + '</header>' +
      '</section>'
    );
  }
};

updateHeader = function (categories, tag){
  $('h1').html('Search for "' + tag + '" in ' + categories );
};

noResultsPage = function () {
  results = $('ul.results');
  results.append("No results");
};


var map = {
  'categories' : getParam('categories'),
  'tag'        : getParam('tag')
};

$.getJSON('/search/search.json', function(data) {
  posts = filterPostsByPropertyValue(data, "tags", map.tag);
  updateHeader(map.categories, map.tag);
  if (posts.length === 0) {
    // Display 'no results found' or similar here
    noResultsPage();
  } else {
    layoutResultsPage(posts);
  }
});

