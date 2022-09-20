package com.tpe.service;

import java.util.List;

import com.tpe.domain.Question;

public interface IQuestionService {
  void saveQuestion(Question question);
  void updateQuestion(Question question);
  void deleteQuestion(Long id);
  Question findQuestion(Long id);
  List<Question> getAllQuestion();
  
  
}
