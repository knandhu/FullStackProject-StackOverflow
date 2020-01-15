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