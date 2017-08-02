
# Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma,
# "every letter") is a sentence using every letter of the alphabet at least once.
# The best known English pangram is: 
# > The quick brown fox jumps over the lazy dog.
#
# The alphabet used consists of ASCII letters `a` to `z`, inclusive, and is case
# insensitive. Input will not contain non-ASCII symbols.

class Pangram
    class << self
        def pangram?(phrase)
            ('a'..'z').all? { |l| phrase_lowercased_no_punc(phrase).include?(l) }
        end

        def phrase_lowercased_no_punc(phrase)
            phrase.downcase.gsub(/[^a-z ]/, "")
        end
    end
end

class BookKeeping
    VERSION = 4
end
