module.exports = {

  allQuestions: 'SELECT Users.username AS asker, content AS question, questionid AS id, score, timestamp, Question.color from Question JOIN Users WHERE Question.userid = Users.userid',

  allAnswers: 'SELECT Users.username AS author, content AS answer, answerid AS id, questionid, score, timestamp, Answer.color FROM Answer JOIN Users WHERE Answer.userid = Users.userid',

  someAnswers: 'SELECT Users.username AS author, content AS answer, answerid AS id, questionid, score, timestamp, Answer.color FROM Answer JOIN Users ON Answer.userid = Users.userid WHERE Answer.questionid = ?',

  allUsers: 'SELECT * FROM Users'

}
