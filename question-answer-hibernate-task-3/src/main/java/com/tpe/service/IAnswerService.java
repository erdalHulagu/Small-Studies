package com.tpe.service;

import java.util.List;

import com.tpe.domain.Answer;

public interface IAnswerService {
	  void saveAnswer(Answer answer);
	  void updateAnswer(Answer answer);
	  void deleteAnswer(Long id);
	  Answer findAnswer(Long id);
	  List<Answer> getAllAnswer();
	  List<Answer> getAllAnswerByQuestionId(Long id);
	  
}
