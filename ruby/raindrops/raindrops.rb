module Raindrops
    class << self
        def convert(n)
            sound = []
            if n%3 == 0
                sound.push('Pling') 
            end
            if n%5 == 0 
                sound.push('Plang') 
            end
            if n%7 == 0 
                sound.push('Plong')
            end
            sound.length == 0 ?  n.to_s : sound.join
        end
    end
end

class BookKeeping
    VERSION = 3
end

