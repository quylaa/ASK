module.exports = {

  allQuestions: 'SELECT Users.username AS asker, content AS question, questionid AS id, score, timestamp, Question.color from Question JOIN Users WHERE Question.userid = Users.userid',

  allAnswers: 'SELECT Users.username AS author, content AS answer, answerid AS id, questionid, score, timestamp, Answer.color FROM Answer JOIN Users WHERE Answer.userid = Users.userid',

  anQuestion: 'CALL getQuestion(?)',

  someAnswers: 'CALL getAnswers(?)',

  allUsers: 'SELECT * FROM Users'

}

/* MariaDB stored procedures, for documentation
 *
 * getQuestion(questionid) - return a single question object
 *
DELIMITER $$
CREATE PROCEDURE getQuestion(IN _questionid INT)
BEGIN
SELECT Users.username AS asker, content AS question, questionid AS id, score, timestamp, Question.color from Question JOIN Users ON Question.userid = Users.userid WHERE questionid = _questionid;
END$$
 * 
 * getAnswers(questionid) - return all answers for a given question
 *
DELIMITER $$
CREATE PROCEDURE getAnswers(IN _questionid INT)
BEGIN
SELECT Users.username AS author, Answer.content AS answer, answerid AS id, Answer.questionid, Answer.score AS answerScore, timestamp FROM Answer JOIN Users ON Answer.userid = Users.userid WHERE Answer.questionid = _questionid;
END$$
 * 
 */
