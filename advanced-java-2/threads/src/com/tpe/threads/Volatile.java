package com.tpe.threads;

public class Volatile {

	//Eğer threadler bir değere bağlı ise, kod yapısında sonsuz döngü oluşma riski var.
	//bu riski ortadan kaldırmak için volatile kullanmayı unutma!!!
	volatile public static int flag = 0;

	public static void main(String[] args) {

		Thread thread1 = new Thread(new Runnable() {

			@Override
			public void run() {
				while (true) {
					if (flag == 0) {
						System.out.println("Thread1 running");
					} else {
						break;
					}
				}

			}
		});

		thread1.start();

		Thread thread2 = new Thread(new Runnable() {

			@Override
			public void run() {
				
				try {
					Thread.sleep(3000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				flag=1;
				System.out.println("The value of flag is updated");
			}
		});
		
		thread2.start();

	}

}
