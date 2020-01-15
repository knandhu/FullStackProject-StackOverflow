export const searchQuestions = (searchTerm) => (
    $.ajax({
        url: `/search/?q=${searchTerm}`,
        method: 'GET'
    })
);

