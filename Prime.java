package algorithms;

/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
public class Prime {
	public static void main(String[] args) {
		System.out.println(solution());
	}

	private static long solution() {
		long num = 600851475143L;
		for (long i = 1; i < num; i++) {
			if (num % i == 0) {
				long factor = num / i;
				if (isPrime(factor)) {
					return factor;
				}
			}
		}
		return 0;
	}

	private static boolean isPrime(long num) {
		long half = num / 2;
		for (int i = 2; i <= half; i++) {
			if (num % i == 0) {
				return false;
			}
		}
		return true;
	}
}
