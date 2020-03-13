class MainController < ApplicationController
     before_action :force_json, only: :search
     before_action :force_json, only: :tag_search

     def search      
      @questions = Question.includes(:tags).ransack(title_cont: params[:q]).result(distinct:true)
      
      if @questions.length == 0
         @questions = Question.includes(:tags).ransack(tags_name_cont:params[:q]).result(distinct:true)
      end
      @questions

     end

     def tag_search
         @questions = Question.includes(:tags).where(tags: {name: params[:q]})
         @questions
     end

     private 
     def force_json
        request.format = :json
     end
end