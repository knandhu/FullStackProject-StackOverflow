class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all.reverse
        render 'api/questions/index', include: :tags
    end

    def show
        @question = Question.find(params[:id])
        render '/api/questions/show', include: :answers
    end

    def create 
    
        @question = Question.create(question_params)
        
        if @question.save
            render 'api/questions/show', include: :tags, include: :answers
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def update
        @question = Question.find(params[:id])
        # if @question.owner_id == current_user.id
        
        if @question.update(question_params)
            render '/api/questions/show', include: :tags
        else
            render json:@question.errors.full_messages, status: 401
        end
    end

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render '/api/questions/show', include: :tags

        # @question = Question.find(params[:id])
        # @question.destroy
        # flash[:info] = "Question deleted"
        # render :nothing => true
        # redirect_to api_questions_url
    end

    private
    def question_params
        params.require(:question).permit(:title, :body, :owner_id, tag_names: []) 
    end
end
