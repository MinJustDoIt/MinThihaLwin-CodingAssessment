require 'date'

module Review
    class People
    @under_16 = DateTime.now - (15 * 365)

    class << self
      def under_16
        @under_16
      end

      private :under_16
    end

    attr_reader :name, :dob

    def initialize(name, dob = nil)
      if dob.nil?
        dob = self.class.send(:under_16)
      end
      @name = name
      @dob = dob
    end
  end

  class BirthingUnit
    # MaxItemsToRetrieve
    def initialize
      @people = []
    end

    # GetPeoples
    # @param j
    # @return Array<Object>
    def get_people(i)
      i.times do |j|
        begin
          # Creates a dandon Name
          name = ""
          if rand(0..1) == 0
            name = "Bob"
          else
            name = "Betty"
          end
          # Adds new people to the list
          @people << People.new(name, DateTime.now - (rand(18..85) * 356))
        rescue => e
          # Dont think this should ever happen
          raise "Something failed in user creation"
        end
      end
      @people
    end

    private

    def get_bobs(older_than_30)
      older_than_30 ? @people.select { |x| x.name == "Bob" && x.dob >= (DateTime.now - (30 * 356)) } : @people.select { |x| x.name == "Bob" }
    end

    public

    def get_married(p, last_name)
      return p.name if last_name.include?("test")
      
      if (p.name.length + last_name).length > 255
        (p.name + " " + last_name)[0, 255]
      end

      p.name + " " + last_name 
    end
  end
end
