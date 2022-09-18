package com.tpe.threads;

public class MultiThreading01 {

	public static void main(String[] args) throws InterruptedException {

		long startTime= System.currentTimeMillis();
		CounterWithoutMultiThread counter1=new CounterWithoutMultiThread(1);
		CounterWithoutMultiThread counter2=new CounterWithoutMultiThread(2);
		
		counter1.countMe();
		
		System.out.println("----------------------------");
		
		counter2.countMe();
		
		long endTime=System.currentTimeMillis();
		
		System.out.println("WithoutMultiThread Elapsed Time:"+(endTime-startTime));
		
		
		System.out.println("**************************************************");
		
		long startTime2= System.currentTimeMillis();
		CounterWithMultiThread counter3=new CounterWithMultiThread(1);
		CounterWithMultiThread counter4=new CounterWithMultiThread(2);
		
		counter3.start();
		
		System.out.println("----------------------------");
		
		counter4.start();
		
		//Thread.sleep(6000);
		
		//join--Waits for this thread to die. 
		counter3.join();
		counter4.join();
		
		long endTime2=System.currentTimeMillis();
		
		System.out.println("WithMultiThread Elapsed Time:"+(endTime2-startTime2));
		
	}

}

class CounterWithoutMultiThread{
	private int threadNum;
	
	public CounterWithoutMultiThread(int threadNum) {
		this.threadNum=threadNum;
	}
	
	public void countMe() throws InterruptedException {
		for (int i = 1; i <=10; i++) {
			Thread.sleep(500);
			
			System.out.println("i"+i+"Thread number:"+threadNum);
		}
	}
}


class CounterWithMultiThread extends Thread{
	private int threadNum;
	
	public CounterWithMultiThread(int threadNum) {
		this.threadNum=threadNum;
	}
	
	@Override
	public void run() {
	    try {
			countMe();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	public void countMe() throws InterruptedException {
		for (int i = 1; i <=10; i++) {
			Thread.sleep(500);
			
			System.out.println("i"+i+"Thread number:"+threadNum);
		}
	}
}


