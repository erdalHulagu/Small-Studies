package com.tpe.threads;

public class MultiThreading04 {

	public static void main(String[] args) throws InterruptedException {
	
		Brackets2 brackets=new Brackets2();
		
		long startTime=System.currentTimeMillis();
		
		Thread thread1=new Thread(new Runnable() {
			
			@Override
			public void run() {
				for (int i = 1; i <= 7; i++) {
					brackets.generateBrackets(); 
				}
			}
		});
		
		thread1.start();
		
	
		
	Thread thread2=new Thread(new Runnable() {
			
			@Override
			public void run() {
				for (int i = 1; i <= 7; i++) {
					brackets.generateBrackets(); 
				}
			}
		});
		
		thread2.start();
		
		thread1.join();
		thread2.join();
		
	  long endTime=	System.currentTimeMillis();
		
	  //System.out.println("Duration of synchronized method:"+(endTime-startTime)); //4326 milisecond 
	  System.out.println("Duration of synchronized block:"+(endTime-startTime));//2174 milisecond
	}

	}



class Brackets2{
	
	//synchronized metod
//	public synchronized void generateBrackets() {
//		for (int i = 1; i <=10; i++) {
//			if(i<=5) {
//				System.out.print("[");
//			}else {
//				System.out.print("]");
//			}
//		}
//		
//		System.out.println("");
//		
//		for (int i = 1; i <= 5; i++) {
//			try {
//				Thread.sleep(50);
//			} catch (InterruptedException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
//		
//	}
	
	public void generateBrackets() {
		//synchronized block
		//monitor object --lock
		synchronized (this) {
			for (int i = 1; i <=10; i++) {
				if(i<=5) {
					System.out.print("[");
				}else {
					System.out.print("]");
				}
			}
			
			System.out.println("");
		}

		for (int i = 1; i <= 5; i++) {
			try {
				Thread.sleep(50);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}
	
	
}