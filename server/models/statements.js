module.exports = {

  allQuestions: 'SELECT Users.username AS asker, content AS question, questionid AS id, score, timestamp, Question.color from Question JOIN Users WHERE Question.userid = Users.userid',

  allAnswers: 'SELECT Users.username AS author, content AS answer, answerid AS id, questionid, score, timestamp, Answer.color FROM `Answer` JOIN `Users` WHERE Answer.userid = Users.userid',

  anQuestion: 'CALL getQuestion(?)',

  addQuestion: 'INSERT INTO `Question` (userid, content) VALUES (?, ?)',

  removeQuestion: 'CALL deleteQuestion(?)',

  someAnswers: 'CALL getAnswers(?)',

  addAnswer: 'INSERT INTO `Answer` (questionid, userid, content) VALUES (?, ?, ?)',

  removeAnswer: 'DELETE FROM `Answer` WHERE answerid = ?',

  allUsers: 'SELECT * FROM `Users`',

  checkLogin: 'SELECT COUNT(1) FROM `Users` WHERE `username` = ? and `password` = MD5(?)',

  anUser: 'SELECT userid, name, username, email FROM `Users` WHERE `username` = ?',

  addUser: 'INSERT INTO `Users` (name, username, password, email) VALUES (?, ?, MD5(?), ?)'

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
 * deleteQuestion(questionid) - remove all answers for a question, and then the question itself
 *
DELIMITER $$
CREATE PROCEDURE deleteQuestion(IN _questionid INT)
BEGIN
DELETE FROM Answers WHERE questionid = _questionid;
DELETE FROM Question WHERE questionid = _questionid;
END$$
 * 
 */
