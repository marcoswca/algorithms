package algorithms;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class MissingInteger {
	public static void main(String[] args) throws IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		int arr[] = Arrays.stream(in.readLine().split(" ")).mapToInt(Integer::parseInt).filter(x -> x >= 0).toArray();
		System.out.println(solution(arr));
	}

	public static int solution(int[] arr) {
		// Poderia colocar apenas uma verificação no terceiro for (if arr[i] <= 0 && arr[i] <= arr.length)
		// Assim fica mais didático
		for (int i = 1; i <= arr.length; i++) {
			if (arr[i - 1] <= arr.length)
				arr[i - 1] = -arr[i - 1];
		}

		
		// Poderia calcular como uma PA
		int sum = 0;
		for (int i = 1; i <= arr.length; i++) {
			sum += i;
		}

		int tempSum = 0;
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] <= 0)
				tempSum += arr[i];
		}
		
		int missing = sum + tempSum;
		
		// Se missing for 0 significa que não há nenhum número faltando, nesse caso retornamos arr.length + 1
		return missing == 0 ? arr.length + 1 : missing;
	}
}
