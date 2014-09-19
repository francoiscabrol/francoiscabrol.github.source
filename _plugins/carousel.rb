# Example of use in a template:
# {% carousel localism_3.png | The mouse replacement || localism_2.png | The localism calibration window %}
module Jekyll
  class Carousel < Liquid::Tag

    def initialize(name, params, tokens)
        super
        @params = split_params (params)
    end

    def lookup(context, name)
        lookup = context
        name.split(".").each { |value| lookup = lookup[value] }
        lookup
    end

    def split_params(params)
      split_img = params.split("||").map(&:strip)
      split_img.map { |s| s.split("|").map(&:strip) }
    end

    def render(context)
      siteurl = "#{lookup(context, 'site.url')}"
      output = ""
      output.concat ("<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\"> <ol class=\"carousel-indicators\">")
      i = 0
      @params.each { |s|
        output.concat("<li data-target=\"#carousel-example-generic\" data-slide-to=\"" + i.to_s + "\"></li>")
        i = i + 1
      }
      output.concat ("</ol><!-- Wrapper for slides --><div class=\"carousel-inner\">")
      @params.each { |s|
        url = siteurl + "/assets/images/" + s[0]
        output.concat("<div class=\"item\"> <img src=\"" + url + "\" alt=\"" + s[1] + "\"><div class=\"carousel-caption\">" + s[1] + "</div></div>")
      }
      output.concat ("<!-- Controls -->
        <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">
          <span class=\"glyphicon glyphicon-chevron-left\"></span>
        </a>
        <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">
          <span class=\"glyphicon glyphicon-chevron-right\"></span>
        </a>
      </div>")
      puts output
      return output
    end
    Liquid::Template.register_tag("carousel", self)
  end
end
