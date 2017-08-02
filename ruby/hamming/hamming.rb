class Hamming
    class << self
        def compute(a,b)
            a = a.chars
            b = b.chars

            if b.size !=  a.size
                raise new ArgumentError
            end

            a.zip(b).count { |x, y| x != y }
        end
    end
end


module BookKeeping
    VERSION = 3 
end
