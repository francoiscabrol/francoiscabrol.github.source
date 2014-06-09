module Jekyll
  class Picture < Liquid::Tag

    require 'securerandom'

    def initialize(name, id, tokens)
        super
        @url  = id
        @id = SecureRandom.urlsafe_base64(5)
        if $3.nil? then
            @width = 300
            @height = 200
            else
            @width = $3.to_i
            @height = $4.to_i
        end
    end

    def lookup(context, name)
        lookup = context
        name.split(".").each { |value| lookup = lookup[value] }
        lookup
    end

    def render(context)
        page_url = "#{lookup(context, 'site.url')}/assets/images/#{@url}"
        %(<div class=\"thumbnail col-xs-6 col-md-4\">
            <img class=\"img-rounded\"  src=\"#{page_url}\" />
        </div>)
    end
    Liquid::Template.register_tag "picture", self
  end
end