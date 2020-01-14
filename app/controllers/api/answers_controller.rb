class Api::AnswersController < ApplicationController

    def index
        # @answers = Question.find(params[:question_id]).answers
        @answers = Answer.all
       render '/api/answers/index'
    end

    def show
        @answer = Answer.find(params[:id])
        # @answers = Question.find(params[:question_id]).answers

    end

    def create
        @answer = Answer.create(answer_params)
        if @answer.save
            render 'api/answers/show'
        else
            render json: @answer.errors.full_messages, status:422
        end
    end

    private
    def answer_params
        params.require(:answer).permit(:response, :question_id, :owner_id)
    end
end
