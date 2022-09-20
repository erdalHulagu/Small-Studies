package com.tpe.service;

import java.util.List;

import com.tpe.dao.QuestionDetailDao;
import com.tpe.domain.QuestionDetail;
import com.tpe.exception.ResourceNotFoundException;

public class QuestionDetailService implements IQuestionDetailService {

	private static final QuestionDetailDao questionDetailDao=new QuestionDetailDao();
	
	@Override
	public void saveQuestionDetail(QuestionDetail questionDetail) {
		questionDetailDao.save(questionDetail);
		
	}

	@Override
	public void updateQuestionDetail(QuestionDetail questionDetail) {
		questionDetailDao.update(questionDetail);
	}

	@Override
	public void deleteQuestionDetail(Long id) {
		questionDetailDao.delete(id);
	}

	@Override
	public List<QuestionDetail> getAllQuestionDetail() {
		return getAllQuestionDetail();
	}

	@Override
	public QuestionDetail find(Long id) {
		return questionDetailDao.find(id).orElseThrow(()->
				new ResourceNotFoundException("QuestionDetail Not found with id:"+id));
	}
	
	

}
