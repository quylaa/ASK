module.exports = {

  allQuestions: 'SELECT Users.username AS asker, content AS question, questionid AS id, score, timestamp, Questions.color from Questions JOIN Users WHERE Questions.userid = Users.userid',

  allAnswers: 'SELECT Users.username AS author, content AS answer, answerid AS id, questionid, score, timestamp FROM Answers JOIN Users WHERE Answers.userid = Users.userid',

  anQuestion: 'CALL getQuestion(?)',

  oneQuestion: 'SELECT questionid, userid, content, score FROM Questions WHERE questionid = ?',

  addQuestion: 'INSERT INTO Questions (userid, content) VALUES (?, ?)',

  removeQuestion: 'CALL deleteQuestion(?)',

  someAnswers: 'CALL getAnswers(?)',

  oneAnswer: 'SELECT answerid, questionid, userid, content, score FROM Answers WHERE answerid = ?',

  addAnswer: 'INSERT INTO Answers (questionid, userid, content) VALUES (?, ?, ?)',

  removeAnswer: 'DELETE FROM Answers WHERE answerid = ?',

  allUsers: 'SELECT * FROM Users',

  checkLogin: 'SELECT userid FROM Users WHERE username = ? and password = MD5(?)',

  anUser: 'SELECT userid, name, username, email FROM Users WHERE userid = ?',
  
  userQuestions: 'SELECT questionid, content, score, timestamp FROM Questions WHERE userid = ?',

  userAnswers: 'SELECT answerid, questionid, content, score, timestamp FROM Answers WHERE userid = ?',

  addUser: 'INSERT INTO Users (name, username, password, email) VALUES (?, ?, MD5(?), ?)',

  getVotes: 'SELECT votes FROM Users WHERE userid = ?',

  setVotes: 'UPDATE Users SET votes = ? WHERE userid = ?',

  modQScore: 'UPDATE Questions SET score = score?1 WHERE questionid = ?',

  modAScore: 'UPDATE Answers SET score = score?1 WHERE answerid = ?'
}

/* MariaDB stored procedures, for documentation
 *
 * getQuestion(questionid) - return a single question object
 *
DELIMITER $$
CREATE OR REPLACE PROCEDURE getQuestion(IN _questionid INT)
BEGIN
SELECT Users.username AS asker, content AS question, questionid AS id, score, timestamp from Questions JOIN Users ON Questions.userid = Users.userid WHERE questionid = _questionid;
END$$
 * 
 * getAnswers(questionid) - return all answers for a given question
 *
DELIMITER $$
CREATE OR REPLACE PROCEDURE getAnswers(IN _questionid INT)
BEGIN
SELECT Users.username AS author, Answers.content AS answer, answerid AS id, Answers.questionid, Answers.score AS answerScore, timestamp FROM Answers JOIN Users ON Answers.userid = Users.userid WHERE Answers.questionid = _questionid;
END$$
 * 
 * deleteQuestion(questionid) - remove all answers for a question, and then the question itself
 *
DELIMITER $$
CREATE OR REPLACE PROCEDURE deleteQuestion(IN _questionid INT)
BEGIN
DELETE FROM Answers WHERE questionid = _questionid;
DELETE FROM Questions WHERE questionid = _questionid;
END$$
 * 
 */
