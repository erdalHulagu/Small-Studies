package com.tpe.threads;

public class ThreadCreationWays {

	public static void main(String[] args) {
		
		System.out.println("Current Thread:"+Thread.currentThread().getName());
		
		MyThread thread1=new MyThread();
		//thread1.run(); run metodu çağrılarak thread başlatılmaz.
        thread1.start();//start metodu ile thread çalıştırılır. -->RUNNABLE state geçer.
        //-----------------
        
        MyRunnable runnable=new MyRunnable();
        Thread thread2=new Thread(runnable);
        thread2.start();
        
        Thread thread3=new Thread(new Runnable() {
			@Override
			public void run() {
//				try {
//					Thread.sleep(5000);
//				} catch (InterruptedException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
				
				System.out.println("Current Thread:"+Thread.currentThread().getName());//prints Current Thread:Thread3
				System.out.println("It is annonymous structure way");
				
			}
		});
        
        thread3.setName("Thread3");
        thread3.start();
        
        Thread thread4=new Thread(()->{
        	System.out.println("It is lambda way");
        });
        
        //thread4.setPriority(Thread.MAX_PRIORITY);
        thread4.start();
        
        
        
        System.out.println("Main method is ending"); 
        
        Thread thread5=new Thread(()->{
        	System.out.println("It is lambda way 2-Thread 5");
        });
        thread5.start();
        
	}

}

//1.way to create a thread : extends Thread
class MyThread extends Thread{
	
	@Override
	public void run() {
		System.out.println("It is custom thread is running");
	}
	
}

class MyRunnable implements Runnable{

	@Override
	public void run() {
		System.out.println("It is custom runnable class that implements Runnable interface");
		
	}
	
}



