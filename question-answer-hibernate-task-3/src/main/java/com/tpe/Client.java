package com.tpe;

import java.util.List;

import com.tpe.domain.Answer;
import com.tpe.domain.Question;
import com.tpe.domain.QuestionDetail;
import com.tpe.domain.enums.QuestionPriority;
import com.tpe.service.AnswerService;
import com.tpe.service.IAnswerService;
import com.tpe.service.IQuestionDetailService;
import com.tpe.service.IQuestionService;
import com.tpe.service.QuestionDetailService;
import com.tpe.service.QuestionService;
import com.tpe.util.HibernateUtil;

public class Client {

	static IQuestionService qService = new QuestionService();
	static IQuestionDetailService qServiceDetail = new QuestionDetailService();
	static IAnswerService answerService = new AnswerService();

	public static void main(String[] args) throws InterruptedException {

//		Question question =new Question();
//		question.setName("What is Hibernate");
//		question.setPriority(QuestionPriority.CRITICAL);

		Client client = new Client();
//		client.saveQuestion(question);

		// Question questionFound= client.findQuestion(106L);

		Thread thread1 = new Thread(new Runnable() {

			@Override
			public void run() {
				Question q = new Question();
				q.setName("What is Thread");
				q.setPriority(QuestionPriority.HIGH);
				client.saveQuestion(q);

			}
		});

		thread1.start();

		Thread thread2 = new Thread(new Runnable() {

			@Override
			public void run() {
				Question q = new Question();
				q.setName("What is NodeJS");
				q.setPriority(QuestionPriority.HIGH);
				client.saveQuestion(q);

			}
		});

		thread2.start();

		// Lazy olursa LazyInitializationException alınır.
		// questionFound.getAnswerList().size();

		// client.deleteQuestion(questionFound.getId());

//		QuestionDetail detail=new QuestionDetail();
//		detail.setDescription("It is about the relation");
//		detail.setQuestion(questionFound);
//		client.saveQuestionDetail(detail);

//		
//		Answer answer=new Answer();
//		answer.setName("Answer1");
//		answer.setDescription("There are a few relations such as:onetone,onetomany,manytoone,manytomany");
//		answer.setQuestion(questionFound);

//		Answer answer2=new Answer();
//		answer2.setName("Answer1");
//		answer2.setDescription("You can create uni and bi-directional onetoone relation");
//		answer2.setQuestion(questionFound);

//		Answer foundAnswer= client.findAnswer(126L);
//		foundAnswer.setName("Answer2");
//		client.updateAnswer(foundAnswer);

//		 List<Answer> answerList = client.findAnswersByQId(106L);
//		 System.out.println(answerList.size());

//		 for (Answer answer : answerList) {
//			System.out.println(answer.getId()+":"+answer.getName()+":"+answer.getDescription());
//		}

//		client.saveAnswer(answer);
		// client.saveAnswer(answer2);

		thread1.join();
		thread2.join();
		
		HibernateUtil.getSessionFactory().close();

	}

	private List<Answer> findAnswersByQId(Long id) {
		return answerService.getAllAnswerByQuestionId(id);
	}

	private void saveAnswer(Answer answer) {
		answerService.saveAnswer(answer);
	}

	private void updateAnswer(Answer answer) {
		answerService.updateAnswer(answer);
	}

	private Answer findAnswer(Long id) {
		return answerService.findAnswer(id);
	}

	private synchronized void saveQuestion(Question question) {
		qService.saveQuestion(question);
	}

	private Question findQuestion(Long id) {
		return qService.findQuestion(id);
	}

	private void deleteQuestion(Long id) {
		qService.deleteQuestion(id);
	}

	private void saveQuestionDetail(QuestionDetail questionDetail) {
		qServiceDetail.saveQuestionDetail(questionDetail);
	}

//	public <T>  void save(T t) {
//		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
//		Session session= sessionFactory.openSession();
//		Transaction tx= session.beginTransaction();
//		     
//		session.save(t);
//		
//		tx.commit();
//		session.close();
//	}
//	
//	public <T>  T find(Long id,Class<T> c) {
//		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
//		Session session= sessionFactory.openSession();
//		Transaction tx= session.beginTransaction();
//		     
//		T t= (T) session.get(c,id);
//		
//		tx.commit();
//		session.close();
//		
//		return t;
//	}

}
