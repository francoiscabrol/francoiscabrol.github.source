module Jekyll
  class Picture < Liquid::Tag

    require 'securerandom'

    def initialize(name, id, tokens)
        super
        @url  = id
        @id = SecureRandom.urlsafe_base64(5)
        if $3.nil? then
            @width = 100
            @height = 100
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
        %(<div><a class=\"lightbox\" lightbox=\"#{@id}\"><img class="thumbnail img-rounded"  src=\"#{page_url}\" /></a><div class=\"lightbox\" lightbox=\"#{@id}\">
            <div class=\"background\"></div>
            <div class=\"content\"><img src=\"#{page_url}\" /></div>
        </div></div>)
    end
    Liquid::Template.register_tag "picture", self
  end
end