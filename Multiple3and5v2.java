package algorithms;

/*
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
public class Multiple3and5v2 {
	public static void main(String[] args) {
		System.out.println(solution(999, 3) + solution(999, 5) - solution(999, 15));
	}

	// 1000 233168
	private static int solution(int value, int divisor) {
		int p = (int) value / divisor;
		return divisor * (p * (p + 1)) / 2;
	}
}
