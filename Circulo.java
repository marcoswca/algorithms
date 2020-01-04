package algorithms;

import java.io.IOException;
import java.util.Scanner;
import java.lang.Math;

/**
 * IMPORTANT: O nome da classe deve ser "Main" para que a sua solução execute
 * Class name must be "Main" for your solution to execute El nombre de la clase
 * debe ser "Main" para que su solución ejecutar
 */
public class Circulo {

	public static void main(String[] args) throws IOException {

		/**
		 * Escreva a sua solução aqui Code your solution here Escriba su solución aquí
		 */

		try (Scanner in = new Scanner(System.in)) {
			while (in.hasNext()) {
				Double rad = in.nextDouble();
				System.out.printf("%.4f\n", Math.PI * rad * rad);
			}
		}
	}

}
