import java.util.Arrays;

public class HIndex {
    public static void main(String[] args) {
        String line = "3,4,6,1,5";
        int[] papers = Arrays.stream(line.split(",")).map(String::trim).mapToInt(Integer::parseInt).toArray();
        int length = papers.length;
        int[] counter = new int[length + 1];

        for (int c : papers) {
            counter[Math.min(length, c)]++;
        }

        int k = length;

        for (int s = counter[length]; k > s; s += counter[k]) {
            k--;
        }

        System.out.println(k);
    }
}
