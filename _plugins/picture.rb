module Jekyll
  class Picture < Liquid::Tag
    
    def initialize(name, id, tokens)
        super
        @id  = id
        @url = url
        if $3.nil? then
            @width = 100
            @height = 100
            else
            @width = $3.to_i
            @height = $4.to_i
        end
    end
    
    def render(context)
        %(<a class="lightbox" href="#" lightbox=\"#{@id}\"> <img src="{{ site.url }}/assets/images/#{@url}" /></a><div class="lightbox" lightbox=\"#{@id}\"><div class="background"></div><div class="content"><img src="{{ site.url }}/assets/images/#{@url}" /></div></div>)
    end
    Liquid::Template.register_tag "picture", self
  end
end