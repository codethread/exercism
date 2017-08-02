#
# Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.
#
# The square of the sum of the first ten natural numbers is
# (1 + 2 + ... + 10)² = 55² = 3025.
#
# The sum of the squares of the first ten natural numbers is
# 1² + 2² + ... + 10² = 385.
#
# Hence the difference between the square of the sum of the first
# ten natural numbers and the sum of the squares of the first ten
# natural numbers is 3025 - 385 = 2640.

class Squares
    attr_reader :number

    def initialize(number)
        @number = number
    end

    def square_of_sum
        find_natural_numbers.reduce(:+)**2
    end

    def sum_of_squares
        find_natural_numbers.inject {|sum, n| sum + n**2}
    end

    def difference
        square_of_sum - sum_of_squares
    end

    private
        def find_natural_numbers
            [*1..number]
        end
end

class BookKeeping
    VERSION = 4
end
