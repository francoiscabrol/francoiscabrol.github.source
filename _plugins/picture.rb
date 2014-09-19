module Jekyll
  class Picture < Liquid::Tag

    require 'securerandom'

    def initialize(name, id, tokens)
        super
        @param = split_params (id)
        @url  = @param[0]
        # @id = SecureRandom.urlsafe_base64(5)
        if @param[1].nil? then
          @caption = " "
        else
          @caption = @param[1]
        end
    end

    def lookup(context, name)
        lookup = context
        name.split(".").each { |value| lookup = lookup[value] }
        lookup
    end

    def split_params(params)
  	   params.split(",").map(&:strip)
    end

    def render(context)
        page_url = "#{lookup(context, 'site.url')}/assets/images/#{@url}"
        %(<div class=\"thumbnail picture\">
            <img class=\"img-rounded\"  src=\"#{page_url}\" />
            <div class=\"caption\">#{@caption}</div>
        </div>)
    end
    Liquid::Template.register_tag "picture", self
  end
end
