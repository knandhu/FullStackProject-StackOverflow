export const createQuestion = (question) => (
    $.ajax({
        url: '/api/questions/',
        method: 'POST',
        data: { question:question }
    })
);

export const fetchQuestions = () => (
    $.ajax({
        url: '/api/questions',
        method: 'GET'
    })
);

export const fetchQuestion = (questionId) => (
    $.ajax({
        url: `/api/questions/${questionId}`,
        method:'GET'
    })  
);

export const updateQuestion = (question) => {
    return($.ajax({
        url: `/api/questions/${question.id}`,
        method: 'PATCH',
        data: {question}
    })
)};


export const deleteQuestion = (question) => {
    return($.ajax({
        url: `/api/questions/${question.id}`,
        method: 'DELETE',
        // data: { question }
    })
    )};