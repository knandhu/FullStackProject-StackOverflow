export const createAnswer = (answer,question_id) => (
    $.ajax({
        url: `/api/questions/${question_id}/answers`,
        method: 'POST',
        data: {answer}
    })
)

export const fetchAnswers = (question_id) => (
    $.ajax({
        url: `/api/questions/${question_id}/answers`,
        method: 'GET',
    })
)

export const fetchAnswer = (question_id, answer_id) => (
    $.ajax({
        url: `api/questions/${question_id}/answers/${answer_id}`,
        method: 'GET'
    })
)