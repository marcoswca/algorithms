package algorithms;

import java.io.IOException;
import java.util.Scanner;

/**
 * IMPORTANT: O nome da classe deve ser "Main" para que a sua solução execute
 * Class name must be "Main" for your solution to execute El nombre de la clase
 * debe ser "Main" para que su solución ejecutar
 */
public class Profit {

	public static void main(String[] args) throws IOException {

		try (/**
				 * Escreva a sua solução aqui Code your solution here Escriba su solución aquí
				 */
		Scanner in = new Scanner(System.in)) {
			while (in.hasNext()) {
				int max = 0;
				int maxEndHere = 0;
				int days = in.nextInt();
				int costPerDay = in.nextInt();
				int[] profit = new int[days];
				for (int i = 0; i < days; i++) {
					profit[i] = in.nextInt() - costPerDay;
				}

				for (int i = 0; i < days; i++) {
					maxEndHere += profit[i];
					if (maxEndHere > max) {
						max = maxEndHere;
					}
					if (maxEndHere < 0) {
						maxEndHere = 0;
					}
				}

				System.out.println(max);
			}
		}
	}

}
