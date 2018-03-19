module.exports = {

  allQuestions: 'SELECT Users.username AS asker, content AS question, questionid AS id from Question JOIN Users WHERE Question.userid = Users.userid',

  allUsers: 'SELECT * FROM Users'

}
