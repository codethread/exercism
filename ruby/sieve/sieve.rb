class Sieve
    attr_reader :limit
    def initialize(limit)
        @limit = limit
    end

    def primes
        (2..limit).reject {|n| non_primes_up_to(limit).include?(n) }
    end

    private

    def non_primes_up_to(limit)
        newNum = 2
        myarr = []
        while newNum < limit do
            newLimit = (limit/newNum).ceil
            myarr.push((newNum..newLimit).map {|n| n*newNum })
            newNum +=1
        end
        myarr.to_a.flatten
    end
end

class BookKeeping
    VERSION = 1
end
