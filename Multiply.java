package algorithms;

import java.io.IOException;
import java.util.Arrays;

/*
 * This problem was asked by Uber.
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * 
 * ****Follow-up: what if you can't use division?****
 */
public class Multiply {

	private static int[] solution(int[] values) {
		double[] res = new double[values.length];
		int[] converted = new int[values.length];

		int max = 1;
		for (int i = 0; i < values.length; i++) {
			max *= values[i];
		}

		for (int i = 0; i < values.length; i++) {
			if (values[i] != 0)
				res[i] = max * Math.pow(values[i], -1);
		}

		for (int i = 0; i < values.length; i++) {
			converted[i] = (int) res[i];
		}

		return converted;
	}

	public static void main(String[] args) throws IOException {

		/**
		 * Escreva a sua solução aqui5 Code your solution here Escriba su solución aquí
		 */
		int[] values = { 1, 1, 2, 3, 4, 5 };
		System.out.println(Arrays.toString(solution(values)));
	}
}
