package com.tpe.domain;

import java.time.LocalDateTime;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.SequenceGenerator;
import javax.persistence.Version;

@MappedSuperclass
public class BaseEntity {

	@Id
	@GeneratedValue(generator="sequence",strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name="sequence",sequenceName = "question_answer_seq",initialValue = 100,allocationSize = 5)
	private Long id;
	
	@Version
	private Long version;
	
	private LocalDateTime createOn=LocalDateTime.now();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getVersion() {
		return version;
	}

	public LocalDateTime getCreateOn() {
		return createOn;
	}
	
}
