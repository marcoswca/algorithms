package algorithms;

import java.util.*;
/*
 * Find a pair X and Y in which the X+Y=K
 */
public class KValue {

	private static String solution(int[] values, int k) {

		Map<Integer, Boolean> map = new HashMap<Integer, Boolean>();

		// Um mapa auxilia para a busca ficar 0(1)
		for (int i = 0; i < values.length; i++) {
			map.put(values[i], true);
		}

		for (int i = 0; i < values.length; i++) {
			int comp = k - values[i];
			if (map.containsKey(comp))
				return String.format("O valor é %d e %d", values[i], comp);
		}

		return "Não há soluções";
	}

	public static void main(String[] args) {

		/**
		 * Escreva a sua solução aqui Code your solution here Escriba su solución aquí
		 */

		int k = 18;
		int[] values = { 10, 15, 3, 7 };
		System.out.println(solution(values, k));
	}

}
