import * as AnswerAPIUtil from './../util/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';


const receiveAnswer = (answer) => ({
    type: RECEIVE_ANSWER,
    answer,
});

const receiveAnswers = answers => {
    ;
    return ({
        type: RECEIVE_ANSWERS,
        answers
    })
};

export const createAnswer = (answer, questionId) => dispatch => {
    return (AnswerAPIUtil.createAnswer(answer, questionId).then(answer => console.log(answer))
        //    dispatch(receiveAnswer(answer))
    )
};
         
export const requestAnswers = (questionId) => dispatch => {
    // console.log("backend", AnswerAPIUtil.fetchAnswers(questionId));
    return (AnswerAPIUtil.fetchAnswers(questionId).then((answers) =>
            dispatch(receiveAnswers(answers)))
    );
};