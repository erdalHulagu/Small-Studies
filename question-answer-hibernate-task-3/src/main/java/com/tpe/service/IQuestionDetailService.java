package com.tpe.service;

import java.util.List;

import com.tpe.domain.QuestionDetail;

public interface IQuestionDetailService {
	  void saveQuestionDetail(QuestionDetail questionDetail);
	  void updateQuestionDetail(QuestionDetail questionDetail);
	  void deleteQuestionDetail(Long id);
	  QuestionDetail find(Long id);
	  List<QuestionDetail> getAllQuestionDetail();
	
}
