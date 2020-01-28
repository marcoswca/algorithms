// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public static int solution(int[] A) {
        int startDate = 0;
        int endDate = 1;

        Set<Integer> destinations = new HashSet<Integer>();

        for (int i = 0; i < A.length; i++) {
            if (A[startDate] == A[i] && i != 0) {
                startDate++;
                endDate = startDate + 1;
            } else {
                if (!destinations.contains(A[i])) {
                    endDate = i;
                }
                ;
            }

            destinations.add(A[i]);
        }

// write your code in Java SE 8
        return endDate - startDate + 1;
    }

    public static void main(String[] args) {
        int arr[] = {1, 4, 1, 4, 5};
        System.out.println(solution(arr));
    }
}
