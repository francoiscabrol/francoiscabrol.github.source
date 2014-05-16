module Jekyll
    class Vimeo < Liquid::Tag
        
        def initialize(name, id, tokens)
            super
            @id = id
            
            if $2.nil? then
                @width = 560
                @height = 420
                else
                @width = $2.to_i
                @height = $3.to_i
            end
        end
        
        def render(context)
            %(<div class="video-container"><iframe class="vimeo-iframe" width=\"#{@width}\" height=\"#{@height}\" src="http://player.vimeo.com/video/#{@id}" frameborder="0">   </iframe></div>)
        end
    end
end