class Complement
    VALID_DNA_LETTERS = ['G', 'C', 'T', 'A']
    RNA_LETTERS = ['C', 'G', 'A', 'U']

    class << self
        def dnaToRna(letter)
            RNA_LETTERS[VALID_DNA_LETTERS.find_index(letter)]
        end

        def isValid?(letter)
            VALID_DNA_LETTERS.include?(letter)
        end

        def of_dna(rna)
            rna.chars.inject('') { |acc, l|
                unless isValid?(l)
                    break ''
                end
                acc + dnaToRna(l)
            }
        end
    end
end

module BookKeeping
    VERSION = 4 
end
