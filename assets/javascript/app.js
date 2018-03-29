$(function()
{
  getButtons(topics, 'searchBtn','#buttonsArea');
  console.log('start');
});

var topics = ['rain', 'ocean', 'beach', 'snow', 'clouds', 'sailboat', 'flowers', 'forest', 'horses'];
function getButtons(topics, classToAdd, areaToAdd)
{
  $(areaToAdd).empty();
  for (i = 0; i< topics.length; i++)
  {
  var a = $('<button>');
  a.addClass(classToAdd);
  a.attr('data-type', topics[i]);
  a.text(topics[i]);
  $(areaToAdd).append(a);
  }
}

$(document).on('click','.searchBtn',function()
{
  $('#searches').empty();
  var type =$(this).data('type');
  console.log(type);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q= " +type+ "&api_key=pzny36Dz5ni50fT8IkHZbjumeP90Ty4s&limit=10";
  $.ajax({url: queryURL,method: "GET"})
      .done(function(response)
      {
        for ( i = 0; i < response.length; i++)
        {
          var searchDiv = $('<div class = "search-item">');
          var image = $('<img>');
          var animated= response.data[i].images.fixed_height.url;
          var still = response.data[i].images.fixed_height_still.url;
          image.attr('src',still);
          image.attr('data-still', still);
          image.attr('data-animated', animated);
          image.attr('data-state','still');
          image.addClass('searchImage');
          searchDiv.append(image);
          $('#searches').append(searchDiv);
        }
    })
  })
