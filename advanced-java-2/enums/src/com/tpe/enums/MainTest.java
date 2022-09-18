package com.tpe.enums;

public class MainTest {
	public static void main(String[] args) {
       
		//Consta değerler verirken sınırlama yok herhangi bir int değer verebiliyoruz.
		//Eğer kod düzgün design edilmedi runtime de hatalara neden olabilir .
		useConstantMethod(1);
		useConstantMethod(2);
		useConstantMethod(3);
		useConstantMethod(4);
		useConstantMethod(150);
		
		System.out.println("------------------------");
		
		//Enum tipinde var olan herhangi bir değer seçilebilir.
		//olmayan bir değer seçilirse compile time de hata alınacaktır.
		useEnumMethod(TransactionType.DEPOSIT);
		useEnumMethod(TransactionType.WITHDRAW);
		useEnumMethod(TransactionType.TRANSFER);
		useEnumMethod(TransactionType.PAYMENT);
		useEnumMethod(TransactionType.OTHER);
	}
	
	private static void useEnumMethod(TransactionType transactionType) {
//		if(transactionType==TransactionType.DEPOSIT) {
//			System.out.println("Money is depositing");
//		}else if(transactionType==TransactionType.WITHDRAW) {
//			System.out.println("Money is withdrawing");
//		}else if(transactionType==TransactionType.TRANSFER) {
//			System.out.println("Money is transfering");
//		}else if(transactionType==TransactionType.PAYMENT) {
//			System.out.println("Payment is being made");
//		}else System.out.println("Other transaction");
		
		
		
		
//		switch (transactionType) {
//		case DEPOSIT:
//			System.out.println("Money is depositing");
//			break;
//		case WITHDRAW:
//			System.out.println("Money is withdrawing");
//			break;
//		case TRANSFER:
//			System.out.println("Money is transfering");
//			break;
//		case PAYMENT:
//			System.out.println("Money is transfering");
//			break;	
//		default:
//			System.out.println("Other transaction");
//			break;
//		}
		
		//System.out.println("Enum Name:"+transactionType.name());//toString() ile aynı sonucu verir. 
		//System.out.println("Enum Name:"+transactionType.name().toString());
		//System.out.println("Enum Ordinal:"+transactionType.ordinal());
		System.out.println("Enum Code Value:"+transactionType.getTransactionCode());
		
		//Enum Type values() method kullanımı
		for (TransactionType tt : TransactionType.values()) {
			System.out.println("TransactionType:"+tt.name());
		}
	}
	
	
	
	private static void useConstantMethod(int i) {
		if(i==TransactionTypeConstant.DEPOSIT) {
			System.out.println("Money is depositing");
		}else if(i==TransactionTypeConstant.WITHDRAW) {
			System.out.println("Money is withdrawing");
		}else if(i==TransactionTypeConstant.TRANSFER) {
			System.out.println("Money is transfering");
		}else if(i==TransactionTypeConstant.PAYMENT) {
			System.out.println("Payment is being made");
		}else System.out.println("Other transaction");
	}
}
