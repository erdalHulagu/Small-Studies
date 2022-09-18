package com.tpe.threads;

public class MultiThreading02 {

	public static int counter = 0;

	public static void main(String[] args) throws InterruptedException {

		Thread thread1 = new Thread(new Runnable() {

			@Override
			public void run() {
				Counter.count();
				System.out.println("Thread1 is completed......");
			}
		});

		thread1.start();
		
		//n adet threadin olduğu yapıda join() kullanmak threadleri sıraya sokmak için mantıklı olmayabilir.
		//thread1.join();

		Thread thread2 = new Thread(new Runnable() {

			@Override
			public void run() {
				Counter.count();
				System.out.println("Thread2 is completed......");
			}
		});

		thread2.start();

	}

}

class Counter {
	//synchronized bu metodu kullanan threadları sıraya soktuk.
	public synchronized static void count() {
		for (int i = 1; i <= 1000; i++) {
			MultiThreading02.counter++;
		}

		System.out.println("Counter:" + MultiThreading02.counter);
	}
}
