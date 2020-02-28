class Api::TagsController < ApplicationController

    def index
        @tags= Tag.all
    end

    # def show
    #     @questions = Question.find_by()
    # end

    
end
